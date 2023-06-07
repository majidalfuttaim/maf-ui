import { deleteAsync } from 'del';
import { exec as execCallback, spawn as spawnCallback } from 'child_process';
import { globby } from 'globby';
import browserSync from 'browser-sync';
import chalk from 'chalk';
import chokidar from 'chokidar';
import commandLineArgs from 'command-line-args';
import copy from 'recursive-copy';
import esbuild from 'esbuild';
import fs from 'fs/promises';
import getPort, { portNumbers } from 'get-port';
import ora from 'ora';
import util from 'util';

const exec = util.promisify(execCallback);
const spawn = util.promisify(spawnCallback);

const outdir = 'dist';
const spinner = ora().start();
let childProcess;
let buildResult;

const { bundle, copydir, dir, serve, types } = commandLineArgs([
  { name: 'bundle', type: Boolean },
  { name: 'copydir', type: String },
  { name: 'serve', type: Boolean },
  { name: 'types', type: Boolean }
]);

async function buildTheDocs(watch = false) {
  await deleteAsync('_site');

  if (!watch) {
    return execCallback('npx @11ty/eleventy --quiet', { stdio: 'inherit', cwd: 'docs' });
  }

  return spawnCallback('npx', ['@11ty/eleventy', '--watch', '--incremental', '--quiet'], {
    stdio: 'pipe',
    cwd: 'docs'
  });
}

async function buildTheSource() {
  const alwaysExternal = ['@lit-labs/react', 'react'];
  return await esbuild.build({
    format: 'esm',
    target: 'es2017',
    entryPoints: [
      //
      // NOTE: Entry points must be mapped in package.json > exports, otherwise users won't be able to import them!
      //
      // The whole shebang
      './src/shoelace.ts',
      // The auto-loader
      './src/shoelace-autoloader.ts',
      // Components
      ...(await globby('./src/components/**/!(*.(style|test)).ts')),
      // Translations
      ...(await globby('./src/translations/**/*.ts')),
      // Public utilities
      ...(await globby('./src/utilities/**/!(*.(style|test)).ts')),
      // Theme stylesheets
      ...(await globby('./src/themes/**/!(*.test).ts')),
      // React wrappers
      ...(await globby('./src/react/**/*.ts'))
    ],
    outdir,
    chunkNames: 'chunks/[name].[hash]',
    incremental: serve,
    define: {
      // Floating UI requires this to be set
      'process.env.NODE_ENV': '"production"'
    },
    bundle: true,
    //
    // We don't bundle certain dependencies in the unbundled build. This ensures we ship bare module specifiers,
    // allowing end users to better optimize when using a bundler. (Only packages that ship ESM can be external.)
    //
    // We never bundle React or @lit-labs/react though!
    //
    external: bundle
      ? alwaysExternal
      : [...alwaysExternal, '@floating-ui/dom', '@shoelace-style/animations', 'lit', 'qr-creator'],
    splitting: true,
    plugins: []
  });
}

function handleCleanup() {
  buildResult.rebuild.dispose();

  if (childProcess) {
    childProcess.kill('SIGINT');
  }

  process.exit();
}

async function nextTask(label, action) {
  spinner.text = label;
  spinner.start();

  try {
    await action();
    spinner.stop();
    console.log(`${chalk.green('✔')} ${label}`);
  } catch (err) {
    spinner.stop();
    console.error(`${chalk.red('✘')} ${err}`);
    process.exit(1);
  }
}

await nextTask('Cleaning up the previous build', async () => {
  await deleteAsync(outdir);
  await fs.mkdir(outdir, { recursive: true });
});

await nextTask('Generating component metadata', () => {
  return exec(`node scripts/make-metadata.js --outdir "${outdir}"`, { stdio: 'inherit' });
});

await nextTask('Wrapping components for React', () => {
  return exec(`node scripts/make-react.js --outdir "${outdir}"`, { stdio: 'inherit' });
});

await nextTask('Generating Web Types', () => {
  return exec(`node scripts/make-web-types.js --outdir "${outdir}"`, { stdio: 'inherit' });
});

await nextTask('Generating themes', () => {
  return exec(`node scripts/make-themes.js --outdir "${outdir}"`, { stdio: 'inherit' });
});

await nextTask('Packaging up icons', () => {
  return exec(`node scripts/make-icons.js --outdir "${outdir}"`, { stdio: 'inherit' });
});

await nextTask('Running the TypeScript compiler', () => {
  return exec(`tsc --project ./tsconfig.prod.json --outdir "${outdir}"`, { stdio: 'inherit' });
});

await nextTask('Building source files', async () => {
  return (buildResult = await buildTheSource());
});

// Copy the build output to an additional directory
if (copydir) {
  await nextTask(`Copying the build to "${copydir}"`, async () => {
    await deleteAsync(copydir);
    await copy(outdir, copydir);
  });
}

if (serve) {
  const deferredOutput = [];
  let hasBuilt = false;

  // Spin up Eleventy and Wait for the search index to appear before proceeding. The search index is generated during
  // eleventy.after, so it appears after the docs are fully published. This is kinda hacky, but here we are.
  // Kick off the Eleventy dev server with --watch and --incremental
  await nextTask('Building docs', async () => {
    childProcess = await buildTheDocs(true);

    // Store Eleventy's output for later
    childProcess.stdout.on('data', data => {
      if (hasBuilt) {
        console.log(data.toString());
      } else {
        deferredOutput.push(data.toString());
      }
    });

    return new Promise(resolve => {
      const watcher = chokidar.watch('_site', { persistent: true });
      watcher.on('add', async filename => {
        if (filename.endsWith('search.json')) {
          await watcher.close();
          resolve();
        }
      });
    });
  });

  const bs = browserSync.create();
  const port = await getPort({ port: portNumbers(4000, 4999) });
  const browserSyncConfig = {
    startPath: '/',
    port,
    logLevel: 'silent',
    logPrefix: '[shoelace]',
    logFileChanges: true,
    notify: false,
    single: false,
    ghostMode: false,
    server: {
      baseDir: '_site',
      routes: {
        '/dist': './dist'
      }
    }
  };

  // Launch browser sync
  bs.init(browserSyncConfig, () => {
    const url = `http://localhost:${port}`;
    console.log(chalk.cyan(`\n🥾 The dev server is available at ${url}\n`));
    console.log(deferredOutput.join('\n'));
    hasBuilt = true;
  });

  // Rebuild and reload when source files change
  bs.watch(['src/**/!(*.test).*']).on('change', async filename => {
    try {
      // Rebuild and reload
      await buildResult.rebuild();

      // Rebuild stylesheets when a theme file changes
      if (/^src\/themes/.test(filename)) {
        await exec(`node scripts/make-themes.js --outdir "${outdir}"`, { stdio: 'inherit' });
      }

      // Skip metadata when styles are changed
      if (/(\.css|\.styles\.ts)$/.test(filename)) {
        return;
      }

      await exec(`node scripts/make-metadata.js --outdir "${outdir}"`, { stdio: 'inherit' });

      bs.reload();
    } catch (err) {
      console.error(chalk.red(err));
    }
  });

  // Reload without rebuilding when the docs change
  bs.watch(['_site/**/*.*']).on('change', filename => {
    bs.reload();
  });
}

// Prod build
if (!serve) {
  await nextTask('Building the docs', () => {
    return buildTheDocs();
  });
}

// Cleanup on exit
process.on('SIGINT', handleCleanup);
process.on('SIGTERM', handleCleanup);

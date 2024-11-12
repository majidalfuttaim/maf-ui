import '../../../dist/shoelace.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<mf-img>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <mf-img></mf-img> `);

    expect(el).to.exist;
  });
});

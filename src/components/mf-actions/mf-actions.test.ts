import '../../../dist/shoelace.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<mf-actions>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <mf-actions></mf-actions> `);

    expect(el).to.exist;
  });
});

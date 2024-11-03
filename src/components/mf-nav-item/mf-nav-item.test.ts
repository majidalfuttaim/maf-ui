import '../../../dist/shoelace.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<mf-nav-item>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <mf-nav-item></mf-nav-item> `);

    expect(el).to.exist;
  });
});

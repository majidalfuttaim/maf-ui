import '../../../dist/shoelace.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<mf-logo>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <mf-logo></mf-logo> `);

    expect(el).to.exist;
  });
});

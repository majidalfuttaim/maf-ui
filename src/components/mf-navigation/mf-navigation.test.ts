import '../../../dist/shoelace.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<mf-navigation>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <mf-navigation></mf-navigation> `);

    expect(el).to.exist;
  });
});

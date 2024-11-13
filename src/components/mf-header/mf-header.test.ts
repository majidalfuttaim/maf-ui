import '../../../dist/shoelace.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<mf-header>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <mf-header></mf-header> `);

    expect(el).to.exist;
  });
});

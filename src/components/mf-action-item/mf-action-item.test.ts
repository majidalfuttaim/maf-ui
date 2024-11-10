import '../../../dist/shoelace.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<mf-action-item>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <mf-action-item></mf-action-item> `);

    expect(el).to.exist;
  });
});

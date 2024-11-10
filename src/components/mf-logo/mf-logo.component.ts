import { classMap } from 'lit/directives/class-map.js';
import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize.js';
import { property } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles.js';
import ShoelaceElement from '../../internal/shoelace-element.js';
import styles from './mf-logo.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Short summary of the component's intended use.
 * @documentation https://shoelace.style/components/mf-logo
 * @status experimental
 * @since 2.0
 *
 * @dependency sl-example
 *
 *
 * @slot - The default slot.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --example - An example CSS custom property.
 */
export default class MfLogo extends ShoelaceElement {
  static styles: CSSResultGroup = [componentStyles, styles];

  private readonly localize = new LocalizeController(this);

  /** Logo href value. */
  @property() href = '/';

  /** Logo src value. */
  @property() src = '';

  /** Logo Alt value. */
  @property() alt = '';

  render() {
    const isRtl = this.localize.dir() === 'rtl';
    return html` <a
      class=${classMap({
        logo: true,
        'logo--rtl': isRtl
      })}
      part="base"
      href="${this.href}"
    >
      <img src="${this.src}" alt="${this.alt}" part="image" />
    </a>`;
  }
}

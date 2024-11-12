import { classMap } from 'lit/directives/class-map.js';
import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize.js';
import { property } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles.js';
import ShoelaceElement from '../../internal/shoelace-element.js';
import styles from './mf-img.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Short summary of the component's intended use.
 * @documentation https://shoelace.style/components/mf-img
 * @status experimental
 * @since 2.0
 *
 * @csspart base - The component's base wrapper.
 * @csspart image - The component's image part.
 *
 */
export default class MfImg extends ShoelaceElement {
  static styles: CSSResultGroup = [componentStyles, styles];

  private readonly localize = new LocalizeController(this);

  /** Logo href value. */
  @property() href = '';

  /** Logo src value. */
  @property() src = '';

  /** Logo Alt value. */
  @property() alt = '';

  /** image width value. */
  @property() width = '';

  /** image height value. */
  @property() height = '';

  /** anchor target value. */
  @property() target: '_blank' | '_parent' | '_self' | '_top' = '_self';

  render() {
    const isRtl = this.localize.dir() === 'rtl';
    if (this.href) {
      return html` <a
        class=${classMap({
          logo: true,
          'logo--rtl': isRtl
        })}
        part="base"
        href="${this.href}"
        target="${this.target}"
      >
        <img src="${this.src}" alt="${this.alt}" width="${this.width}" height="${this.height}" part="image" />
      </a>`;
    } else {
      return html`
        <img src="${this.src}" alt="${this.alt}" width="${this.width}" height="${this.height}" part="image" />
      `;
    }
  }
}

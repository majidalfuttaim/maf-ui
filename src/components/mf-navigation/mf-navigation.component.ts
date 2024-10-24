import { classMap } from 'lit/directives/class-map.js';
import { HasSlotController } from '../../internal/slot.js';
import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize.js';
import { property } from 'lit/decorators.js';
import { watch } from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles.js';
import ShoelaceElement from '../../internal/shoelace-element.js';
import styles from './mf-navigation.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Short summary of the component's intended use.
 * @documentation https://shoelace.style/components/mf-navigation
 * @status experimental
 * @since 2.0
 *
 * @dependency sl-example
 *
 *
 *
 * @slot - The default slot.
 * @slot example - An example slot.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --example - An example CSS custom property.
 */
export default class MfNavigation extends ShoelaceElement {
  static styles: CSSResultGroup = [componentStyles, styles];

  private readonly localize = new LocalizeController(this);

  /** An example attribute. */
  @property() attr = 'example';

  @watch('example')
  handleExampleChange() {
    // do something
  }
  private readonly hasSlotController = new HasSlotController(this, 'action');

  render() {
    const isRtl = this.localize.dir() === 'rtl';

    return html`
      <header
        part="base"
        class=${classMap({
          navigation: true,
          'navigation--has-action': this.hasSlotController.test('action'),
          'navigation--is-Rtl': isRtl
        })}
      >
        <div class="navigation__container">
          <slot name="logo" part="logo" class="navigation__logo"></slot>
          <slot name="menu" part="menu" class="navigation__menu"></slot>
          <slot name="action" part="action" class="navigation__action"></slot>
        </div>
      </header>
    `;
  }
}

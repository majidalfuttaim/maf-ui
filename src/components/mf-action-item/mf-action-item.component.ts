import { classMap } from 'lit/directives/class-map.js';
import { getTextContent, HasSlotController } from '../../internal/slot.js';
import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize.js';
import { property, query } from 'lit/decorators.js';
import { SubmenuController } from './submenu-controller.js';
import { watch } from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles.js';
import ShoelaceElement from '../../internal/shoelace-element.js';
import SlIcon from '../icon/icon.component.js';
import SlPopup from '../popup/popup.component.js';
import SlSpinner from '../spinner/spinner.component.js';
import styles from './mf-action-item.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Short summary of the component's intended use.
 * @documentation https://shoelace.style/components/mf-action-item
 * @status experimental
 * @since 2.0
 *
 * @dependency sl-icon
 * @dependency sl-popup
 * @dependency sl-spinner
 * @dependency sl-badge
 *
 *
 * @slot - The action item's label.
 * @slot icon - Used to add an icon or similar element to the action item.
 * @slot prefix - Used to prepend an icon or similar element to the action item.
 * @slot suffix - Used to append an icon or similar element to the action item.
 * @slot submenu - Used to denote a nested menu.
 *
 * @csspart base - The component's base wrapper.
 * @csspart icon - The icon container.
 * @csspart prefix - The prefix container.
 * @csspart label - The action item label.
 * @csspart suffix - The suffix container.
 * @csspart spinner - The spinner that shows when the action item is in the loading state.
 * @csspart spinner__base - The spinner's base part.
 * @csspart submenu-icon - The submenu icon, visible only when the action item has a submenu (not yet implemented).
 *
 *
 * @cssproperty [--submenu-offset=-2px] - The distance submenus shift to overlap the parent menu.
 */
export default class MfActionItem extends ShoelaceElement {
  static styles: CSSResultGroup = [componentStyles, styles];
  static dependencies = {
    'sl-icon': SlIcon,
    'sl-popup': SlPopup,
    'sl-spinner': SlSpinner
  };

  private cachedTextLabel: string;
  private readonly localize = new LocalizeController(this);

  @query('slot:not([name])') defaultSlot: HTMLSlotElement;
  @query('.action-item') actionItem: HTMLElement;

  /** A unique value to store in the action item. This can be used as a way to identify action items when selected. */
  @property() value = '';

  /** A URL to store in the action item. This can be used as a way to redirect action items when clicked. */
  @property() href = '';

  /** Draws the action item in a loading state. */
  @property({ type: Boolean, reflect: true }) loading = false;

  /** Draws the action item in a disabled state, preventing selection. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Hides the action item Chevron even if submenu is available. */
  @property({ type: Boolean, reflect: true }) hideChevron = false;

  private readonly hasSlotController = new HasSlotController(this, 'submenu');
  private submenuController: SubmenuController = new SubmenuController(this, this.hasSlotController);

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this.handleHostClick);
    this.addEventListener('mouseover', this.handleMouseOver);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this.handleHostClick);
    this.removeEventListener('mouseover', this.handleMouseOver);
  }

  private handleDefaultSlotChange() {
    const textLabel = this.getTextLabel();

    // Ignore the first time the label is set
    if (typeof this.cachedTextLabel === 'undefined') {
      this.cachedTextLabel = textLabel;
      return;
    }

    // When the label changes, emit a slotchange event so parent controls see it
    if (textLabel !== this.cachedTextLabel) {
      this.cachedTextLabel = textLabel;
      this.emit('slotchange', { bubbles: true, composed: false, cancelable: false });
    }
  }

  private handleHostClick = (event: MouseEvent) => {
    // Prevent the click event from being emitted when the button is disabled or loading
    if (this.disabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  };

  private handleMouseOver = (event: MouseEvent) => {
    this.focus();
    event.stopPropagation();
  };

  @watch('disabled')
  handleDisabledChange() {
    this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
  }

  /** Returns a text label based on the contents of the action item's default slot. */
  getTextLabel() {
    return getTextContent(this.defaultSlot);
  }

  isSubmenu() {
    return this.hasSlotController.test('submenu');
  }

  render() {
    const isRtl = this.localize.dir() === 'rtl';
    const isSubmenuExpanded = this.submenuController.isExpanded();

    return html` <a
    id="anchor"
    part="base"
    href="${this.href}"
    class=${classMap({
      'action-item': true,
      'action-item--rtl': isRtl,
      'action-item--disabled': this.disabled,
      'action-item--loading': this.loading,
      'action-item--has-submenu': this.isSubmenu(),
      'action-item--submenu-expanded': isSubmenuExpanded,
      'action-item--hide-submenu-chevron': this.hideChevron
    })}
    ?aria-haspopup="${this.isSubmenu()}"
    ?aria-expanded="${isSubmenuExpanded ? true : false}"
  >
    <slot name="icon" part="icon" class="action-item__icon"></slot>
    
    <slot name="prefix" part="prefix" class="action-item__prefix"></slot>

    <slot part="label" class="action-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

    <slot name="suffix" part="suffix" class="action-item__suffix"></slot>

    <span part="submenu-icon" class="action-item__chevron">
      <sl-icon name="chevron-down" library="system" aria-hidden="true"></sl-icon>
    </span>

    ${this.submenuController.renderSubmenu()}
    ${this.loading ? html` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> ` : ''}
  </div> `;
  }
}

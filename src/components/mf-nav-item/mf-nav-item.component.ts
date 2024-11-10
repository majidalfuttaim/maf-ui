import { classMap } from 'lit/directives/class-map.js';
import { getTextContent, HasSlotController } from '../../internal/slot.js';
import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize.js';
import { property, query } from 'lit/decorators.js';
import { SubnavController } from './subnav-controller.js';
import { watch } from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles.js';
import ShoelaceElement from '../../internal/shoelace-element.js';
import SlIcon from '../icon/icon.component.js';
import SlPopup from '../popup/popup.component.js';
import SlSpinner from '../spinner/spinner.component.js';
import styles from './mf-nav-item.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Navigation items provide options for the user to pick from in a navigation.
 * @documentation https://shoelace.style/components/mf-nav-item
 * @status experimental
 * @since 2.0
 *
 * @dependency sl-icon
 * @dependency sl-popup
 * @dependency sl-spinner
 *
 *
 * @slot label - The Navigation item's label.
 * @slot prefix - Used to prepend an icon or similar element to the navigation item.
 * @slot suffix - Used to append an icon or similar element to the navigation item.
 * @slot subnav - Used to denote a nested navigation.
 *
 * @csspart base - The component's base wrapper.
 * @csspart prefix - The prefix container.
 * @csspart label - The navigation item label.
 * @csspart suffix - The suffix container.
 * @csspart spinner - The spinner that shows when the navigation item is in the loading state.
 * @csspart spinner__base - The spinner's base part.
 * @csspart sub-navigation-icon - The sub-navigation icon, visible only when the navigation item has a sub-navigation (not yet implemented).
 *
 * @cssproperty [--sub-navigation-offset=-2px] - The distance sub-navigation shift to overlap the parent navigation.
 */
export default class MfNavItem extends ShoelaceElement {
  static styles: CSSResultGroup = [componentStyles, styles];
  static dependencies = {
    'sl-icon': SlIcon,
    'sl-popup': SlPopup,
    'sl-spinner': SlSpinner
  };

  private readonly localize = new LocalizeController(this);
  private cachedTextLabel: string;

  @query('slot:not([name])') defaultSlot: HTMLSlotElement;
  @query('.nav-item') navItem: HTMLElement;

  /** A unique value to store in the nav item. This can be used as a way to identify nav items when selected. */
  @property() value = '';

  /** Nav item href value. */
  @property() href = '';

  /** The type of nav item to render. */
  @property() type = 'normal';

  /** Draws the nav item in a loading state. */
  @property({ type: Boolean, reflect: true }) loading = false;

  /** Draws the nav item in a disabled state, preventing selection. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Draws the nav item in a highlight state, provides custom class highlight. */
  @property({ type: Boolean, reflect: true }) highlight = false;

  /** Draws the nav item navigation in a full width state, provides custom class wide. */
  @property({ type: Boolean, reflect: true }) wide = false;

  /** Hides the action item Chevron even if submenu is available. */
  @property({ type: Boolean, reflect: true }) hideChevron = false;

  private readonly hasSlotController = new HasSlotController(this, 'subnav');
  private subnavController: SubnavController = new SubnavController(this, this.hasSlotController);

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

  @watch('type')
  handleTypeChange() {
    this.setAttribute('role', 'navitem');
    this.removeAttribute('aria-checked');
  }

  /** Returns a text label based on the contents of the nav item's default slot. */
  getTextLabel() {
    return getTextContent(this.defaultSlot);
  }

  isSubnav() {
    return this.hasSlotController.test('subnav');
  }

  render() {
    const isRtl = this.localize.dir() === 'rtl';
    const isSubnavExpanded = this.subnavController.isExpanded();

    return html`
      <a
        id="anchor"
        part="base"
        class=${classMap({
          'nav-item': true,
          'nav-item--wide': this.wide,
          'nav-item--rtl': isRtl,
          'nav-item--disabled': this.disabled,
          'nav-item--loading': this.loading,
          'nav-item--highlight': this.highlight,
          'nav-item--has-subnav': this.isSubnav(),
          'nav-item--subnav-expanded': isSubnavExpanded,
          'nav-item--hide-subnav-chevron': this.hideChevron
        })}
        ?aria-haspopup="${this.isSubnav()}"
        ?aria-expanded="${isSubnavExpanded ? true : false}"
        href="${this.href}"
      >
        <slot name="prefix" part="prefix" class="nav-item__prefix"></slot>

        <slot part="label" class="nav-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="nav-item__suffix"></slot>

        <span part="subnav-icon" class="nav-item__chevron">
          <sl-icon name=${isRtl ? 'chevron-down' : 'chevron-down'} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.subnavController.renderSubnav()}
        ${this.loading ? html` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> ` : ''}
      </a>
    `;
  }
}

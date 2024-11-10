import { classMap } from 'lit/directives/class-map.js';
import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize.js';
import { property, query } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles.js';
import ShoelaceElement from '../../internal/shoelace-element.js';
import styles from './mf-navigation.styles.js';
import type { CSSResultGroup } from 'lit';
import type MfNavItem from '../mf-nav-item/mf-nav-item.component.js';

export interface NavSelectEventDetail {
  item: MfNavItem;
}

/**
 * @summary Short summary of the component's intended use.
 * @documentation https://shoelace.style/components/mf-navigation
 * @status experimental
 * @since 2.0
 *
 * @dependency mf-nav-item
 *
 *
 *
 * @slot - The default slot.
 * @slot example - An example slot.
 *
 * @csspart base - The component's base wrapper.
 *
 *
 * @event {{ item: MfNavItem }} mf-nav-select - Emitted when a nav item is selected.
 */
export default class MfNavigation extends ShoelaceElement {
  static styles: CSSResultGroup = [componentStyles, styles];
  @query('slot') defaultSlot: HTMLSlotElement;

  private readonly localize = new LocalizeController(this);

  /** provides a vertical class for the navigation */
  @property({ type: Boolean, reflect: true }) vertical = false;

  /** provides a wide class for the navigation */
  @property({ type: Boolean, reflect: true }) wide = false;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'nav');
  }

  private handleClick(event: MouseEvent) {
    const navItemTypes = ['navitem'];

    const composedPath = event.composedPath();
    const target = composedPath.find((el: Element) => navItemTypes.includes(el?.getAttribute?.('role') || ''));

    if (!target) return;

    const closestNav = composedPath.find((el: Element) => el?.getAttribute?.('role') === 'nav');
    const clickHasSubnav = closestNav !== this;

    // Make sure we're the navigation thats supposed to be handling the click event.
    if (clickHasSubnav) return;

    // This isn't true. But we use it for TypeScript checks below.
    const item = target as MfNavItem;

    this.emit('mf-nav-select', { detail: { item } });
  }

  private handleKeyDown(event: KeyboardEvent) {
    // Make a selection when pressing enter or space
    if (event.key === 'Enter' || event.key === ' ') {
      const item = this.getCurrentItem();
      event.preventDefault();
      event.stopPropagation();

      // Simulate a click to support @click handlers on nav items that also work with the keyboard
      item?.click();
    }

    // Move the selection when pressing down or up
    else if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      const items = this.getAllItems();
      const activeItem = this.getCurrentItem();
      let index = activeItem ? items.indexOf(activeItem) : 0;

      if (items.length > 0) {
        event.preventDefault();
        event.stopPropagation();

        if (event.key === 'ArrowDown') {
          index++;
        } else if (event.key === 'ArrowUp') {
          index--;
        } else if (event.key === 'Home') {
          index = 0;
        } else if (event.key === 'End') {
          index = items.length - 1;
        }

        if (index < 0) {
          index = items.length - 1;
        }
        if (index > items.length - 1) {
          index = 0;
        }

        this.setCurrentItem(items[index]);
        items[index].focus();
      }
    }
  }

  private handleMouseDown(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (this.isNavItem(target)) {
      this.setCurrentItem(target as MfNavItem);
    }
  }

  private handleSlotChange() {
    const items = this.getAllItems();

    // Reset the roving tab index when the slotted items change
    if (items.length > 0) {
      this.setCurrentItem(items[0]);
    }
  }

  private isNavItem(item: HTMLElement) {
    return item.tagName.toLowerCase() === 'mf-nav-item' || ['navitem'].includes(item.getAttribute('role') ?? '');
  }

  /** @internal Gets all slotted nav items, ignoring dividers, headers, and other elements. */
  getAllItems() {
    return [...this.defaultSlot.assignedElements({ flatten: true })].filter((el: HTMLElement) => {
      if (el.inert || !this.isNavItem(el)) {
        return false;
      }
      return true;
    }) as MfNavItem[];
  }

  /**
   * @internal Gets the current nav item, which is the nav item that has `tabindex="0"` within the roving tab index.
   * The nav item may or may not have focus, but for keyboard interaction purposes it's considered the "active" item.
   */
  getCurrentItem() {
    return this.getAllItems().find(i => i.getAttribute('tabindex') === '0');
  }

  /**
   * @internal Sets the current nav item to the specified element. This sets `tabindex="0"` on the target element and
   * `tabindex="-1"` to all other items. This method must be called prior to setting focus on a nav item.
   */
  setCurrentItem(item: MfNavItem) {
    const items = this.getAllItems();

    // Update tab indexes
    items.forEach(i => {
      i.setAttribute('tabindex', i === item ? '0' : '-1');
    });
  }

  // private readonly localize = new LocalizeController(this);

  // /** An example attribute. */
  // @property() attr = 'example';

  // @watch('example')
  // handleExampleChange() {
  //   // do something
  // }
  // private readonly hasSlotController = new HasSlotController(this, 'action');

  render() {
    const isRtl = this.localize.dir() === 'rtl';

    return html`
      <nav
        class=${classMap({
          navigation: true,
          'navigation--rtl': isRtl,
          'navigation--vertical': this.vertical,
          'navigation--wide': this.wide
        })}
      >
        <slot
          @slotchange=${this.handleSlotChange}
          @click=${this.handleClick}
          @keydown=${this.handleKeyDown}
          @mousedown=${this.handleMouseDown}
        ></slot>
      </nav>
    `;
  }
}

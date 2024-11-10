import { html } from 'lit';
import { query } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles.js';
import ShoelaceElement from '../../internal/shoelace-element.js';
import styles from './mf-actions.styles.js';
import type { CSSResultGroup } from 'lit';
import type MfActionItem from '../mf-action-item/mf-action-item.component.js';
export interface ActionSelectEventDetail {
  item: MfActionItem;
}

/**
 * @summary Short summary of the component's intended use.
 * @documentation https://shoelace.style/components/mf-actions
 * @status experimental
 * @since 2.0
 *
 * @dependency sl-example
 *
 * @slot - The Actions's content, including Action items and dividers.
 *
 * @event {{ item: MFActionItem }} Mf-action-select - Emitted when a Action item is selected.
 *
 * @todo add event for action click
 * @todo Support for multiple components as slots such as: action label, .
 */
export default class MfActions extends ShoelaceElement {
  static styles: CSSResultGroup = [componentStyles, styles];

  @query('slot') defaultSlot: HTMLSlotElement;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'menu');
  }

  private handleClick(event: MouseEvent) {
    const actionItemTypes = ['actionitem'];

    const composedPath = event.composedPath();
    const target = composedPath.find((el: Element) => actionItemTypes.includes(el?.getAttribute?.('role') || ''));

    if (!target) return;

    const closestMenu = composedPath.find((el: Element) => el?.getAttribute?.('role') === 'menu');
    const clickHasSubmenu = closestMenu !== this;

    // Make sure we're the menu thats supposed to be handling the click event.
    if (clickHasSubmenu) return;

    // This isn't true. But we use it for TypeScript checks below.
    const item = target as MfActionItem;

    this.emit('mf-action-select', { detail: { item } });
  }

  private handleKeyDown(event: KeyboardEvent) {
    // Make a selection when pressing enter or space
    if (event.key === 'Enter' || event.key === ' ') {
      const item = this.getCurrentItem();
      event.preventDefault();
      event.stopPropagation();

      // Simulate a click to support @click handlers on menu items that also work with the keyboard
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

    if (this.isActionItem(target)) {
      this.setCurrentItem(target as MfActionItem);
    }
  }

  private handleSlotChange() {
    const items = this.getAllItems();

    // Reset the roving tab index when the slotted items change
    if (items.length > 0) {
      this.setCurrentItem(items[0]);
    }
  }

  private isActionItem(item: HTMLElement) {
    return item.tagName.toLowerCase() === 'mf-action-item' || ['actionitem'].includes(item.getAttribute('role') ?? '');
  }

  /** @internal Gets all slotted action items, ignoring dividers, headers, and other elements. */
  getAllItems() {
    return [...this.defaultSlot.assignedElements({ flatten: true })].filter((el: HTMLElement) => {
      if (el.inert || !this.isActionItem(el)) {
        return false;
      }
      return true;
    }) as MfActionItem[];
  }

  /**
   * @internal Gets the current action item, which is the action item that has `tabindex="0"` within the roving tab index.
   * The action item may or may not have focus, but for keyboard interaction purposes it's considered the "active" item.
   */
  getCurrentItem() {
    return this.getAllItems().find(i => i.getAttribute('tabindex') === '0');
  }

  /**
   * @internal Sets the current action item to the specified element. This sets `tabindex="0"` on the target element and
   * `tabindex="-1"` to all other items. This method must be called prior to setting focus on a action item.
   */
  setCurrentItem(item: MfActionItem) {
    const items = this.getAllItems();

    // Update tab indexes
    items.forEach(i => {
      i.setAttribute('tabindex', i === item ? '0' : '-1');
    });
  }

  render() {
    return html`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `;
  }
}

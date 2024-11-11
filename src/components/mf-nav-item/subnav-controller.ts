import { createRef, ref, type Ref } from 'lit/directives/ref.js';
import { type HasSlotController } from '../../internal/slot.js';
import { html } from 'lit';
import type { ReactiveController, ReactiveControllerHost } from 'lit';
import type MfNavItem from './mf-nav-item.js';
import type SlPopup from '../popup/popup.js';

/** A reactive controller to manage the registration of event listeners for subnavs. */
export class SubnavController implements ReactiveController {
  private host: ReactiveControllerHost & MfNavItem;
  private popupRef: Ref<SlPopup> = createRef();
  private enableSubnavTimer = -1;
  private isConnected = false;
  private isPopupConnected = false;
  private skidding = 0;
  private readonly hasSlotController: HasSlotController;
  private readonly subnavOpenDelay = 100;

  constructor(host: ReactiveControllerHost & MfNavItem, hasSlotController: HasSlotController) {
    (this.host = host).addController(this);
    this.hasSlotController = hasSlotController;
  }

  hostConnected() {
    if (this.hasSlotController.test('subnav') && !this.host.disabled) {
      this.addListeners();
    }
  }

  hostDisconnected() {
    this.removeListeners();
  }

  hostUpdated() {
    if (this.hasSlotController.test('subnav') && !this.host.disabled) {
      this.addListeners();
      this.updateSkidding();
    } else {
      this.removeListeners();
    }
  }

  private addListeners() {
    if (!this.isConnected) {
      this.host.addEventListener('mousemove', this.handleMouseMove);
      this.host.addEventListener('mouseover', this.handleMouseOver);
      this.host.addEventListener('keydown', this.handleKeyDown);
      this.host.addEventListener('click', this.handleClick);
      this.host.addEventListener('focusout', this.handleFocusOut);
      this.isConnected = true;
    }

    // The popup does not seem to get wired when the host is
    // connected, so manage its listeners separately.
    if (!this.isPopupConnected) {
      if (this.popupRef.value) {
        this.popupRef.value.addEventListener('mouseover', this.handlePopupMouseover);
        this.popupRef.value.addEventListener('sl-reposition', this.handlePopupReposition);
        this.isPopupConnected = true;
      }
    }
  }

  private removeListeners() {
    if (this.isConnected) {
      this.host.removeEventListener('mousemove', this.handleMouseMove);
      this.host.removeEventListener('mouseover', this.handleMouseOver);
      this.host.removeEventListener('keydown', this.handleKeyDown);
      this.host.removeEventListener('click', this.handleClick);
      this.host.removeEventListener('focusout', this.handleFocusOut);
      this.isConnected = false;
    }
    if (this.isPopupConnected) {
      if (this.popupRef.value) {
        this.popupRef.value.removeEventListener('mouseover', this.handlePopupMouseover);
        this.popupRef.value.removeEventListener('sl-reposition', this.handlePopupReposition);
        this.isPopupConnected = false;
      }
    }
  }

  // Set the safe triangle cursor position
  private handleMouseMove = (event: MouseEvent) => {
    this.host.style.setProperty('--safe-triangle-cursor-x', `${event.clientX}px`);
    this.host.style.setProperty('--safe-triangle-cursor-y', `${event.clientY}px`);
  };

  private handleMouseOver = () => {
    if (this.hasSlotController.test('subnav')) {
      this.enableSubnav();
    }
  };

  private handleSubnavEntry(event: KeyboardEvent) {
    // Pass focus to the first nav-item in the subnav.
    const subnavSlot: HTMLSlotElement | null = this.host.renderRoot.querySelector("slot[name='subnav']");

    // Missing slot
    if (!subnavSlot) {
      console.error('Cannot activate a subnav if no corresponding navitem can be found.', this);
      return;
    }

    // Navs
    let navItems: NodeListOf<Element> | null = null;
    for (const elt of subnavSlot.assignedElements()) {
      navItems = elt.querySelectorAll("mf-nav-item, [role^='navitem']");
      if (navItems.length !== 0) {
        break;
      }
    }

    if (!navItems || navItems.length === 0) {
      return;
    }

    navItems[0].setAttribute('tabindex', '0');
    for (let i = 1; i !== navItems.length; ++i) {
      navItems[i].setAttribute('tabindex', '-1');
    }

    // Open the subnav (if not open), and set focus to first navitem.
    if (this.popupRef.value) {
      event.preventDefault();
      event.stopPropagation();
      if (this.popupRef.value.active) {
        if (navItems[0] instanceof HTMLElement) {
          navItems[0].focus();
        }
      } else {
        this.enableSubnav(false);
        this.host.updateComplete.then(() => {
          if (navItems![0] instanceof HTMLElement) {
            navItems![0].focus();
          }
        });
        this.host.requestUpdate();
      }
    }
  }

  // Focus on the first nav-item of a subnav.
  private handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'Escape':
      case 'Tab':
        this.disableSubnav();
        break;
      case 'ArrowLeft':
        // Either focus is currently on the host element or a child
        if (event.target !== this.host) {
          event.preventDefault();
          event.stopPropagation();
          this.host.focus();
          this.disableSubnav();
        }
        break;
      case 'ArrowRight':
      case 'Enter':
      case ' ':
        this.handleSubnavEntry(event);
        break;
      default:
        break;
    }
  };

  private handleClick = (event: MouseEvent) => {
    // Clicking on the item which heads the nav does nothing, otherwise hide subnav and propagate
    if (event.target === this.host) {
      event.preventDefault();
      event.stopPropagation();
    } else if (
      event.target instanceof Element &&
      (event.target.tagName === 'mf-nav-item' || event.target.role?.startsWith('navitem'))
    ) {
      this.disableSubnav();
    }
  };

  // Close this subnav on focus outside of the parent or any descendants.
  private handleFocusOut = (event: FocusEvent) => {
    if (event.relatedTarget && event.relatedTarget instanceof Element && this.host.contains(event.relatedTarget)) {
      return;
    }
    this.disableSubnav();
  };

  // Prevent the parent nav-item from getting focus on mouse movement on the subnav
  private handlePopupMouseover = (event: MouseEvent) => {
    event.stopPropagation();
  };

  // Set the safe triangle values for the subnav when the position changes
  private handlePopupReposition = () => {
    const subnavSlot: HTMLSlotElement | null = this.host.renderRoot.querySelector("slot[name='subnav']");
    const nav = subnavSlot?.assignedElements({ flatten: true }).filter(el => el.localName === 'mf-nav')[0];
    const isRtl = getComputedStyle(this.host).direction === 'rtl';
    if (!nav) {
      return;
    }

    const { left, top, width, height } = nav.getBoundingClientRect();

    this.host.style.setProperty('--safe-triangle-subnav-start-x', `${isRtl ? left + width : left}px`);
    this.host.style.setProperty('--safe-triangle-subnav-start-y', `${top}px`);
    this.host.style.setProperty('--safe-triangle-subnav-end-x', `${isRtl ? left + width : left}px`);
    this.host.style.setProperty('--safe-triangle-subnav-end-y', `${top + height}px`);
  };

  private setSubnavState(state: boolean) {
    if (this.popupRef.value) {
      if (this.popupRef.value.active !== state) {
        this.popupRef.value.active = state;
        this.host.requestUpdate();
      }
    }
  }

  // Shows the subnav. Supports disabling the opening delay, e.g. for keyboard events that want to set the focus to the
  // newly opened nav.
  private enableSubnav(delay = true) {
    if (delay) {
      window.clearTimeout(this.enableSubnavTimer);
      this.enableSubnavTimer = window.setTimeout(() => {
        this.setSubnavState(true);
      }, this.subnavOpenDelay);
    } else {
      this.setSubnavState(true);
    }
  }

  private disableSubnav() {
    window.clearTimeout(this.enableSubnavTimer);
    this.setSubnavState(false);
  }

  // Calculate the space the top of a nav takes-up, for aligning the popup nav-item with the activating element.
  private updateSkidding(): void {
    // .computedStyleMap() not always available.
    if (!this.host.parentElement?.computedStyleMap) {
      return;
    }
    const styleMap: StylePropertyMapReadOnly = this.host.parentElement.computedStyleMap();
    const attrs: string[] = ['padding-top', 'border-top-width', 'margin-top'];

    const skidding = attrs.reduce((accumulator, attr) => {
      const styleValue: CSSStyleValue = styleMap.get(attr) ?? new CSSUnitValue(0, 'px');
      const unitValue = styleValue instanceof CSSUnitValue ? styleValue : new CSSUnitValue(0, 'px');
      const pxValue = unitValue.to('px');
      return accumulator - pxValue.value;
    }, 0);

    this.skidding = skidding;
  }

  isExpanded(): boolean {
    return this.popupRef.value ? this.popupRef.value.active : false;
  }

  isWide(): boolean {
    return this.host.wide ? this.host.wide : false;
  }

  renderSubnav() {
    // const isRtl = getComputedStyle(this.host).direction === 'rtl';

    // Always render the slot, but conditionally render the outer <sl-popup>
    if (!this.isConnected) {
      return html` <slot name="subnav" hidden></slot> `;
    }

    return html`
      <sl-popup
        ${ref(this.popupRef)}
        placement="bottom-start"
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        wide=${this.isWide()}
        strategy="${this.isWide() ? 'absolute' : 'fixed'}"
        auto-size="both"
        sync="${this.isWide() ? '' : 'both'}"
      >
        <slot name="subnav"></slot>
      </sl-popup>
    `;
  }
}

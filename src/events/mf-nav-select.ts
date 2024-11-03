import type MfNavItem from '../components/mf-nav-item/mf-nav-item.js';

export type MfNavSelectEvent = CustomEvent<{ item: MfNavItem }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'mf-nav-select': MfNavSelectEvent;
  }
}

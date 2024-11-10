import type MfActionItem from '../components/mf-action-item/mf-action-item.js';

export type MfActionSelectEvent = CustomEvent<{ item: MfActionItem }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'mf-action-select': MfActionSelectEvent;
  }
}

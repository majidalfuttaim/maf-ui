import MfActionItem from './mf-action-item.component.js';

export * from './mf-action-item.component.js';
export default MfActionItem;

MfActionItem.define('mf-action-item');

declare global {
  interface HTMLElementTagNameMap {
    'mf-action-item': MfActionItem;
  }
}

import MfNavItem from './mf-nav-item.component.js';

export * from './mf-nav-item.component.js';
export default MfNavItem;

MfNavItem.define('mf-nav-item');

declare global {
  interface HTMLElementTagNameMap {
    'mf-nav-item': MfNavItem;
  }
}

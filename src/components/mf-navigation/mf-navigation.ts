import MfNavigation from './mf-navigation.component.js';

export * from './mf-navigation.component.js';
export default MfNavigation;

MfNavigation.define('mf-navigation');

declare global {
  interface HTMLElementTagNameMap {
    'mf-navigation': MfNavigation;
  }
}

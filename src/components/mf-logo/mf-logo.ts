import MfLogo from './mf-logo.component.js';

export * from './mf-logo.component.js';
export default MfLogo;

MfLogo.define('mf-logo');

declare global {
  interface HTMLElementTagNameMap {
    'mf-logo': MfLogo;
  }
}

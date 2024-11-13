import MfHeader from './mf-header.component.js';

export * from './mf-header.component.js';
export default MfHeader;

MfHeader.define('mf-header');

declare global {
  interface HTMLElementTagNameMap {
    'mf-header': MfHeader;
  }
}

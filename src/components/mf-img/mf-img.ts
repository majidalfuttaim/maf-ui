import MfImg from './mf-img.component.js';

export * from './mf-img.component.js';
export default MfImg;

MfImg.define('mf-img');

declare global {
  interface HTMLElementTagNameMap {
    'mf-img': MfImg;
  }
}

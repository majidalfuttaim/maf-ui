import MfActions from './mf-actions.component.js';

export * from './mf-actions.component.js';
export default MfActions;

MfActions.define('mf-actions');

declare global {
  interface HTMLElementTagNameMap {
    'mf-actions': MfActions;
  }
}

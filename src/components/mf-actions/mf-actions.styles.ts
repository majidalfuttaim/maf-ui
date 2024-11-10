import { css } from 'lit';

export default css`
  :host {
    display: flex;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: baseline;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  :host-context(mf-action-item) {
    flex-direction: column;
  }
`;

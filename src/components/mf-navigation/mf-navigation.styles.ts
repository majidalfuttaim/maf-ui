import { css } from 'lit';

export default css`
  :host {
    position: relative;
    background: var(--mf-navigation-background-color);
    border: solid var(--mf-navigation-border-width) var(--mf-navigation-border-color);
    border-radius: var(--mf-navigation-radius-medium);
    padding: var(--mf-navigation-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--mf-navigation-spacing-x-small);
  }
  .navigation {
    display: flex;
    border-radius: 0;
    flex-direction: row;
  }

  .navigation.navigation--vertical {
    flex-direction: column;
  }
`;

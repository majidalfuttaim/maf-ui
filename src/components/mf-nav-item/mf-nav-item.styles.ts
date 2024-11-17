import { css } from 'lit';

export default css`
  :host {
    --subnav-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .nav-item {
    display: flex;
    align-items: stretch;
    font-family: var(--mafui-navigationItem-font-family-primary);
    font-size: var(--mafui-navigationItem-font-size-primary);
    font-weight: var(--mafui-navigationItem-font-weight-primary);
    line-height: var(--mafui-navigationItem-line-height-primary);
    letter-spacing: var(--mafui-navigationItem-letter-spacing-primary);
    color: var(--mafui-navigationItem-font-color-primary);
    background-color: var(--mafui-navigationItem-color-background-primary);
    border-top: var(--mafui-navigationItem-border-width-top-primary)
      var(--mafui-navigationItem-border-style-top-primary) var(--mafui-navigationItem-color-border-top-primary);
    border-right: var(--mafui-navigationItem-border-width-right-primary)
      var(--mafui-navigationItem-border-style-right-primary) var(--mafui-navigationItem-color-border-right-primary);
    border-bottom: var(--mafui-navigationItem-border-width-bottom-primary)
      var(--mafui-navigationItem-border-style-bottom-primary) var(--mafui-navigationItem-color-border-bottom-primary);
    border-left: var(--mafui-navigationItem-border-width-left-primary)
      var(--mafui-navigationItem-border-style-left-primary) var(--mafui-navigationItem-color-border-left-primary);

    padding: var(--nav-spacing-inset-stretch, --nav-spacing-inset) var(--nav-spacing-inset-squish, --nav-spacing-inset);
    margin-right: var(--nav-spacing-inline);
    margin-bottom: var(--nav-spacing-stack);
    transition: var(--sl-transition-fast) fill;

    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
    text-decoration: none;
  }

  :host([level='level-1']) .nav-item {
    font-family: var(--mafui-navigationItem-font-family-secondary);
    font-size: var(--mafui-navigationItem-font-size-secondary);
    font-weight: var(--mafui-navigationItem-font-weight-secondary);
    line-height: var(--mafui-navigationItem-line-height-secondary);
    letter-spacing: var(--mafui-navigationItem-letter-spacing-secondary);
    color: var(--mafui-navigationItem-font-color-secondary);
    background-color: var(--mafui-navigationItem-color-background-secondary);
    border-top: var(--mafui-navigationItem-border-width-top-secondary)
      var(--mafui-navigationItem-border-style-top-secondary) var(--mafui-navigationItem-color-border-top-secondary);
    border-right: var(--mafui-navigationItem-border-width-right-secondary)
      var(--mafui-navigationItem-border-style-right-secondary) var(--mafui-navigationItem-color-border-right-secondary);
    border-bottom: var(--mafui-navigationItem-border-width-bottom-secondary)
      var(--mafui-navigationItem-border-style-bottom-secondary)
      var(--mafui-navigationItem-color-border-bottom-secondary);
    border-left: var(--mafui-navigationItem-border-width-left-secondary)
      var(--mafui-navigationItem-border-style-left-secondary) var(--mafui-navigationItem-color-border-left-secondary);
  }

  :host([level='level-2']) .nav-item {
    font-family: var(--mafui-navigationItem-font-family-tertiary);
    font-size: var(--mafui-navigationItem-font-size-tertiary);
    font-weight: var(--mafui-navigationItem-font-weight-tertiary);
    line-height: var(--mafui-navigationItem-line-height-tertiary);
    letter-spacing: var(--mafui-navigationItem-letter-spacing-tertiary);
    color: var(--mafui-navigationItem-font-color-tertiary);
    background-color: var(--mafui-navigationItem-color-background-tertiary);
    border-top: var(--mafui-navigationItem-border-width-top-tertiary)
      var(--mafui-navigationItem-border-style-top-tertiary) var(--mafui-navigationItem-color-border-top-tertiary);
    border-right: var(--mafui-navigationItem-border-width-right-tertiary)
      var(--mafui-navigationItem-border-style-right-tertiary) var(--mafui-navigationItem-color-border-right-tertiary);
    border-bottom: var(--mafui-navigationItem-border-width-bottom-tertiary)
      var(--mafui-navigationItem-border-style-bottom-tertiary) var(--mafui-navigationItem-color-border-bottom-tertiary);
    border-left: var(--mafui-navigationItem-border-width-left-tertiary)
      var(--mafui-navigationItem-border-style-left-tertiary) var(--mafui-navigationItem-color-border-left-tertiary);
  }

  .nav-item.nav-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .nav-item.nav-item--highlight {
    font-family: var(--mafui-navigationItem-font-family-highlight);
    font-size: var(--mafui-navigationItem-font-size-highlight);
    font-weight: var(--mafui-navigationItem-font-weight-highlight);
    line-height: var(--mafui-navigationItem-line-height-highlight);
    letter-spacing: var(--mafui-navigationItem-letter-spacing-highlight);
    color: var(--mafui-navigationItem-font-color-highlight);
    border-top: var(--mafui-navigationItem-border-width-top-highlight)
      var(--mafui-navigationItem-border-style-top-highlight) var(--mafui-navigationItem-color-border-top-highlight);
    border-right: var(--mafui-navigationItem-border-width-right-highlight)
      var(--mafui-navigationItem-border-style-right-highlight) var(--mafui-navigationItem-color-border-right-highlight);
    border-bottom: var(--mafui-navigationItem-border-width-bottom-highlight)
      var(--mafui-navigationItem-border-style-bottom-highlight)
      var(--mafui-navigationItem-color-border-bottom-highlight);
    border-left: var(--mafui-navigationItem-border-width-left-highlight)
      var(--mafui-navigationItem-border-style-left-highlight) var(--mafui-navigationItem-color-border-left-highlight);
  }

  .nav-item.nav-item--loading {
    outline: none;
    cursor: wait;
    padding-left: 30px;
  }

  .nav-item.nav-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .nav-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .nav-item .nav-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .nav-item .nav-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .nav-item .nav-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .nav-item .nav-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .nav-item .nav-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .nav-item--subnav-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-subnav-start-x, 0) var(--safe-triangle-subnav-start-y, 0),
      var(--safe-triangle-subnav-end-x, 0) var(--safe-triangle-subnav-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .nav-item,
  .nav-item--subnav-expanded {
    background-color: var(--mafui-navigationItem-color-background-primary-hover);
    color: var(--mafui-navigationItem-font-color-primary-hover);

    border-top: var(--mafui-navigationItem-border-width-top-primary-hover)
      var(--mafui-navigationItem-border-style-top-primary-hover)
      var(--mafui-navigationItem-color-border-top-primary-hover);
    border-right: var(--mafui-navigationItem-border-width-right-primary-hover)
      var(--mafui-navigationItem-border-style-right-primary-hover)
      var(--mafui-navigationItem-color-border-right-primary-hover);
    border-bottom: var(--mafui-navigationItem-border-width-bottom-primary-hover)
      var(--mafui-navigationItem-border-style-bottom-primary-hover)
      var(--mafui-navigationItem-color-border-bottom-primary-hover);
    border-left: var(--mafui-navigationItem-border-width-left-primary-hover)
      var(--mafui-navigationItem-border-style-left-primary-hover)
      var(--mafui-navigationItem-color-border-left-primary-hover);
  }

  :host(:focus-visible) .nav-item {
    outline: none;
    opacity: 1;
    background-color: var(--mafui-navigationItem-color-background-primary-focus);
    color: var(--mafui-navigationItem-font-color-primary-focus);
    border-top: var(--mafui-navigationItem-border-width-top-primary-focus)
      var(--mafui-navigationItem-border-style-top-primary-focus)
      var(--mafui-navigationItem-color-border-top-primary-focus);
    border-right: var(--mafui-navigationItem-border-width-right-primary-focus)
      var(--mafui-navigationItem-border-style-right-primary-focus)
      var(--mafui-navigationItem-color-border-right-primary-focus);
    border-bottom: var(--mafui-navigationItem-border-width-bottom-primary-focus)
      var(--mafui-navigationItem-border-style-bottom-primary-focus)
      var(--mafui-navigationItem-color-border-bottom-primary-hover);
    border-left: var(--mafui-navigationItem-border-width-left-primary-focus)
      var(--mafui-navigationItem-border-style-left-primary-focus)
      var(--mafui-navigationItem-color-border-left-primary-focus);
  }

  :host([level='level-1']:hover:not([aria-disabled='true'], :focus-visible)) .nav-item,
  :host([level='level-1']) .nav-item--subnav-expanded {
    background-color: var(--mafui-navigationItem-color-background-secondary-hover);
    color: var(--mafui-navigationItem-font-color-secondary-hover);

    border-top: var(--mafui-navigationItem-border-width-top-secondary-hover)
      var(--mafui-navigationItem-border-style-top-secondary-hover)
      var(--mafui-navigationItem-color-border-top-secondary-hover);
    border-right: var(--mafui-navigationItem-border-width-right-secondary-hover)
      var(--mafui-navigationItem-border-style-right-secondary-hover)
      var(--mafui-navigationItem-color-border-right-secondary-hover);
    border-bottom: var(--mafui-navigationItem-border-width-bottom-secondary-hover)
      var(--mafui-navigationItem-border-style-bottom-secondary-hover)
      var(--mafui-navigationItem-color-border-bottom-secondary-hover);
    border-left: var(--mafui-navigationItem-border-width-left-secondary-hover)
      var(--mafui-navigationItem-border-style-left-secondary-hover)
      var(--mafui-navigationItem-color-border-left-secondary-hover);
  }

  :host([level='level-1']:focus-visible) .nav-item {
    outline: none;
    opacity: 1;
    background-color: var(--mafui-navigationItem-color-background-secondary-focus);
    color: var(--mafui-navigationItem-font-color-secondary-focus);
    border-top: var(--mafui-navigationItem-border-width-top-secondary-focus)
      var(--mafui-navigationItem-border-style-top-secondary-focus)
      var(--mafui-navigationItem-color-border-top-secondary-focus);
    border-right: var(--mafui-navigationItem-border-width-right-secondary-focus)
      var(--mafui-navigationItem-border-style-right-secondary-focus)
      var(--mafui-navigationItem-color-border-right-secondary-focus);
    border-bottom: var(--mafui-navigationItem-border-width-bottom-secondary-focus)
      var(--mafui-navigationItem-border-style-bottom-secondary-focus)
      var(--mafui-navigationItem-color-border-bottom-secondary-hover);
    border-left: var(--mafui-navigationItem-border-width-left-secondary-focus)
      var(--mafui-navigationItem-border-style-left-secondary-focus)
      var(--mafui-navigationItem-color-border-left-secondary-focus);
  }

  :host([level='level-2']:hover:not([aria-disabled='true'], :focus-visible)) .nav-item,
  :host([level='level-2']) .nav-item--subnav-expanded {
    background-color: var(--mafui-navigationItem-color-background-tertiary-hover);
    color: var(--mafui-navigationItem-font-color-tertiary-hover);

    border-top: var(--mafui-navigationItem-border-width-top-tertiary-hover)
      var(--mafui-navigationItem-border-style-top-tertiary-hover)
      var(--mafui-navigationItem-color-border-top-tertiary-hover);
    border-right: var(--mafui-navigationItem-border-width-right-tertiary-hover)
      var(--mafui-navigationItem-border-style-right-tertiary-hover)
      var(--mafui-navigationItem-color-border-right-tertiary-hover);
    border-bottom: var(--mafui-navigationItem-border-width-bottom-tertiary-hover)
      var(--mafui-navigationItem-border-style-bottom-tertiary-hover)
      var(--mafui-navigationItem-color-border-bottom-tertiary-hover);
    border-left: var(--mafui-navigationItem-border-width-left-tertiary-hover)
      var(--mafui-navigationItem-border-style-left-tertiary-hover)
      var(--mafui-navigationItem-color-border-left-tertiary-hover);
  }

  :host([level='level-2']:focus-visible) .nav-item {
    outline: none;
    opacity: 1;
    background-color: var(--mafui-navigationItem-color-background-tertiary-focus);
    color: var(--mafui-navigationItem-font-color-tertiary-focus);
    border-top: var(--mafui-navigationItem-border-width-top-tertiary-focus)
      var(--mafui-navigationItem-border-style-top-tertiary-focus)
      var(--mafui-navigationItem-color-border-top-tertiary-focus);
    border-right: var(--mafui-navigationItem-border-width-right-tertiary-focus)
      var(--mafui-navigationItem-border-style-right-tertiary-focus)
      var(--mafui-navigationItem-color-border-right-tertiary-focus);
    border-bottom: var(--mafui-navigationItem-border-width-bottom-tertiary-focus)
      var(--mafui-navigationItem-border-style-bottom-tertiary-focus)
      var(--mafui-navigationItem-color-border-bottom-tertiary-hover);
    border-left: var(--mafui-navigationItem-border-width-left-tertiary-focus)
      var(--mafui-navigationItem-border-style-left-tertiary-focus)
      var(--mafui-navigationItem-color-border-left-tertiary-focus);
  }

  .nav-item .nav-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .nav-item--has-subnav .nav-item__chevron {
    visibility: visible;
  }

  .nav-item--hide-subnav-chevron .nav-item__chevron {
    display: none;
  }

  /* Add elevation and z-index to subnavs */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-top: var(--subnav-offset);
  }

  .nav-item--rtl {
    margin-left: var(--nav-spacing-inline);
    margin-right: 0px !important;
  }

  .nav-item--rtl sl-popup::part(popup) {
    margin-top: calc(-1 * var(--subnav-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .nav-item,
    :host(:focus-visible) .nav-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(mf-navigation) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }

  ::slotted(mf-navigation[slot='subnav']) {
    background: red;
  }
  ::slotted(mf-navigation[slot='subnav']) mf-nav-item {
    background: red;
  }

  .nav-item--wide sl-popup::part(popup) {
    left: 0;
    width: 100%;
  }
`;

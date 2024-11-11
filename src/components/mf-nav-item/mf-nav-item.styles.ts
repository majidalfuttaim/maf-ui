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
    // position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
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

  .nav-item.nav-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .nav-item.nav-item--highlight {
    color: var(--sl-color-neutral-900);
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
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .nav-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .nav-item .nav-item__check,
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

  .nav-item--wide sl-popup::part(popup) {
    left: 0;
    width: 100%;
  }
`;

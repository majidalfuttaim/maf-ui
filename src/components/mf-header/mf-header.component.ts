import { classMap } from 'lit/directives/class-map.js';
import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize.js';
import { property } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles.js';
import ShoelaceElement from '../../internal/shoelace-element.js';
import styles from './mf-header.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Header Template.
 * @documentation https://shoelace.style/components/mf-header
 * @status experimental
 * @since 2.0
 *
 * @slot - The default slot.
 * @slot logo - logo slot.
 * @slot navigation - navigation slot.
 * @slot actions - actions slot.
 * @slot search - search slot.
 *
 * @csspart base - The component's base wrapper.
 * @csspart logo - The component's logo container.
 * @csspart navigation - The component's navigation container.
 * @csspart actions - The component's action container.
 * @csspart search - The component's search container.
 *
 */
export default class MfHeader extends ShoelaceElement {
  static styles: CSSResultGroup = [componentStyles, styles];

  private readonly localize = new LocalizeController(this);

  /** Template attribute to indicate the template type of the header component */
  @property({ type: String, reflect: true }) template: 'basic' | 'singleRow' | 'separateNavigation' = 'basic';

  render() {
    const isRtl = this.localize.dir() === 'rtl';

    return html`
      <header
        class=${classMap({
          header: true,
          'header--rtl': isRtl
        })}
        template="header--template--${this.template}"
      >
        ${this.template === 'basic'
          ? html`
              <slot name="logo" part="logo" class="header__logo"></slot>
              <slot name="navigation" part="navigation" class="header__navigation"></slot>
              <slot name="actions" part="actions" class="header__actions"></slot>
            `
          : this.template === 'singleRow'
            ? html` <slot name="navigation" part="navigation" class="header__navigation"></slot>
                <slot name="logo" part="logo" class="header__logo"></slot>
                <slot name="search" part="search" class="header__search"></slot>
                <slot name="actions" part="actions" class="header__actions"></slot>`
            : this.template === 'separateNavigation'
              ? html`
                  <slot name="logo" part="logo" class="header__logo"></slot>
                  <slot name="search" part="search" class="header__search"></slot>
                  <slot name="actions" part="actions" class="header__actions"></slot>
                  <slot name="navigation" part="navigation" class="header__navigation"></slot>
                `
              : html` <slot></slot>`}
      </header>
    `;
  }
}

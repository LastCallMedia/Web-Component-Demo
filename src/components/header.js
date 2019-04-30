
import {LitElement, html, css} from "lit-element";
import theme from "../theme";

export default class MayflowerHeader extends LitElement {
  static get properties() {
    return {
      skipTarget: String,
    };
  }
  static get styles() {
    return css`
      :host {
        display: block;
      }
      * {
        font-family: Texta, Helvetica, serif;
      }
      .skip-nav {
        display: block;
        margin: 0 auto;
        font-weight: 700;
        color: ${theme.bayBlue};
        text-align: center;
        font-size:22px;
      }
      .skip-nav:not(:focus) {
        position: absolute;
        overflow: hidden;
        clip: rect(0 0 0 0);
        height: 1px;
        width: 1px;
      }
      .skip-nav:focus {
        outline-color: webkit-focus-ring-color;
      }
    `
  }
  render() {
    return html`<header>
            <a href="${this.skipTarget}" class="skip-nav">Skip to main content</a>
            <slot name="logo"></slot>
            <slot name="nav"></slot>
          </header>`;
  }
}

customElements.define('mayflower-header', MayflowerHeader);




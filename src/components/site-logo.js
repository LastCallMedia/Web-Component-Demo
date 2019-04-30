
import {LitElement, html, css, property, customElement} from "lit-element";
import theme from '../theme';


export default class MayflowerSiteLogo extends LitElement {
  static get styles() {
    return css`
      :host  {
        display: block;
      }
      .logo {
        display: flex;
        align-items: center;
      }
      .logo span {
        font-family: ${theme.fontFamily};
        font-weight: 400;
        font-size: 1.9rem;
        display: inline-block;
        line-height: 1;
        letter-spacing: .02em;
        margin-left: 0.4rem;
        color: ${theme.berkshireGreen};
        -webkit-text-stroke: 1px;
        -webkit-text-stroke-color: ${theme.berkshireGreen};
        font-family: Texta, Helvetica, serif;
      }
    `
  }
  render() {
    return html`
      <div class="logo">
        <img src="https://www.mass.gov/libraries/mayflower-artifacts/assets/images/stateseal.png" alt="State Seal" width="45" height="45" />
        <span><slot>Mass.gov</slot></span>
      </div>
    `
  }
}

window.customElements.define('mayflower-site-logo', MayflowerSiteLogo);

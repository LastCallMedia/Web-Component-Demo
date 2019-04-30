
// import {LitElement, html, css, unsafeCSS} from "lit-element";
// import theme from '../theme';
//
// export default class CalloutLink extends LitElement {
//   static get styles() {
//     return css`
//       :host  {
//         display: block;
//       }
//       .callout-link {
//         background-color: ${unsafeCSS('#e8eef4')};
//         border: 3px solid ${unsafeCSS('#8aaac7')};
//         box-shadow: 0 0.25rem 0.5rem rgba(0,0,0,0.25);
//       }
//       .callout-link ::slotted(a) {
//         text-decoration: none;
//         color: ${theme.bayBlue};
//         display: block;
//         padding: 20px 30px;
//         font-size: 1.625rem;
//         font-family: ${theme.fontFamily};
//         font-weight: 700;
//       }
//       .callout-link ::slotted(a) span {
//         border-bottom: 3px solid transparent;
//         transition: border 0.4s ease;
//       }
//       .callout-link::hover ::slotted(a) span {
//         text-decoration:underline;
//       }
//       .callout-link ::slotted(a)::hover {
//
//         // border-color: ${theme.bayBlue};
//       }
//       .callout-link ::slotted(a)::after {
//         content: '>';
//         display: inline-block;
//         margin-left: .5em;
//       }
//     `;
//   }
//   render() {
//     return html`<div class="callout-link"><slot></slot></div>`
//   }
// }

import {html, render} from 'lit-html';

export default class CalloutLink extends HTMLAnchorElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    render(this.template(), this.shadowRoot)
  }
  template() {
    return html`
      <style>
        :host {
          display: block;
        }
        .callout-link {
          background: red;
        }
      </style>
      <div class="callout-link"><slot></slot></div>`
  }

}

window.customElements.define('mayflower-callout-link', CalloutLink, {extends: 'a'})

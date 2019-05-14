/**
 * This is an example of web components built with LitElement.
 */

import {LitElement, html, css, unsafeCSS} from "lit-element";

class Button extends LitElement {
    static get styles() {
        return css`
            :host {
              display: inline-block;
            }
            a {
              background: blue;
              padding: .5em 2em;
              color: white;
            }
        `
    }
    render() {
        return html`<a class="button" href="${this.getAttribute('href')}"><slot></slot></a>`;
    }
}

window.customElements.define('litelement-button', Button);



class UglyVideo extends LitElement {
    static get styles() {
        return css `
            :host  {
                display: block;
            }
            marquee {
                border: black;
            }
            iframe {
                animation: spin 3s infinite linear;
            }
            @keyframes spin {
                from {transform:rotate(0deg);}
                to {transform:rotate(360deg);}
            }
        `
    }
    getEmbedCode(id) {
        return  `https://www.youtube.com/embed/${id}`
    }
    render() {
        return html`<marquee><iframe width="${this.getAttribute('video-width')}" height="${this.getAttribute('video-height')}" src="${this.getEmbedCode(this.getAttribute('video-id'))}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></marquee>`
    }
}
window.customElements.define('litelement-video', UglyVideo);

class ListContainer extends LitElement {
    static get styles() {
        return css`
        :host {
            display: block;
        }
        ::slotted(ul) {
            background: black !important;
            color: white !important;
        }
    `
    }

    render() {
        return html`<div><slot></slot></div>`
    }
}

window.customElements.define('litelement-list-container', ListContainer);
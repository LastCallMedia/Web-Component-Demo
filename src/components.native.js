/**
 * This is a native web component.
 *
 * It's packaged inside an ES6 module, but you can have many components
 * per module.
 */
class Button extends HTMLElement {
    constructor() {
        super();
        // Create a new Shadow DOM element:
        let shadowRoot = this.attachShadow({mode: 'open'})

        // Populate our Shadow DOM with HTML.
        // Note: This HTML won't actually be updated if we change what
        // we pass the component.
        shadowRoot.innerHTML = `
            <style>
                .button {
                    display: inline-block;
                    padding: .5em 2em;
                    background: red;
                }
            </style>
            <a class="button" href="${this.getAttribute('href')}"><slot></slot></a>
        `
    }
}

window.customElements.define('native-button', Button);
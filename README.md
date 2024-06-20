Web Component Demo
==================

Web Component Demo is brought to you by your friends at [Last Call Media](https://www.lastcallmedia.com).

Setting up the demo:

1. Clone this project down and run `npm install`
2. Run `npm start` to start a webpack dev server.  It will output a URL you can visit in your browser.

In `dist/index.html`, you will find the HTML for the page.  Components are loaded from `src/` and compiled via Webpack.


What is a web component?
------------------------

A web component is a custom, reusable HTML element. It's basically a way of creating a new HTML element that can be reused "anywhere".  It's typically implemented by rendering standard HTML, JS, and CSS in the "Shadow DOM."

It is implemented using javascript, HTML, and CSS.

Here's an example! [Source](./src/components.native.js) - [HTML](./dist/index.html)


Browser Support
---------------

Bad news!  IE and Edge [completely do not support this](https://caniuse.com/#search=customelements).

Good news! [Standard polyfills](https://www.webcomponents.org/polyfills) available!
Polyfills support back to IE11 (but there are gotchas there!)


What is LitElement?
------------------- 

LitElement is a super-simple base class for creating web components.

It handles rendering and styling your components.  You just write HTML and CSS, and LitElement will render it for you.

Here's an example! [Source](./src/components.litelement.js) - [HTML](./dist/index.html)

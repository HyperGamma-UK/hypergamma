

import { html } from 'lit';
import { Page } from './Page.js';

export class HomePage extends Page {

  constructor(...args) {
    super(...args)
  }

  render() {
    return html`
    <h1>Home</h1>
    <p>Coming soon...</p>
    `;
  }
};

customElements.get('hypergamma-home-page') || customElements.define('hypergamma-home-page',  HomePage);

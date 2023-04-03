

import { html } from 'lit';
import { Page } from '../Page.js';
import '../../Button.js';


export class FocusPage extends Page {

  constructor(...args) {
    super(...args)
  }

  render() {
    return html`
      <h1>Focus</h1>
      <p>Coming soon...</p>
      <br>
      <hypergamma-button @click=${() => this.onTransition('plus')}>Back</hypergamma-button>
    `;
  }
};

customElements.get('hypergamma-focus-page') || customElements.define('hypergamma-focus-page',  FocusPage);



import { html } from 'lit';
import { Page } from '../Page.js';
import '../../Button.js';

export class PerformancePage extends Page {

  constructor(...args) {
    super(...args)
  }

  render() {
    return html`
      <h1>Peformance</h1>
      <p>Coming soon...</p>
      <br>
      <hypergamma-button @click=${() => this.onTransition('plus')}>Back</hypergamma-button>
    `;
  }
};

customElements.get('hypergamma-performance-page') || customElements.define('hypergamma-performance-page',  PerformancePage);

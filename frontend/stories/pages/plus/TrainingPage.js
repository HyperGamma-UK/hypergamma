

import { html } from 'lit';
import '../../Button.js';
import { Page } from '../Page.js';


export class TrainingPage extends Page {

  constructor(...args) {
    super(...args)
  }

  render() {
    return html`
      <h1>Training</h1>
      <p>Coming soon...</p>
      <br>
      <hypergamma-button @click=${() => this.onTransition('plus')}>Back</hypergamma-button>
    `;
  }
};

customElements.get('hypergamma-training-page') || customElements.define('hypergamma-training-page',  TrainingPage);

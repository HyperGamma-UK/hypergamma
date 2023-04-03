

import { html } from 'lit';
import { Page } from '../Page.js';
import '../../Button.js';


export class MeditationPage extends Page {

  constructor(...args) {
    super(...args)
  }

  render() {
    return html`
      <h1>Meditation</h1>
      <p>Coming soon...</p>
      <br>
      <hypergamma-button @click=${() => this.onTransition('plus')}>Back</hypergamma-button>
    `;
  }
};

customElements.get('hypergamma-meditation-page') || customElements.define('hypergamma-meditation-page',  MeditationPage);

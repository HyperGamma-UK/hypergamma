

import { html } from 'lit';
import { Page } from '../Page.js';
import '../../Button.js';


export class MeditationPage extends Page {

  constructor(...args) {
    super(...args)
  }

  updated() {
    const deviceReadout = this.query('#readout')
    this.subscribe('decoded', (info) => {
      deviceReadout.innerHTML = JSON.stringify(info)
    })
  }

  render() {
    return html`
      <h1>Meditation</h1>
      <p id="readout">No device connected</p>
      <br>
      <hypergamma-button @click=${() => this.onTransition('plus')}>Back</hypergamma-button>
    `;
  }
};

customElements.get('hypergamma-meditation-page') || customElements.define('hypergamma-meditation-page',  MeditationPage);

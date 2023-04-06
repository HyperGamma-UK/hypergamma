

import { html } from 'lit';
import '../../Button.js';
import { Page } from '../Page.js';


export class TrainingPage extends Page {

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
      <h1>Training</h1>
      <p id="readout">No device connected</p>
      <br>
      <hypergamma-button @click=${() => this.onTransition('plus')}>Back</hypergamma-button>
    `;
  }
};

customElements.get('hypergamma-training-page') || customElements.define('hypergamma-training-page',  TrainingPage);

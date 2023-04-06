

import { html } from 'lit';
import { Page } from './Page.js';

export class HomePage extends Page {

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
    <h1>Home</h1>
    <p id="readout">No device connected</p>
    `;
  }
};

customElements.get('hypergamma-home-page') || customElements.define('hypergamma-home-page',  HomePage);

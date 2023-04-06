

import { html } from 'lit';
import { Page } from './Page.js';

export class AnalyticsPage extends Page {

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
    <h1>Analytics</h1>
    <p id="readout">No device connected</p>
    `;
  }
};

customElements.get('hypergamma-analytics-page') || customElements.define('hypergamma-analytics-page',  AnalyticsPage);

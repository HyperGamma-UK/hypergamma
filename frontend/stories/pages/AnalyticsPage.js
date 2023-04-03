

import { html } from 'lit';
import { Page } from './Page.js';

export class AnalyticsPage extends Page {

  constructor(...args) {
    super(...args)
  }

  render() {
    return html`
      <h1>Analytics</h1>
    `;
  }
};

customElements.get('hypergamma-analytics-page') || customElements.define('hypergamma-analytics-page',  AnalyticsPage);

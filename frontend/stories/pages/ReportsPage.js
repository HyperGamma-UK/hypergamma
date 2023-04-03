

import { html } from 'lit';
import { Page } from './Page.js';


export class ReportsPage extends Page {

  constructor(...args) {
    super(...args)
  }


  render() {
    return html`
    <h1>Reports</h1>
    <p>Coming soon...</p>
    `;
  }
};

customElements.get('hypergamma-reports-page') || customElements.define('hypergamma-reports-page',  ReportsPage);



import { html } from 'lit';
import { Page } from './Page.js';
import '../Button.js';



export class HyperPlusPage extends Page {

  constructor(...args) {
    super(...args)
  }

  render() {
    return html`
      <h1>Hyper+</h1>
      <div>
        <hypergamma-button>Focus</hypergamma-button>
        <hypergamma-button>Training</hypergamma-button>
        <hypergamma-button>Peformance</hypergamma-button>
        <hypergamma-button>Meditation</hypergamma-button>
    `;
  }
};

customElements.get('hypergamma-hyperplus-page') || customElements.define('hypergamma-hyperplus-page',  HyperPlusPage);



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
        <hypergamma-button @click=${() => this.onTransition('plus/csgo')}>CS:GO</hypergamma-button>
        <hypergamma-button @click=${() => this.onTransition('plus/focus')}>Focus</hypergamma-button>
        <hypergamma-button @click=${() => this.onTransition('plus/training')}>Training</hypergamma-button>
        <hypergamma-button @click=${() => this.onTransition('plus/performance')}>Peformance</hypergamma-button>
        <hypergamma-button @click=${() => this.onTransition('plus/meditation')}>Meditation</hypergamma-button>
      </div>
    `;
  }
};

customElements.get('hypergamma-hyperplus-page') || customElements.define('hypergamma-hyperplus-page',  HyperPlusPage);

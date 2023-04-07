

import { css, html } from 'lit';
import { Page } from './Page.js';
import '../Button.js';


export class App extends Page {

  static get styles() {
    return css`

      hypergamma-button {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 25px;
      }
  
    `
  }

  constructor(...args) {
    super(...args)
  }

  updated() {
    this.subscribe('decoded.heg', ([ value ]) => {
      // deviceReadout.innerHTML = JSON.stringify(info)
    })
  }

  render() {
    return html`
      <hypergamma-button primary id="backButton" @click=${() => this.onTransition('plus')}>Back</hypergamma-button>
    `;
  }
};

customElements.get('hypergamma-app') || customElements.define('hypergamma-app',  App);



import { html } from 'lit';
import { Page } from './Page.js';
import { Grid } from '../Grid.js';
import { handleHEGRatio } from './AnalyticsPage.js';

export class HomePage extends Page {

  grid = new Grid([
    {title: 'Focus', value: 'No device connected'},
    {title: 'Cognitive Load', value: 'No device connected'},
    {title: 'Mental Fatigue', value: 'No device connected'},
  ])

  constructor(...args) {
    super(...args)
  }

  updated() {
    this.subscribe('decoded.heg', (...args) => handleHEGRatio.call(this, ...args))
  }

  render() {

    return html`
      <h1>Welcome to Hypergamma</h1>
      ${this.grid}
    `;
  }
};

customElements.get('hypergamma-home-page') || customElements.define('hypergamma-home-page',  HomePage);

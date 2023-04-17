

import { html } from 'lit';
import { Page } from './Page.js';
import { Grid } from '../Grid.js';

const toZero = 1000 * 60 * 60 // 1hr
let tStart

export function handleHEGRatio([ latest ]) {
  if (!tStart) tStart = Date.now()

  this.grid.rendered.focus.innerHTML = `${(100*latest).toFixed(2)}%`
  this.grid.rendered['cognitive-load'].innerHTML = `${(100*(1 / latest) / 5).toFixed(2)}`

  const tDiff = Date.now() - tStart
  const progress = (toZero - tDiff) / toZero
  this.grid.rendered['mental-fatigue'].innerHTML = `${(100*(1 - progress)).toFixed(1)}%`
}

export class AnalyticsPage extends Page {

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
      ${this.grid}
    `;
  }
};

customElements.get('hypergamma-analytics-page') || customElements.define('hypergamma-analytics-page',  AnalyticsPage);

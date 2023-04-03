

import { css, html } from 'lit';
import { Page } from './Page.js';
import '../Button.js';


export class DevicesPage extends Page {

  static get styles() {
    return css`
      .row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
      }

      .row > div {
        padding: 10px;
        flex-grow: 1;
    `
  }

  constructor(...args) {
    super(...args)
  }


  render() {
    return html`
    <h1>Devices Manager</h1>
    <label>Device</label>
    <select>
      <option>Device 1</option>
      <option>Device 2</option>
      <option>Device 3</option>
      <option>Device 4</option>
    </select>

    <label>Channel</label>
    <select> 
      <option>Channel #1</option>
    </select>

    <div class="row">
      <div>
        <h3>Battery Life</h3>
        <p>100%</p>
      </div>
      <div>
        <h3>Device Status</h3>
        <p>Connected</p>
      </div>
      <div>
        <h3>Last Session</h3>
        <p>${(new Date()).toUTCString()}</p>
      </div>
      <div>
        <h3>Average Session Duration</h3>
        <p>${(120*Math.random()).toFixed(2)} minutes</p>
      </div>
    </div>



    `;
  }
};

customElements.get('hypergamma-devices-page') || customElements.define('hypergamma-devices-page',  DevicesPage);



import { css, html } from 'lit';
import { Page } from './Page.js';
import '../Button.js';

import * as devices from '../../devices.js';

const selectable = {
  BLE:{
      hegduino:'HEGduino',
      hegduinoV1:'HEGduino V1',
      nrf5x: "NRF5x",
      statechanger: "State Changer",
      blueberry2:'Blueberry',
      blueberry:'Blueberry V1'
  },
  USB:{
      peanut:'Biocomp Peanut HEG',
      hegduino: 'HEGduino',
      hegduinoV1: 'HEGduino V1',
      statechanger: "State Changer",
      nrf5x: "NRF5x",
  }
}

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

    let readout = document.createElement('p')
    this.subscribe('decoded', (info) => {
      readout.innerHTML = JSON.stringify(info)
    })

    this.subscribe('decoded.infrared', (info) => {
      console.log('Decoded Infrared Reading', info)
    })

    this.status = document.createElement('p')

    this.subscribe('status', (statusString) => {
      this.status.innerHTML = statusString[0].toUpperCase() + statusString.slice(1)
    })

    // Initialize status on render
    if (devices.active) this.status.innerHTML = "Connected"
    else this.status.innerHTML = "Disconnected"
    
    return html`
    <h1>Devices Manager</h1>
    <select>
    ${Object.keys(selectable).map((key) => {
      return html`
      <optgroup label=${key}>
        ${Object.keys(selectable[key]).map((key2) => {
          return html`
          <option value=${key}_${key2}>${selectable[key][key2]} (${key})</option>
          `
        })}
      </optgroup>
      `
    })}
    </select>

    <hypergamma-button @click=${async () => {
      const [ mode, key ] = this.shadowRoot.querySelector('select').value.split('_')
      devices.connect(mode, key)
    }}>Connect</hypergamma-button>


   ${readout}

    <div class="row">
      <div>
        <h3>Battery Life</h3>
        <p>100%</p>
      </div>
      <div>
        <h3>Device Status</h3>
        ${this.status}
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

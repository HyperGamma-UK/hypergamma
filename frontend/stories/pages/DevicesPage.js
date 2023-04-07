

import { css, html } from 'lit';
import { Page } from './Page.js';
import '../Button.js';

import * as devices from '../../devices.js';
import { chartSettings, workers } from "device-decoder";
import { WGLPlotter } from '../plot/webglplot/plotter.js';


// Load a worker with vite
const plotworker = new Worker(
  new URL('../plot/webglplot/canvas.worker.js', import.meta.url),
  {type: 'module'}
);

export class DevicesPage extends Page {

  static get styles() {

    return [super.styles, css`

      :host {
        display: block;
        padding: 25px;
      }

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
      }

      #plotter {
        position: relative;
        border: 1px solid gainsboro;
        height: 500px;
      }

      #plotter canvas:first-child {
        width: 100%;
        height: 100%;
        background: black;
      }

      #plotter canvas:nth-child(2) {
        position: absolute;
        top: 0;
        left: 0;
      }
    `]
  }

  canvas = document.createElement('canvas')
  overlay = document.createElement('canvas')

  constructor(...args) {
    super(...args)

    
  }


  render() {

    let readout = document.createElement('p')

    // Plot a subset of the data
    this.subscribe('decoded', (info) => this.plotter.update(info))

    const ratioReadout = document.createElement('p')
    ratioReadout.innerHTML = '-'


    const average = (arr) => arr.reduce((a,b) => a + b, 0) / arr.length
    let values = []
    this.subscribe('decoded.heg', ([ value ]) => {
      values.push(value)
      if (values.length > 100) values.shift()
      ratioReadout.innerHTML = average(values).toFixed(2)
    })

    this.status = document.createElement('p')

    this.subscribe('status', (statusString) => {
      this.status.innerHTML = statusString[0].toUpperCase() + statusString.slice(1)
    })

    this.subscribe('device', (device) => {

      // Prepare the UI
      const plotterDiv = this.shadowRoot.querySelector('#plotter')
      plotterDiv.innerHTML = ''

      const canvas = document.createElement('canvas')
      const overlay = document.createElement('canvas')
      plotterDiv.appendChild(canvas)
      plotterDiv.appendChild(overlay)

      // Configure the plotter for the device
        const name = device.device.deviceName
        let settings = {...chartSettings[name]}
        if (!settings) {
          console.warn('No chart settings found, using default')
          settings = {
            generateNewLines: true
          }
        }

        if (settings.lines) {
          const lines = settings.lines

          // Order the lines
          const orderedLines = {}
          if (lines.heg) orderedLines.heg = lines.heg
          lines.heg.ymin = 0.00000000001 // Scale the HEG line properly

          if (lines.red) orderedLines.red = lines.red
          if (lines.ir) orderedLines.infrared = lines.ir // Rename IR to infrared
          if (lines.ambient) orderedLines.ambient = lines.ambient
          settings.lines = orderedLines
        }

        
        // console.log(Object.keys(lines))
        
        // Instantiate the plotter
        this.plotter = new WGLPlotter({
          canvas,
          overlay,
          worker:plotworker,
          ...settings,
        });

        workers.add(this.plotter)

    })

    // Initialize status on render
    if (devices.active) this.status.innerHTML = "Connected"
    else this.status.innerHTML = "Disconnected"

    return html`
    <h1>Devices Manager</h1>
    <select>
    ${Object.keys(devices.selectable).map((key) => {
      return html`
      <optgroup label=${key}>
        ${Object.keys(devices.selectable[key]).map((key2) => {
          return html`
          <option value=${key}_${key2}>${devices.selectable[key][key2]} - ${key}</option>
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
   ${ratioReadout}

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
      <div>
        <h3>Current Average Ratio</h3>
        ${ratioReadout}
      </div>
    </div>

    <h3>Data Streams</h3>
    <div id="plotter"></div>

    `;
  }
};

customElements.get('hypergamma-devices-page') || customElements.define('hypergamma-devices-page',  DevicesPage);

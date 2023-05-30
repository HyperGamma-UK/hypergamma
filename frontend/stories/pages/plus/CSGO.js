

import { html } from 'lit';
import '../../Button.js';
import { Page } from '../Page.js';

import { appid, isInstalled } from '../../../csgo/index'

import * as tauri from '@tauri-apps/api/shell';

const openLink = (url) => {
  if (window.__TAURI__) tauri.open(url)
  else window.open(url)
}

export class CSGOPage extends Page {

  constructor(...args) {
    super(...args)
  }

  async updated() {
    const deviceReadout = this.query('#readout')
    this.subscribe('decoded', (info) => {
      deviceReadout.innerHTML = JSON.stringify(info)
    })

    const csgoButton = this.query('#csgoButton')
    const steamButton = this.query('#steamButton')

    const installed = await isInstalled()
    console.log(installed)

    if (installed.steam) {
        steamButton.innerText = 'Open Steam'
        steamButton.onclick = () => openLink(`steam://open/main`)

        if (installed.csgo) {
            steamButton.innerText = 'Launch CS:GO'
            csgoButton.onclick = () => openLink(`steam://launch/${appid}`)
        } else {
            csgoButton.onclick = () => openLink(`steam://install/${appid}`)
        }
        
    } else {
        steamButton.onclick = () => openLink(`https://store.steampowered.com/about/`)
    }

  }

  render() {

    return html`
      <h1>CS:GO</h1>
      <p id="readout">No device connected</p>
      <hr>
      <br>
      <div>
        <div id="steam">
            <label>Steam:</label><hypergamma-button id="steamButton">Install Steam</hypergamma-button>
        </div>
        <div id="csgo">
            <label>CS:GO:</label><hypergamma-button id="csgoButton">Install CS:GO</hypergamma-button>
        </div>
    </div>
    <br>
    <hr>
      <hypergamma-button @click=${() => this.onTransition('plus')}>Back</hypergamma-button>
    `;
  }
};

customElements.get('hypergamma-csgo-page') || customElements.define('hypergamma-csgo-page',  CSGOPage);

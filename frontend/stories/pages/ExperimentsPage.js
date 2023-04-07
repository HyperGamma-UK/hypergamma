

import { css, html } from 'lit';
import { Page } from './Page.js';
import '../Button.js';

function generateRandomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return alphabet[Math.floor(Math.random() * alphabet.length)]
}

export class ExperimentsPage extends Page {

  static get styles() {
    return css`
      :host {
        background: black;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      #experiment {
        color: gainsboro;
      }

      #info {
        position: absolute;
        top: 0;
        right: 0;
        padding: 10px 25px;
      }

      h3 {
        margin-bottom: 0px;
      }

      #conditions {
        font-size: 80%
      }

      #readout {
        color: gainsboro;
        font-size: 12em;
      }

      .hidden {
        display: none;
      }
    `
  }

  constructor(...args) {
    super(...args)
  }

  interTrialInterval = 1000 / 2
  interBlockInterval = 30 * 1000
  presentationTime = 2 * 1000
  nBackConditions = [0, 1, 2, 3]
  nBlocksPerCondition = 5
  nTrialsPerBlock = 12
  placeholder = "X"
  keyPressed = "Space"

  start = async () => {
    
    const experiment = this.query('#experiment')
    const button = this.query('hypergamma-button')
    button.classList.add('hidden')
    experiment.classList.remove('hidden')

    this.subscribe('decoded', (info) => {
      // deviceReadout.innerHTML = JSON.stringify(info)
    })

    const trialStructure = this.nBackConditions.map((nBack) => {
      return Array(this.nBlocksPerCondition).fill().map(() => {
        return Array(this.nTrialsPerBlock).fill().map(() => {
          return {
            nBack
          }
        })
      })
    })

    this.active = true

    const conditions = this.query('#conditions')
    conditions.innerHTML = this.nBackConditions.map(str => `${str}-back`).join(' — ')
    
    for (let i = 0; i < trialStructure.length; i++) await this.runCondition(trialStructure[i])

    this.stop()
  }

  stop = () => {
    const experiment = this.query('#experiment')
    const button = this.query('hypergamma-button')
    button.classList.remove('hidden')
    experiment.classList.add('hidden')
  }

  disconnectedCallback() {
    super.connectedCallback()
    this.active = false
  }

  

  wait = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  runCondition = async (condition) => {
    const conditionReadout = this.query('#condition')
    conditionReadout.innerHTML = condition[0][0].nBack

    const blockReadout = this.query('#block')
    const nBlocksReadout = this.query('#nBlocks')
    nBlocksReadout.innerHTML = condition.length
    for (let i = 0; i < condition.length; i++) {
      blockReadout.innerHTML = i + 1
      if (!this.active) return 
      const block = condition[i]
      await this.runBlock(block)
      if (!this.active) return 
      await this.wait(this.interBlockInterval)
    }
  }

  runBlock = async (block) => {
    const trialReadout = this.query('#trial')
    const nTrialsReadout = this.query('#nTrials')
    nTrialsReadout.innerHTML = block.length
      for (let i = 0; i < block.length; i++) {
        if (!this.active) return 
        trialReadout.innerHTML = i + 1
        const trial = block[i]
        await this.runTrial(trial)
        if (!this.active) return 
        await this.wait(this.interTrialInterval)
      }
  }

  runTrial = async (trial) => {
      const { nBack } = trial
      const readout = this.query('#readout')
      const letter = generateRandomLetter()
      readout.innerHTML = letter
      await this.wait(this.presentationTime)
      readout.innerHTML = this.placeholder
  }


  render() {
    return html`
      <div id="experiment" class="hidden">
        <div id="info">
          <h3><span id="condition"></span>-back</h3>
          <span id="conditions"></span>
          <p>Block <span id="block"></span> of <span id="nBlocks"></span></p>
          <p>Trial <span id="trial"></span> of <span id="nTrials"></span></p>
        </div>
        <p id="readout">${this.placeholder}</p>
      </div>
      <hypergamma-button primary @click=${() => this.start()}>Start nBack Experiment</hypergamma-button>
    `;
  }
};

customElements.get('hypergamma-experiments-page') || customElements.define('hypergamma-experiments-page',  ExperimentsPage);

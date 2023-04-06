

import { LitElement, html, css } from 'lit';
import '../Button'
import { subscribe, unsubscribe } from '../../state';

export class Page extends LitElement {

  static get styles() {
    return css`
      section {
        width: 100%;
        height: 100%;
      }
    `
  }

  info = { globalState: {} }

  constructor (info = {}) {
    super()
    Object.assign(this.info, info)
  }

  subscriptions = {}
  #subscriptions = []
  
  // Add render-specific functions
  subscribe = (target, callback) => {
    const id = subscribe(target, callback)
    this.#subscriptions.push(id)
  }

  // Deregister all subscriptions
  disconnectedCallback() {
    super.connectedCallback()
    this.#subscriptions.forEach((id) => unsubscribe(id))
    this.#subscriptions = []
  }
  

  query = (input) => {
    return this.shadowRoot.querySelector(input);
  }

  onSet = () => {} // User-defined function

  set = (info) => {
    if (info){
      Object.assign(this.info, info)
      this.onSet()
      this.requestUpdate()
    }
  }

  onTransition = () => {} // User-defined function


  render() {
    return html`
    <section><slot></slot></section>
    `;
  }
};

customElements.get('hypergamma-page') || customElements.define('hypergamma-page',  Page);

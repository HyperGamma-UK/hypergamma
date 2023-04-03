

import { LitElement, html, css } from 'lit';
import '../Button'

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

  query = (input) => {
    return (this.shadowRoot ?? this).querySelector(input);
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



import { LitElement, html, css } from 'lit';

const componentCSS = css`
    :host {
        position: relative;
        display: grid;
        grid-template-rows: fit-content(100%) 1fr fit-content(100%);
        overflow: hidden;
        height: 100%;
    }

    section { 
      padding: 25px;
    }
`

export class Main extends LitElement {

  static get styles() {
    return componentCSS
  }

  static get properties(){
    return {
      toRender: {type: Object, reflect: false}
    }
  }

  history = []

  constructor ({ toRender } = {}) {
    super()
    this.toRender = toRender
  }

  attributeChangedCallback(...args) {
    const attrs = ['toRender']
    super.attributeChangedCallback(...args)
    if (attrs.includes(args[0])) this.requestUpdate()
  }

  onTransition = () => {} // user-defined function

  #queue = []

  set(toRender) {
    let page = toRender.page ?? toRender

    if (typeof page === 'function') page = new page()
    page.onTransition = this.onTransition;

    if (this.content) this.toRender = toRender.page ? toRender : { page }
    else this.#queue.push(page)
  }


  updated(){
    this.content = (this.shadowRoot ?? this).querySelector("#content");
    if (this.#queue.length) {
      this.#queue.forEach(content => this.set(content))
      this.#queue = []
    }
  }

  render() {
    let { page = '' } = this.toRender ?? {}

    return html`
      <main id="content">
        <section>
          ${page}
        </section>
      </main>
    `;
  }
};

customElements.get('hypergamma-main') || customElements.define('hypergamma-main',  Main);

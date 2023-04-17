import { LitElement, html, css } from 'lit';


export class Grid extends LitElement {

#rendered = []

  constructor(items = []) {
    super();
    this.items = items;
    this.rendered = {}
    this.items.forEach((o) => {
        const div = document.createElement('div');
        div.setAttribute('data-title', o.title);
        const titleKey = o.title.toLowerCase().split(' ').join('-');
        let value;
        if (typeof o.value === 'function') value = o.value();
        if (o.value instanceof HTMLElement) {
            value = o.value;
            this.rendered[titleKey] = div;
        }
        else {
            value = document.createElement('p')
            value.innerText = o.value;
            this.rendered[titleKey] = value;
        }

        div.appendChild(value);
        this.#rendered.push(div)

        return div;
    })
  }

  static get styles() {
    return css`
    :host {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
      }

      :host > div {
        padding: 25px;
        border: 1px solid gainsboro;
        border-radius: 15px;
        margin: 10px;
        flex-grow: 1;
      }

      [data-title]::before {
        content: attr(data-title);
        display: block;
        font-size: 0.8em;
        color: gray;
      }
`;
  }

  static get properties() {
    return {
        items: { type: Array }
    };
  }

  render() {



    return html`
        ${this.#rendered}
    `;
  }

}

customElements.get('hypergamma-grid') || customElements.define('hypergamma-grid',  Grid);

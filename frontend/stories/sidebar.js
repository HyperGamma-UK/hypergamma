
import { LitElement, html, css } from 'lit';

const componentCSS = css`
 
a {
  text-decoration: none;
  display: flex;
  align-items: center;
  user-select: none;
}

img {
  width: 50px;
  padding-right: 15px;
  box-sizing: border-box;
}

li {
  margin-bottom: 10px;
}

#sidebarCollapse {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: transparent;
  position: absolute;
  top: 8px;
  left: 200px;
  cursor: pointer;
  border: none;
  z-index: 2;
  transition: all 0.25s linear;
}

#sidebarCollapse span {
  width: 80%;
  height: 2px;
  margin: 0 auto;
  display: block;
  background: var(--color-light-green);
  transition: all 0.25s linear;
  /* transition: all 0.1s cubic-bezier(0.81, -0.33, 0.345, 1.375); */
}
/* animate toggle button */
#sidebarCollapse span:first-of-type {
  transition: all 0.25s linear;
  transform: rotate(45deg) translate(2px, 2px);
}
#sidebarCollapse span:nth-of-type(2) {
  transition: all 0.25s linear;
  opacity: 0;
}
#sidebarCollapse span:last-of-type {
  transition: all 0.25s linear;
  transform: rotate(-45deg) translate(1px, -1px);
}

#sidebarCollapse.active span {
  transition: all 0.25s linear;
  transform: none;
  opacity: 1;
  margin: 5px auto;
}

#main-nav {
  background: var(--color-sidebar);
  color: white;
  font-family: "Source Sans Pro", sans-serif;
  transition: all 0.25s linear;
  transform-origin: 0 50%; /* Set the transformed position of sidebar to center left side. */
}

#main-nav.active {
  width: 0px;
  overflow: hidden;
  /* transform: rotateY(150deg);  */
}

.navbar-btn {
  transition: margin-left 600ms ease;
}

.navbar-btn.active {
  margin-left: -190px;
  transition: all 0.25s linear;
}

.navbar-btn:focus {
  outline: none;
}

.navbar-btn.active:focus {
  outline: none;
}

.dash-content.active {
  margin-left: -230px;
}

a[data-toggle="collapse"] {
  position: relative;
}

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

#main-nav .sidebar-header {
  padding: 20px;
  padding-bottom: 0px;
}

#main-nav ul.components {
  list-style: none;
  padding-right: 10px;
  padding-left: 3px;
  margin-right: 0;
  margin-top: 10px;
}

#main-nav ul p {
  color: white;
  padding: 10px;
}

#main-nav ul li a {
  font-size: 14px;
  line-height: 45px;
  padding-left: 20px;
  margin-bottom: 5px;
  text-align: left;
  padding-right: 10px;
  color: white;
  border: none;
  border-radius: 4px;
  border-left: 4px solid transparent;
}

#main-nav ul li a svg {
  fill: #000;
}

#main-nav ul li a a {
  padding-left: 10px;
  text-align: left;
  padding-right: 10px;
}

#main-nav ul li a i {
  margin-right: 25px;
  font-size: 20px;
}

#main-nav ul li a:hover {
  text-decoration: none;
  background: none;
  font-weight: 600;
}

#main-nav ul li a.is-selected {
  color: var(--color-accent);
  background: none;
  font-weight: 600;
  border-left: 4px solid var(--color-accent);
  /* margin-left: -3px; */
  border-radius: 0;
}

#main-nav ul li a.is-selected svg {
  fill: var(--color-accent);
}

.help-section {
  bottom: 2px;
  position: absolute;
  width: 230px;
}

.help-section ul {
  padding-left: 15px !important;
}

.help-section a {
  text-decoration: none;
  line-height: 5px;
  border: none;
  color: #f0f0f0;
  width: 35px !important;
  padding-right: 3px !important;
  padding-left: 3px !important;
  z-index: 200;
}

.help-section a i {
  font-size: 17px;
  opacity: 0.7;
}

.help-section a:hover {
  background: none !important;
  border: none !important;
}

.help-section a:hover i {
  opacity: 1;
}

.help-section a.is-selected {
  color: #000 !important;
  background: none !important;
  border: none !important;
}

.list-unstyled {
  list-style: none;
  border-bottom: none;
}

.list-unstyled.components li a {
  -webkit-user-drag: none;
}

.collapse:not(.show) {
  display: none;
}

.collapse.show {
  display: block;
}

.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  -webkit-transition: height 0.35s ease;
  -o-transition: height 0.35s ease;
  transition: height 0.35s ease;
}
@media (prefers-reduced-motion: reduce) {
  .collapsing {
    -webkit-transition: none;
    -o-transition: none;
    transition: none;
  }
}

.nav {
  padding: 0px 0px;
  /* position: fixed; */
  width: 240px;
  min-height: 100vh;
  color: var(--color-subtle);
  visibility: visible;
  left: 0;
  z-index: 1;
  align-items: stretch;
  /* display: flex; */
  transition: 0.5s;
}

@media screen and (max-height: 500px) {
  #main-nav {
    padding-top: 15px;
  }
  #main-nav a {
    font-size: 13px;
  }
}

.nav.is-shown {
  visibility: visible;
  opacity: 1;
}

.nav-header {
  position: relative;
  padding: 10px 10px;
  margin-top: 10px;
  margin-bottom: 30px;
}

.nav-title strong {
  color: var(--color-light-green);
  opacity: 0.8;
  transition: color 0.1s ease-in;
}

.nav-title strong:hover {
  color: linear-gradient(90deg, rgba(37, 129, 147, 1) 0%, rgba(52, 207, 196, 1) 51%);
}

.nav-header-icon {
  position: absolute;
  width: 165px;
  height: 70px;
  top: 1.3rem;
  right: 1.8rem;
}

.nav-item {
  padding: 0.5em 0;
  vertical-align: middle;
  width: 240px !important;
}

.nav-icon {
  width: 30px;
  height: 30px;
  margin-right: 27px;
  padding-bottom: 1px;
  padding-top: 1px;
  margin-left: -22px;
  margin-top: 10px;
  margin-bottom: 10px;
  vertical-align: middle;
}

.nav-icon.logo {
  width: 45px;
  height: 45px;
  margin-right: 24px;
  margin-left: 15px;
  margin-bottom: 75px;
  vertical-align: middle;
}

.nav-video {
  width: 18px;
  height: 21px;
  vertical-align: sub;
  text-decoration: none;
}

.nav-category {
  margin: 0.2em 0;
  padding-left: 2rem;
  font-size: 11px;
  font-weight: normal;
  text-transform: uppercase;
}

.nav-button {
  display: block;
  width: 100%;
  padding: 0.5rem;
  padding-left: calc(5rem + 5px + 0.5rem); /* padding + icon + magic */
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  line-height: 2;
  text-align: left;
  font-size: 16px;
  color: white;
  border: none;
  background-color: transparent;
  outline: none;
  opacity: 0.8;
  cursor: pointer;
  font-family: "Open Sans", sans-serif;
  background-size: 30px 30px;
  background-repeat: no-repeat;
  background-position: 22px center;
}

.nav-button:hover,
.nav-button:focus:not(.is-selected) {
  background-color: hsla(0, 0%, 0%, 0.1);
  color: white;
  opacity: 1;
}

.nav-button.is-selected {
  background-color: var(--color-accent);
}

.nav-button.is-selected,
.nav-button.is-selected em {
  color: white;
  font-weight: 500;
  opacity: 1;
}

.nav-button.is-selected:focus {
  opacity: 1;
}

.nav-button em {
  font-style: normal;
  font-weight: 600;
  color: var(--color-strong);
  pointer-events: none; /* makes it invisible to clicks */
}

.nav-footer {
  margin-top: 1rem;
  padding: 2rem;
  border-top: 1px solid var(--color-border);
  text-align: center;
}

.nav-footer-icon {
  width: calc(770px / 6.5);
  height: calc(88px / 6.5);
}

.nav-footer a {
  outline: none;
}

.nav-footer-button {
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: 0.75rem;
  line-height: 2;
  text-align: left;
  font: inherit;
  font-size: 15px;
  color: inherit;
  border: none;
  background-color: transparent;
  cursor: default;
  outline: none;
  text-align: center;
}

.nav-footer-button:focus {
  color: var(--color-strong);
}

.nav-footer-logo {
  color: hsl(0, 0%, 66%);
}

.nav-footer-logo:focus {
  color: hsl(0, 0%, 33%);
}

/* Remove border on the logo */
.nav-footer-logo.nav-footer-logo {
  border-bottom: none;
}

.logo-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 50px;
}
.nav-center-logo-image {
  display: block;
  width: 100%;
  padding: 0px 25px;
}
` // These are not active until the component is using shadow DOM

export class Sidebar extends LitElement {

  static get styles() {
    return componentCSS
  }

  static get properties() {
    return {
      pages: { type: Object, reflect: false },
      name: { type: String, reflect: true },
      logo: { type: String, reflect: true },
      subtitle: { type: String, reflect: true },

      renderName: { type: Boolean, reflect: true },
    };
  }

  initialize = true

  constructor (props = {}) {
    super()
    this.pages = props.pages
    this.name = props.name ?? ''
    this.logo = props.logo
    this.subtitle = props.subtitle
    this.renderName = props.renderName ?? true
  }

  // // This method turns off shadow DOM to allow for global styles (e.g. bootstrap)
  // // NOTE: This component checks whether this is active to determine how to handle styles and internal element references
  // createRenderRoot() {
  //   return this;
  // }

  attributeChangedCallback(...args) {
    const attrs = ['pages', 'name', 'subtitle', 'renderName']
    super.attributeChangedCallback(...args)
    if (attrs.includes(args[0])) this.requestUpdate()
  }

  updated(){
    this.nav = (this.shadowRoot ?? this).querySelector("#main-nav");

    this.subtitleElement = (this.shadowRoot ?? this).querySelector("#subtitle");

      // Toggle sidebar
      const toggle = this.toggle = (this.shadowRoot ?? this).querySelector("#sidebarCollapse");
      toggle.onclick = () => {
        this.nav.classList.toggle("active");
        toggle.classList.toggle("active");
      }

      // Actually click the item
      let selectedItem = (this.#selected) ? (this.shadowRoot ?? this).querySelector(`ul[data-id='${this.#selected}']`) : (this.shadowRoot ?? this).querySelector("ul").children[0]
      if (this.initialize && selectedItem) selectedItem.click()
      else if (this.#selected) this.selectItem(this.#selected) // Visually select the item

      if (this.#hidden) this.hide(true)

  }

  show = () => {
    this.#hidden = false

    if (this.nav) {
      this.nav.classList.remove("active");
      this.toggle.classList.remove("active")
      this.style.display = "block";
    }
  }

  #hidden = false

  hide = (changeDisplay) => {
    this.#hidden = true
    if (this.nav) {
      this.nav.classList.add("active");
      this.toggle.classList.add("active")
      if (changeDisplay) this.style.display = "none";
    }
  }

  onClick = () => {} // Set by the user

  selectItem = (id) => {
    this.#selected = id.split('/')[0] || '/'
    const links = (this.shadowRoot ?? this).querySelectorAll('a')
    links.forEach((a) => a.classList.remove('is-selected'))
    const a = (this.shadowRoot ?? this).querySelector(`a[data-id="${this.#selected}"]`)
    if (a) a.classList.add('is-selected')
  }

  #onClick = (id) => {
    if (!this.pages[id]) throw new Error(`No page found for key ${id}`)
    this.selectItem(id)
    this.onClick(id, this.pages[id])
  }

  #selected = ''

  select = (id) => {
    const info = this.pages?.[id]
    if (info) this.#onClick(id, info)
  }

  render() {

    const hasName = this.name && this.renderName
    const logoNoName = (this.logo && !hasName)

    return html`
    <button type="button" id="sidebarCollapse" class="navbar-btn">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav id="main-nav" class="nav js-nav">
        <div id="nav-items" class="nav-item u-category-windows">
          <!-- Sidebar Header -->
          <div class="sidebar-header">

              ${logoNoName ? html`
                <div class="logo-container">
                  <img
                    class="nav-center-logo-image"
                    src="${this.logo}"
                  />
                </div>
              ` : ''}
                ${hasName ? html`<h1 style="margin: 0;">${this.name}</h1>` : ''}
                ${this.subtitle ? html`<span id="subtitle" style="font-size: 14px; ${logoNoName ? `padding-top: 15px; text-align: center; width: 100%; display: block;` : ''}">${this.subtitle}</span>` : ''}
            </div>
            <!-- Sidebar Links -->
            <ul class="list-unstyled components">
              ${Object.entries(this.pages).map(([id, page]) => {
                const info = page.info ?? {}
                let label = info.label ?? id
                const icon = info.icon ?? ''

                return html`<li @click="${() => this.#onClick(id)}">
                  <a data-id="${id}" href="#">
                    ${icon}
                    ${label}
                  </a>
                </li>`
              })}
            </ul>
            <div>
            ${!logoNoName && this.logo ? html`
            <img
              class="nav-center-logo-image"
              style="padding:0px 40px;"
              src="${this.logo}"
            />
          ` : ''}
            </div>
          </div>
        </div>
      </nav>
    `;
  }
};

customElements.get('hypergamma-sidebar') || customElements.define('hypergamma-sidebar',  Sidebar);

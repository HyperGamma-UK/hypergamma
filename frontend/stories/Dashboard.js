

import { LitElement, html, css } from 'lit';

import { Main } from './Main.js';
import { Sidebar } from './sidebar.js';

// Global styles to apply with the dashboard
import "../assets/css/variables.css"
import "../assets/css/global.css"

// import { isStorybook } from '../globals.js';

const useURLEncoding = true // isStorybook 

const componentCSS = css`
    :host {
        display: flex;
        height: 100%;
        width: 100%;
        position: relative;
    }

    hypergamma-main {
        background: #fff;
    }
`

export class Dashboard extends LitElement {

  static get styles() {
    return componentCSS
}


  static get properties() {
    return {
      renderNameInSidebar: { type: Boolean, reflect: true },
      name: { type: String, reflect: true },
      logo: { type: String, reflect: true },
      subtitle: { type: String, reflect: true },
      activePage: { type: String, reflect: true },
    };
  }

  main;
  sidebar;

  pagesById = {}
  #active;
  #activeId;

  constructor (props = {}) {
    super()

    this.main = new Main()
    this.main.classList.add('dash-app')

    this.sidebar = new Sidebar()
    this.sidebar.onClick = (_, value) => this.setAttribute('activePage', value.info.id)


    this.pages = props.pages ?? {}
    this.name = props.name
    this.logo = props.logo
    this.renderNameInSidebar = props.renderNameInSidebar ?? true

    if (props.activePage) this.setAttribute('activePage', props.activePage)


    // Handle all pop and push state updates
    const pushState = window.history.pushState;
    window.history.pushState = function(state) {
        if (typeof window.onpushstate == "function") window.onpushstate({state: state});
        return pushState.apply(window.history, arguments);
    };

    window.onpushstate = window.onpopstate = (e) => {
      if(e.state){
        document.title = `${e.state.label} - ${this.name}`
        this.setMain(this.pagesById[e.state.page], undefined, false)
      }
    }

    this.#updated()
  }

  attributeChangedCallback(key, previous, latest) {
    super.attributeChangedCallback(...arguments)
    if (this.sidebar && (key === 'name' || key === 'logo' || key === 'subtitle'))  this.sidebar[key] = latest
    else if (key === 'renderNameInSidebar') this.sidebar.renderName = latest === 'true' || latest === true
    else if (key === 'pages') this.#updated(latest)
    else if (key.toLowerCase() === 'activepage'){
      this.sidebar.selectItem(latest) // Just highlight the item
      this.sidebar.initialize = false
      this.#activatePage(latest)
      return
    }
  }


  getPage(entry) {
    if (!entry) throw new Error('Page not found...')
    const page = entry.page ?? entry
    if (page instanceof HTMLElement) return page
    else if (typeof page === 'object') return this.getPage(Object.values(page)[0])
  }


  setMain(page, infoPassed = {}){


    // Update Previous Page
    // if (page.page) page = page.page
    const info = page.info
    const previous = this.#active
    // if (!info.next && !info.previous && info.page instanceof HTMLElement) info = this.pagesById[info.page.id] // Get info from a direct page

    if (previous === page) return // Prevent rerendering the same page

    if (previous) {
      if (previous.info.parent && previous.info.section) previous.save() // Save only on nested pages

      previous.active = false
    }

    // Update Active Page
    this.#active = page
    const toPass = { ...infoPassed}
    if (previous) toPass.globalState = previous.info.globalState

    page.set(toPass)

    // const page = this.getPage(info)
    this.main.set({ page })
  }

  #updated(pages=this.pages) {

    const url = new URL(window.location.href)
    let active = url.pathname.slice(1)
    if (useURLEncoding) active = new URLSearchParams(url.search).get('page')
    if (!active) active = this.activePage // default to active page


    this.main.onTransition = (transition) => {

      if (typeof transition === 'number'){
        const info = this.#active.info
        const sign = Math.sign(transition)
        if (sign === 1) return this.setAttribute('activePage', info.next.info.id)
        else if (sign === -1) return this.setAttribute('activePage', (info.previous ?? info.parent).info.id) // Default to back in time
      }

      if (transition in this.pages) this.sidebar.select(transition)
      else this.setAttribute('activePage', transition)
    }

      this.pagesById = {}
      Object.entries(pages).forEach((arr) => this.addPage(this.pagesById, arr))
      this.sidebar.pages = pages

      console.log('active', active)
      if (active) this.setAttribute('activePage', active)
  }

  #activatePage = (id) => {
    const page = this.getPage(this.pagesById[id])
    this.#activeId = id

    if (page) {
      const { id, label } = page.info
      history.pushState({ page: id, label }, label, (useURLEncoding) ? `?page=${id}` : `${window.location.origin}/${id === '/' ? '' : id}`);
  }
  }

  // Track Pages By Id
   addPage = (acc, arr) => {
        let [ id, page ] = arr

        const info = { ...page.info}

        if (info.id) id = info.id
        else page.info.id = id // update id

        const pages = info.pages
        delete info.pages

        // NOTE: This is not true for nested pages with more info...
        if (page instanceof HTMLElement) acc[id] = page

        if (pages) {
          const pagesArr = Object.values(pages)

          // Update info with relative information
          Object.entries(pages).forEach(([newId, nestedPage], i) => {
            nestedPage.info.base = id
            nestedPage.info.previous = pagesArr[i-1]
            nestedPage.info.next = pagesArr[i+1]
            nestedPage.info.id = `${id}/${newId}`
            nestedPage.info.parent = page
          })

          // Register all pages
          Object.entries(pages).forEach((arr) => this.addPage(acc, arr))

        }

        return acc
      }

  #first = true
  updated(){

    const div = (this.shadowRoot ?? this).querySelector("div");
    div.style.height = '100vh'

    if (this.#first) {
      this.#first = false
      this.#updated()
    }
  }

  render() {

    this.style.width = "100%";
    this.style.height = "100%";
    this.style.display = "grid";
    this.style.gridTemplateColumns = "fit-content(0px) 1fr"
    this.style.position = "relative"

    if (this.name) this.sidebar.name = this.name
    if (this.logo) this.sidebar.logo = this.logo
    if ('renderNameInSidebar' in this) this.sidebar.renderName = this.renderNameInSidebar

    return html`
        <div>
          ${this.sidebar}
        </div>
        ${this.main}
    `;
  }
};

customElements.get('hypergamma-dashboard') || customElements.define('hypergamma-dashboard',  Dashboard);



import { css, html } from 'lit';
import { App } from '../App.js';
import '../../Button.js';


export class FocusApp extends App {

  static get styles() {
    return [super.styles, css`

      canvas {
        width: 100%;
        height: 100%;
        background: black;
      }

      #readout {
        position: absolute;
        top: 0;
        right: 0;
        color: gainsboro;
        padding: 10px 25px;
      }

    `]
  }

  constructor(...args) {
    super(...args)
  }

  active = false

  updated() {

    const scale = 2;


    const readout = this.query('#readout')
    const canvas = this.query('canvas')
    const ctx = canvas.getContext('2d')

    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * scale
    canvas.height = rect.height * scale

    // Create a circle that changes its radius based on the HEG value
    const circle = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: 50,
      color: 'white',
      draw: function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    const observer = new ResizeObserver(() => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
      circle.x = canvas.width / 2
      circle.y = canvas.height / 2
    })

    observer.observe(canvas)

    this.active = true

    // Create a function that updates the circle's radius
    const animate = () => {
      circle.draw()
      if (this.active) requestAnimationFrame(animate)
    }

    this.subscribe('decoded.heg', ([ value ]) => {
      const absValue = Math.abs(value)
      readout.innerHTML = absValue
      circle.radius = absValue * 100
    })

    animate()

  }

  // Stop activity
  disconnectedCallback() {
    super.disconnectedCallback()
    this.active = false
  }

  render() {
    const footer = super.render()

    return html`
      <p id="readout">No device connected</p>
      <canvas></canvas>
      ${footer}
    `;
  }
};

customElements.get('hypergamma-focus-page') || customElements.define('hypergamma-focus-page',  FocusApp);

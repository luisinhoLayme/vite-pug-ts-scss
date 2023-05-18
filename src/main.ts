import {
  handleAnimate,
  handleTheme,
  observer,
  setupCounter
} from './helpers'

import 'gardevoir' // reset
import './scss/style.scss'

setupCounter(<HTMLButtonElement>document.querySelector('#counter'))
handleTheme(<HTMLButtonElement>document.getElementById('btn-theme'))


// animate
const images = document.querySelectorAll<Element>('.logo')

const options: IntersectionObserverInit = {
  root: null, //referencia a la ventana del navegador
  rootMargin: '0px 0px 0px 0px', // margen de la ventana
  threshold: 1.0 // vigila el elemento 1=100% y 0.5=50%
}

// const observer = new IntersectionObserver(handleAnimate, options)

const obs = observer(handleAnimate, options)

images.forEach(img => obs.observe(img))

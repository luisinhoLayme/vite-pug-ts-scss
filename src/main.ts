import {
  handleForm,
  handleTheme,
  setupCounter
} from './helpers'

import 'gardevoir' // reset
import './scss/style.scss'

setupCounter(<HTMLButtonElement>document.querySelector('#counter'))
handleTheme(<HTMLButtonElement>document.getElementById('btn-theme'))


// Form Data
const form = <HTMLFormElement>document.getElementById('form')
handleForm(form)

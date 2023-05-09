import { setupCounter } from './helpers/counter.ts'
import { handleTheme } from './helpers/theme.ts'


import 'gardevoir' // reset
import './scss/style.scss'

setupCounter(<HTMLButtonElement>document.querySelector('#counter'))
handleTheme(<HTMLButtonElement>document.getElementById('btn-theme'))

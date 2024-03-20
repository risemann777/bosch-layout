import inputPhoneMask from './modules/inputPhoneMask'
import accordion from './modules/accordion.js'
import drawer from './modules/drawer.js'
import location from './modules/location.js'
import animation from './modules/animation.js'

document.addEventListener('DOMContentLoaded', () => {
  animation()
  location()
  inputPhoneMask()
  accordion()
  drawer()
});

window.addEventListener('load', () => {
  const body = document.body
  body.classList.add('page--loaded')
});
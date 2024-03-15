import Swiper from 'swiper'
import {Navigation, Pagination} from 'swiper/modules'
import setDeviceClass from './lib/set-device-class.js'
import inputPhoneMask from './modules/inputPhoneMask'
import accordion from './modules/accordion.js'
import drawer from './modules/drawer.js'
import location from './modules/location.js'

document.addEventListener('DOMContentLoaded', () => {
  setDeviceClass()
  location()
  inputPhoneMask()
  accordion()
  drawer()

  new Swiper('.section-slider', {
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  });

});

window.addEventListener('load', () => {
  const body = document.body
  body.classList.add('page--loaded')
});
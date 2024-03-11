import Swiper from 'swiper'
import {Navigation, Pagination} from 'swiper/modules'
import {Fancybox} from '@fancyapps/ui'
import setDeviceClass from './lib/set-device-class.js'
import inputPhoneMask from './modules/inputPhoneMask'
import accordion from './modules/accordion.js'
import drawer from './modules/drawer.js'
import countrySelect from './modules/country-select.js'

document.addEventListener('DOMContentLoaded', () => {
  setDeviceClass()
  inputPhoneMask()
  accordion()
  drawer()
  countrySelect()

  new Swiper('.product-section-slider', {
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
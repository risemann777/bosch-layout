import example from "./modules/example.js"
import Swiper from "swiper"
import {Navigation, Pagination} from 'swiper/modules'
import inputPhoneMask from "./modules/inputPhoneMask";

document.addEventListener('DOMContentLoaded', () => {
  example()
  inputPhoneMask()

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
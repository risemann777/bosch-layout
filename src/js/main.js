import example from "./modules/example.js"
// import Swiper from "swiper"
// import {Pagination} from 'swiper/blocks'
// import "swiper/css"
// import 'swiper/css/pagination'
import inputPhoneMask from "./modules/inputPhoneMask";

document.addEventListener('DOMContentLoaded', () => {
  example()
  inputPhoneMask()

  /*
  new Swiper('.slider', {
    blocks: [Pagination],
    pagination: {
      el: '.swiper-pagination',
    },
  });
  */
});

window.addEventListener('load', () => {
  const body = document.body
  body.classList.add('page--loaded')
});
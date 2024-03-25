import Swiper from 'swiper'
import {Navigation, Pagination} from 'swiper/modules'
import { Fancybox } from '@fancyapps/ui'

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('#mainSlider', {
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

  new Swiper('#wideSlider', {
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

  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });
})
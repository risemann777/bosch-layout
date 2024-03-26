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
    autoHeight: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  });

  new Swiper('#newsSlider', {
    modules: [Navigation, Pagination],
    slidesPerView: "auto",
    spaceBetween: 16,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      992: {
        spaceBetween: 32
      }
    }
  });

  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });
})
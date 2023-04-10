import { burger } from './functions/burger';
import { counter } from './functions/counter';
import Swiper, { Navigation, Pagination } from 'swiper';

// Swiper initialization
const reviewsSlider = new Swiper('.reviews__slider', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  navigation: {
    nextEl: '.js--reviewsArrowRight',
    prevEl: '.js--reviewsArrowLeft',
  },
  pagination: {
    el: '.js--reviewsPagination',
    clickable: true,
  },
});

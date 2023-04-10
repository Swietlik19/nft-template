import vars from './_vars';
import './_components';

// Variables
const header = vars.documentEl.querySelector('.header');

// Fixed header
vars.windowEl.addEventListener('scroll', function() {
  header.classList.toggle('header--fixed', vars.windowEl.scrollY > 0);
});

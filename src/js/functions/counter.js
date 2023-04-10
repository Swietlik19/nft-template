import vars from '../_vars';

const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();

  var targetPosition = {
    top: vars.windowEl.pageYOffset + rect.top,
    bottom: vars.windowEl.pageYOffset + rect.bottom
  },

  windowPosition = {
    top: vars.windowEl.pageYOffset,
    bottom: vars.windowEl.pageYOffset + vars.documentEl.documentElement.clientHeight
  };

  return (targetPosition.bottom > windowPosition.top &&
          targetPosition.top < windowPosition.bottom);
}

const animateValue = (counter, end, step, additionalText, duration, stepTime) => {
  let current = 0;
  let timer = setInterval(() => {
    current += step;
    if (current >= end) {
      clearInterval(timer);
      counter.innerHTML = current + additionalText;
      return;
    }
    counter.innerHTML = current;
  }, stepTime);
};

let counters = vars.documentEl.querySelectorAll(".js--counterNum");

counters.forEach((counter) => {
  let end = parseInt(counter.getAttribute("data-counter-end"));
  let step = parseInt(counter.getAttribute("data-counter-step"));
  let additionalText = counter.getAttribute("data-counter-add");
  let duration = 500;
  let stepTime = Math.abs(Math.floor(duration / (end / step)));
  let isDone = false;

  vars.windowEl.addEventListener("scroll", function() {
    if (isElementInViewport(counter) && !isDone) {
      isDone = true;
      animateValue(counter, end, step, additionalText, duration, stepTime);
    }
  });
});

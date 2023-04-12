// Calculates the time remaining until a given end time
const getTimeRemaining = (endTime) => {
  const total = Date.parse(endTime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

// Updates the clock with the current time remaining
const updateClock = (params) => {
  const timeRemains = getTimeRemaining(params.deadline);

  if (params.daysSpan) params.daysSpan.innerHTML = timeRemains.days;
  if (params.hoursSpan) params.hoursSpan.innerHTML = timeRemains.hours > 0 ? ('0' + timeRemains.hours).slice(-2) : '0';
  if (params.minutesSpan) params.minutesSpan.innerHTML = timeRemains.minutes > 0 ? ('0' + timeRemains.minutes).slice(-2) : '0';
  if (params.secondsSpan) params.secondsSpan.innerHTML = timeRemains.seconds > 0 ? ('0' + timeRemains.seconds).slice(-2) : '0';

  return timeRemains.total;
}

// Initializes a countdown clock for all elements matching the given selector
const initializeClock = (clock) => {
  const params = {
    daysSpan: clock.querySelector('.js--countdown-days'),
    hoursSpan: clock.querySelector('.js--countdown-hours'),
    minutesSpan: clock.querySelector('.js--countdown-minutes'),
    secondsSpan: clock.querySelector('.js--countdown-seconds'),
    deadline: new Date(clock.getAttribute('data-deadline'))
  }
  let timeInterval;

  updateClock(params);
  timeInterval = setInterval(() => {
    if (updateClock(params) <= 0) clearInterval(timeInterval);
  }, 1000);
}

const clocks = document.querySelectorAll('.js--countdown');
clocks.forEach((clock) => {
  initializeClock(clock);
});


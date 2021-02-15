export const initTimer = () => {
  const p = document.createElement('p');
  const div = document.querySelector('.time-label');
  div.appendChild(p);

  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const seg = String(time % 60).padStart(2, 0);

    p.textContent = `${min}:${seg}`;

    if (time === 300) {
      p.textContent = '5 minutes of your life are gone!';
      clearInterval(timer);
    }

    time++;
  };
  let time = 0;
  tick();

  const timer = setInterval(tick, 1000);
  return timer;
};

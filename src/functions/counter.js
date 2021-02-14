const initCounter = () => {
  const p = document.createElement('p');
  root.appendChild(p);

  const tick = function () {
    p.textContent = `${time}`;

    if (time === 0) {
      p.textContent = 'One minute of your life is gone!';
      clearInterval(timer);
    }

    time--;
  };
  let time = 60;
  tick();

  const timer = setInterval(tick, 1000);
  return timer;
};

export { initCounter };

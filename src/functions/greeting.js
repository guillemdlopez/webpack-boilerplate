const greeting = function (name) {
  const root = document.getElementById('root');
  const h1 = document.createElement('h1');
  h1.textContent = `Welcome, ${name}!!`;
  root.appendChild(h1);
};

export default greeting;

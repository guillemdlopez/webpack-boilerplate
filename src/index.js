import './style/stylesheets/index.scss';
import { render } from 'react-dom';
import App from './javascript/App';
import { initTimer } from './javascript/timer';

render(<App />, document.getElementById('root'));

initTimer();

const promise = function () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved!');
    }, 5000);
  });
};

const callingPromise = async function () {
  console.log('calling');
  const result = await promise();
  console.log(result);
};

callingPromise();

console.log('Hi!!!!');

import './style/stylesheets/index.scss';
import { render } from 'react-dom';
import App from './javascript/App';
import greeting from './javascript/greeting';
import { initTimer } from './javascript/timer';

render(<App />, document.getElementById('root'));

greeting();
initTimer();

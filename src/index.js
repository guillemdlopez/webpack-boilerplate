import './style/stylesheets/index.scss';
import { render } from 'react-dom';
import App from './javascript/App';
import { nameless } from './javascript/function';

render(<App />, document.getElementById('root'));
nameless();

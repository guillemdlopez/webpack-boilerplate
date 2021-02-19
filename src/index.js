import { render } from 'react-dom';
import App from './javascript/App';
import { nameless } from './javascript/function';

import './style/stylesheets/index.scss';

render(<App />, document.getElementById('root'));
nameless();

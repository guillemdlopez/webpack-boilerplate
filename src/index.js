'use strict';

import './assets/styles/index.scss';

import { initCounter } from './functions/counter';
import greeting from './functions/greeting';

const user = {
  name: 'Guillem',
};

const logged = {
  ...user,
  logged: true,
};

console.log(user.name);
console.log(`${logged.logged ? 'IS LOGGED IN!' : 'HE IS OUT'}`);

greeting('Guillem');
initCounter();
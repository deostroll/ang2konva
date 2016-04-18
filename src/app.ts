import {bootstrap} from 'angular2/platform/browser';

import {App} from './app/seed-app';


bootstrap(App)
.catch(err => console.error(err));

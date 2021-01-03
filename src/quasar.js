import Vue from 'vue';

import './styles/quasar.scss';
import 'quasar/dist/quasar.ie.polyfills';
import iconSet from 'quasar/icon-set/fontawesome-v5.js';
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css';
import { Quasar, Loading } from 'quasar';

Vue.use(Quasar, {
  config: {},
  plugins: { Loading },
  iconSet: iconSet
});

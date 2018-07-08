import Vue from 'nativescript-vue';

import router from './router';

import store from './store';

import './styles.scss';

// NativeScript-Vue output logs
Vue.config.silent = false;

new Vue({

  router,

  store,

}).$start();
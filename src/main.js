import Vue from 'vue';
import App from './App.vue';
import router from './router';

import { myDirective } from './directive';

Vue.directive('my-directive', myDirective);

Vue.config.productionTip = false;

Vue.filter('reverseStr', (v) => v.split('').reverse().join(''));

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

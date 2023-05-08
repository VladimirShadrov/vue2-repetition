import Vue from 'vue';
import App from './App.vue';
import router from './router';

import { myDirective } from './directive';

Vue.directive('my-directive', myDirective);

Vue.component('AppAsyncTest', () => import('./components/components/pages/testComponents/AppAsyncTest.vue'));

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

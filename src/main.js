import Vue from 'vue';
import App from './App.vue';
import router from './router';

import { myDirective } from './directive';

Vue.directive('my-directive', myDirective);

Vue.config.productionTip = false;

Vue.component('app-async-test', () => import('./components/components/pages/testComponents/AppAsyncTest.vue'));

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

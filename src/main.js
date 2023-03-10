import Vue from 'vue';
import App from './App.vue';
import router from './router';

import { myDirective } from './directive';

Vue.directive('my-directive', myDirective);

import { MyGlobalCounter } from './components/components/pages/testComponents/MyGlobalCounter.vue';
Vue.component('my-global-counter', MyGlobalCounter);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

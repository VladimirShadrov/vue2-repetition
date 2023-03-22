import Vue from 'vue';
import App from './App.vue';
import router from './router';

import { myDirective } from './directive';

Vue.directive('my-directive', myDirective);

Vue.config.productionTip = false;

import MyGlobalCounter from './components/components/pages/testComponents/MyGlobalCounter.vue';
console.log(MyGlobalCounter);

Vue.component('global-counter', MyGlobalCounter);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

import Vue from 'vue';
import App from './App.vue';
import router from './router';

import { myDirective } from './directive';
import MyGlobalCounter from './components/components/pages/testComponents/MyGlobalCounter.vue';

Vue.component('MyGlobalCounter', MyGlobalCounter);

Vue.directive('my-directive', myDirective);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

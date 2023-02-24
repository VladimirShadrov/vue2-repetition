import Vue from 'vue';
import VueRouter from 'vue-router';
import AppBase from '../components/base/AppBase.vue';
import AppComponents from '../components/components/AppComponents.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/base',
    name: 'base',
    component: AppBase,
  },
  {
    path: '/components',
    name: 'components',
    component: AppComponents,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

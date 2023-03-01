import Vue from 'vue';
import VueRouter from 'vue-router';
import AppBase from '../components/base/AppBase.vue';
import AppComponents from '../components/components/AppComponents.vue';
import AppDynamicAttributes from '../components/base/pages/AppAttributes.vue';
import AppVHtml from '../components/base/pages/AppVHtml.vue';
import AppEvents from '../components/base/pages/AppEvents.vue';
import AppDirectivesLabels from '../components/base/pages/AppDirectivesLabels.vue';
import AppVModel from '../components/base/pages/AppVModel.vue';
import AppStyles from '../components/base/pages/AppStyles.vue';
import AppShowItems from '../components/base/pages/AppShowItems.vue';
import AppLists from '../components/base/pages/AppLists.vue';
import AppComputed from '../components/base/pages/AppComputed.vue';
import AppWatch from '../components/base/pages/AppWatch.vue';
import AppInstance from '../components/base/pages/AppInstance.vue';
import AppRef from '../components/base/pages/AppRef.vue';
import AppTemplate from '../components/base/pages/AppTemplate.vue';
import AppLifeCycle from '../components/base/pages/AppLifeCycle.vue';
import AppRegistration from '../components/components/pages/AppRegistration.vue';
import AppProps from '../components/components/pages/AppProps.vue';
import AppEmit from '../components/components/pages/AppEmit.vue';
import AppChildren from '../components/components/pages/AppChildren.vue';
import AppEmitter from '../components/components/pages/AppEmitter.vue';
import AppSlot from '../components/components/pages/AppSlot.vue';
import AppProvide from '../components/components/pages/AppProvide.vue';
import AppDirectives from '../components/directives/AppDirectives.vue';
import AppCustomDirect from '../components/directives/pages/AppCustomDirect.vue';
import AppDirParams from '../components/directives/pages/AppDirParams.vue';
import AppDirLocal from '../components/directives/pages/AppDirLocal.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/base',
    component: AppBase,
    children: [
      {
        path: '/atributes',
        component: AppDynamicAttributes,
      },
      {
        path: '/v-html',
        component: AppVHtml,
      },
      {
        path: '/events',
        component: AppEvents,
      },
      {
        path: '/labels',
        component: AppDirectivesLabels,
      },
      {
        path: '/v-model',
        component: AppVModel,
      },
      {
        path: '/styles',
        component: AppStyles,
      },
      {
        path: '/v-if_v-show',
        component: AppShowItems,
      },
      {
        path: '/lists',
        component: AppLists,
      },
      {
        path: '/computed',
        component: AppComputed,
      },
      {
        path: '/watch',
        component: AppWatch,
      },
      {
        path: '/vue-instance',
        component: AppInstance,
      },
      {
        path: '/ref',
        component: AppRef,
      },
      {
        path: '/template',
        component: AppTemplate,
      },
      {
        path: '/life-cycle',
        component: AppLifeCycle,
      },
    ],
  },
  {
    path: '/components',
    component: AppComponents,
    children: [
      {
        path: '/registration',
        component: AppRegistration,
      },
      {
        path: '/props',
        component: AppProps,
      },
      {
        path: '/emit',
        component: AppEmit,
      },
      {
        path: '/children',
        component: AppChildren,
      },
      {
        path: '/emitter',
        component: AppEmitter,
      },
      {
        path: '/slot',
        component: AppSlot,
      },
      {
        path: '/provide',
        component: AppProvide,
      },
    ],
  },
  {
    path: '/directives',
    component: AppDirectives,
    children: [
      {
        path: '/castom-directive',
        component: AppCustomDirect,
      },
      {
        path: '/dir-params',
        component: AppDirParams,
      },
      {
        path: '/dir-local',
        component: AppDirLocal,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

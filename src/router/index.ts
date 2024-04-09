import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Slots',
    component: () => import('@/views/Eltree/index.vue')
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('@/views/Grid/index.vue')
  },
  {
    path: '/gridLayout',
    name: 'GridLayoutDemo',
    component: () => import('@/views/GridLayout/index.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;

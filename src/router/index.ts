import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Ofd',
    component: () => import('@/views/Ofd/index.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;

import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'demo',
    component: () => import('@/views/AdaptivePics/index.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router

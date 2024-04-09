import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import jm from 'vue-jsmind';

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper /* { default options with global component } */);

Vue.use(jm);
Vue.prototype.jsMind = (window as any).jsMind;

Vue.config.productionTip = false;
Vue.use(Element);

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');

import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import axios from 'axios';

Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.prototype.$http = axios;


new Vue({
  render: h => h(App),
}).$mount('#app');

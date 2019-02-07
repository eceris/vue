/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import Axios from 'axios';

Vue.use(VueRouter);

// https://kr.vuejs.org/v2/api/#productionTip
Vue.config.productionTip = false;   //false로 설정하면 배포에 대한 팁을 출력하지 않습니다.
Vue.use(BootstrapVue);

Axios.defaults.baseURL = 'localhost';
Axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// Add a request interceptor
Axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log('Do something before request is sent');
    return config;
}, function (error) {
    // Do something with request error
    console.log('Do something with request error');
    return Promise.reject(error);
});

// Add a response interceptor
Axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});


Vue.prototype.$http = Axios;


new Vue({
    render: h => h(App),
}).$mount('#app');

<template>
  <div id="app">
    <router-link to="/todo">
      <img alt="Vue logo" src="./assets/logo.png">
    </router-link>
    <router-link to="/topic">
      <img alt="Vue logo" src="./assets/logo.png">
    </router-link>
    <!--<Topic msg="Welcome to Your Vue.js App"/>-->
    <router-view></router-view>
  </div>
</template>

<script>
import Topic from './components/Topic.vue'
import Todo from './components/Todo.vue'
import VueRouter from 'vue-router'


/**
 * TODO routing
 * ref : http://blog.jeonghwan.net/2018/04/07/vue-router.html
 */
var routes = [
  { path: '/todo', component: Todo },
  { path: '/topic', component: Topic }
];

var router = new VueRouter({
  routes // `routes: routes`의 줄임
});



export default {
  name: 'app',
  components: {
    // Topic,
    // Todo
  },
  router : router
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

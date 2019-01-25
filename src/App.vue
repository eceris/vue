<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--<Topic msg="Welcome to Your Vue.js App"/>-->
    <Todo></Todo>
  </div>
</template>

<script>
// import Topic from './components/Topic.vue'
import Todo from './components/Todo.vue'

/**
 * TODO routing
 * ref : http://blog.jeonghwan.net/2018/04/07/vue-router.html
 */
export default {
  name: 'app',
  components: {
    // Topic,
    Todo
  }
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

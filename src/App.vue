<template>
  <div id="app">
    <nav-bar :key="$route.path"></nav-bar>
    <router-view :key="$route.path"/>
  </div>
</template>

<script>
import navbar from '../src/components/navbar'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  components: {
    'nav-bar': navbar
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
  /* margin-top: 60px; */
}
</style>

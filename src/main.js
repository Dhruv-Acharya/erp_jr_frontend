// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueLocalStorage from 'vue-localstorage'
import VueJwtDecode from 'vue-jwt-decode'
import Dropdown from 'vue-simple-search-dropdown'

Vue.use(VueLocalStorage)
Vue.use(BootstrapVue)
Vue.use(VueJwtDecode)
Vue.use(Dropdown)
Vue.component('Dropdown', Dropdown)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

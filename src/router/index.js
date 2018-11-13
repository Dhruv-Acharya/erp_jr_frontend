import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import CreateCompany from '@/components/CreateCompany'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: login
    },
    {
      path: '/createcompany',
      name: 'CreateCompany',
      component: CreateCompany
    }
  ]
})

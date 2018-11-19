import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import CreateCompany from '@/components/CreateCompany'
import Dashboard from '@/components/Dashboard'
import AddInventory from '@/components/AddInventory'
import ChangeCompany from '@/components/ChangeCompany'
import ViewInventory from '@/components/ViewInventory'
import AddUnits from '@/components/AddUnits'
import ViewUnits from '@/components/ViewUnits'
import CreateCategory from '@/components/CreateCategory'
import ViewCategory from '@/components/ViewCategory'
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
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/addinventory',
      name: 'addInventory',
      component: AddInventory
    },
    {
      path: '/changecompany',
      name: 'changeCompany',
      component: ChangeCompany
    },
    {
      path: '/viewinventory',
      name: 'viewInventory',
      component: ViewInventory
    },
    {
      path: '/addunits',
      name: 'addUnits',
      component: AddUnits
    },
    {
      path: '/viewunits',
      name: 'viewUnits',
      component: ViewUnits
    },
    {
      path: '/createcategory',
      name: 'createCategory',
      component: CreateCategory
    },
    {
      path: '/viewcategory',
      name: 'viewCategory',
      component: ViewCategory
    }
  ]
})

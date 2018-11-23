import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import CreateCompany from '@/components/CreateCompany'
import Dashboard from '@/components/Dashboard'
import AddInventory from '@/components/AddInventory'
import ViewInventory from '@/components/ViewInventory'
import AddUnits from '@/components/AddUnits'
import ViewUnits from '@/components/ViewUnits'
import CreateCategory from '@/components/CreateCategory'
import ViewCategory from '@/components/ViewCategory'
import AddState from '@/components/AddState'
import ViewState from '@/components/ViewState'
import AddAccountType from '@/components/AddAccountType'
import ViewAccountType from '@/components/ViewAccountType'
import AddAccount from '@/components/AddAccount'
import ViewAccount from '@/components/ViewAccount'
import AddInvoice from '@/components/AddInvoice'
import AddUser from '@/components/AddUser'
import GenerateBarcode from '@/components/GenerateBarcode'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: login
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
      path: '/addUser',
      name: 'AddUser',
      component: AddUser
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
    },
    {
      path: '/addstate',
      name: 'addstate',
      component: AddState
    },
    {
      path: '/viewstate',
      name: 'viewstate',
      component: ViewState
    },
    {
      path: '/addaccounttype',
      name: 'addaccounttype',
      component: AddAccountType
    },
    {
      path: '/viewaccounttype',
      name: 'viewaccounttype',
      component: ViewAccountType
    },
    {
      path: '/addaccount',
      name: 'addaccount',
      component: AddAccount
    },
    {
      path: '/viewaccount',
      name: 'viewaccount',
      component: ViewAccount
    },
    {
      path: '/addinvoice',
      name: 'addinvoice',
      component: AddInvoice
    },
    {
      path: '/generateBarcode',
      name: 'generateBarcode',
      component: GenerateBarcode
    }
  ],
  mode: 'history'
})

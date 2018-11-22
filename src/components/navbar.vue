<template>
    <b-navbar toggleable="md"  variant="info" v-if="this.showNav">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
        <b-nav-item-dropdown text="Inventory">
            <b-dropdown-item @click="toAddInventory()">Add</b-dropdown-item>
            <b-dropdown-item @click="toViewInventory()">View</b-dropdown-item>
            <b-dropdown-item href="#">Generate Barcode</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Invoice">
            <b-dropdown-item href="#">Generate</b-dropdown-item>
            <b-dropdown-item href="#">View</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Accounts">
            <b-dropdown-item @click="toAddAccount()">Add</b-dropdown-item>
            <b-dropdown-item @click="toViewAccount()">View</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Utils">
            <b-dropdown-header>Units</b-dropdown-header>
            <b-dropdown-item @click="toAddUnits()">Add</b-dropdown-item>
            <b-dropdown-item @click="toViewUnits()">View</b-dropdown-item>
            <b-dropdown-header>AccountType</b-dropdown-header>
            <b-dropdown-item @click="toAddAccountType()">Add</b-dropdown-item>
            <b-dropdown-item @click="toViewAccountType()">View</b-dropdown-item>
            <b-dropdown-header>Category</b-dropdown-header>
            <b-dropdown-item @click="toAddCategory()">Add</b-dropdown-item>
            <b-dropdown-item @click="toViewCategory()">View</b-dropdown-item>
            <b-dropdown-header>State</b-dropdown-header>
            <b-dropdown-item @click="toAddState()">Add</b-dropdown-item>
            <b-dropdown-item @click="toViewState()">View</b-dropdown-item>
        </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown :text="company.company_name" right>
            <b-dropdown-item href="#">Add User</b-dropdown-item>
            <b-dropdown-item >Logout</b-dropdown-item>
        </b-nav-item-dropdown>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'navbar',
  data () {
    return {
      showNav: true,
      company: JSON.parse(Vue.localStorage.get('companyName'))
    }
  },
  methods: {
    showNavbar () {
      if (this.$route.path === '/login' || this.$route.path === '/createcompany') {
        this.showNav = false
      } else {
        this.showNav = true
      }
    },
    toAddInventory () {
      this.$router.push({name: 'addInventory'})
    },
    toViewInventory () {
      this.$router.push({name: 'viewInventory'})
    },
    toAddUnits () {
      this.$router.push({name: 'addUnits'})
    },
    toViewUnits () {
      this.$router.push({name: 'viewUnits'})
    },
    toAddAccount () {
      this.$router.push({name: 'addaccount'})
    },
    toViewAccount () {
      this.$router.push({name: 'viewaccount'})
    },
    toAddAccountType () {
      this.$router.push({name: 'addaccounttype'})
    },
    toViewAccountType () {
      this.$router.push({name: 'viewaccounttype'})
    },
    toAddState () {
      this.$router.push({name: 'addstate'})
    },
    toViewState () {
      this.$router.push({name: 'viewstate'})
    },
    toAddCategory () {
      this.$router.push({name: 'createCategory'})
    },
    toViewCategory () {
      this.$router.push({name: 'viewCategory'})
    }
  },
  created () {
    this.showNavbar()
  }
}
</script>

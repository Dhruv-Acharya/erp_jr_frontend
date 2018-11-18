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
            <b-dropdown-item href="#">ADD</b-dropdown-item>
        </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown :text="companyName" right>
            <b-dropdown-item @click="toChangeCompany()">Change Company</b-dropdown-item>
            <b-dropdown-item href="#">Add User</b-dropdown-item>
            <b-dropdown-item href="#">Logout</b-dropdown-item>
        </b-nav-item-dropdown>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>
<script>
export default {
  name: 'navbar',
  data () {
    return {
      showNav: true,
      companyName: 'Abc Inc.'
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
    toChangeCompany () {
      this.$router.push({name: 'changeCompany'})
    },
    toViewInventory () {
      this.$router.push({name: 'viewInventory'})
    }
  },
  created () {
    this.showNavbar()
  }
}
</script>

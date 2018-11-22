<template>
    <div>
        <h1> Jalaram rakhi</h1>
        <!--Enter name of the inventory item-->
        <b-form-input id="inventoryName" v-model="accountName" placeholder="Enter Account Name" class="input"></b-form-input>
         <!--Enter Category of the inventory item-->
        <b-form-select id="accountType" v-model="accountSelected" :options="accountOptions" class="input" placeholder="Select Account Type" />
        <div>
        <b-form-select id="company" v-model="companySelected" :options="companyOptions" class="input" placeholder="Select Company" />
        </div>
        <div>
        <b-button id="addInventory" size="md" variant="primary" @click="addAccount()">Add</b-button>
        </div>
    </div>
</template>
<script>
import userService from '../services/userService'
export default {
  data () {
    return {
      accountName: null,
      accountSelected: null,
      companySelected: null,
      accountOptions: [],
      companyOptions: []
    }
  },
  methods: {
    async getCompanies () {
      var response = await userService.fetchCompanies()
      var companyList = [{value: null, text: 'Please select a company', disabled: true}]
      for (var item of response.data) {
        companyList.push({value: item, text: item.company_name})
      }
      this.companyOptions = companyList
    },
    async fetchAccountType () {
      var response = await userService.getAllAccountTypes()
      var accountTypeArray = [{value: null, text: 'Please select an Account Type', disabled: true}]
      for (var item of response.data) {
        accountTypeArray.push({value: item, text: item.account_type})
      }
      this.accountOptions = accountTypeArray
    },
    async addAccount () {
      var response = await userService.addAccount(this.accountSelected, this.companySelected, this.accountName)
      console.log(response)
    },
    checkLogin () {
      if (!userService.checkIfLoggedIn()) {
        this.$router.push('Login')
      }
    }
  },
  mounted () {
    this.checkLogin()
    this.getCompanies()
    this.fetchAccountType()
  }
}
</script>
<style>
.input {
  width: 40%;
  margin: 10px auto;
}
</style>

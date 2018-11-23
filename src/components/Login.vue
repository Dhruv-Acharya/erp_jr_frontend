<template>
    <div>
        <h1> Jalaram rakhi</h1>

        <b-form-select v-model="selected" :options="options" class="mb-3 input" placeholder="Select Company" />

        <b-form-input v-model="userName"
                  type="text"
                  placeholder="Enter username" class="input" required></b-form-input>
        <b-form-input v-model="userPassword"
                  type="password"
                  placeholder="Enter Password" class="input" required></b-form-input>

        <b-button size="md" variant="primary" @click="login()">
                Login
            </b-button>
        <div>
        <b-button size="md" variant="link" @click="toCreate()">
                Create new company
            </b-button>
        </div>
    </div>
</template>
<script>
import userService from '../services/userService'
import Vue from 'vue'
export default {
  data () {
    return {
      userName: '',
      userPassword: '',
      selected: null,
      options: []
    }
  },
  methods: {
    toCreate () {
      this.$router.push({name: 'CreateCompany'})
    },
    async getCompanies () {
      var response = await userService.fetchCompanies()
      var companyList = [{value: null, text: 'Please select a company', disabled: true}]
      for (var item of response.data) {
        companyList.push({value: item, text: item.company_name})
      }
      this.options = companyList
    },
    async login () {
      try {
        var response = await userService.userLogin(this.userName, this.userPassword, this.selected)
      } catch (e) {
        alert('Invalid username or password')
      }
      if (response.status !== 200) {
        alert('Invalid username or password')
      }
      Vue.localStorage.set('bearer', 'Bearer ' + response.data.token)
      var userObj = await userService.getUserObject(response.data.user.username, response.data.company.company_id)
      response.data.user.user_id = userObj.data.user_id
      delete response.data.user.user_password
      delete response.data.user.user_confirm_password
      console.log(Vue.localStorage.get('bearer'))
      Vue.localStorage.set('company', JSON.stringify(response.data.company))
      Vue.localStorage.set('user', JSON.stringify(response.data.user))
      if (response.data.token) {
        this.$router.push('Dashboard')
      }
    }
  },
  mounted () {
    this.getCompanies()
  }
}
</script>
<style>
.input{
  width:40%;
  margin:10px auto
}
</style>

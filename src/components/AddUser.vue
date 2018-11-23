<template>
    <div>
        <h1> Jalaram rakhi</h1>
        <b-form>
        <b-form-input v-model="userName"
                  type="text"
                  placeholder="Username" class="input" required></b-form-input>
        <b-form-input v-model="password"
                  type="password"
                  placeholder="Enter Password" class="input" required @input="checkPassword()"></b-form-input>
        <b-form-input v-model="reEnterPassword"
                  type="password"
                  placeholder="Confirm Password" class="input" required @input="checkPassword()"></b-form-input>
        <span style="color:red" v-if="this.mismatch">Passwords does not match</span>
        <div>
        <b-button size="md" variant="primary" type="button" :disabled="this.mismatch" @click="onSubmit()">
                Create
        </b-button>
        </div>
        </b-form>
    </div>
</template>
<script>
import userService from '../services/userService'
import Vue from 'vue'
export default {
  data () {
    return {
      userName: '',
      mismatch: false,
      password: '',
      reEnterPassword: '',
      isLoggedIn: false
    }
  },
  methods: {
    async onSubmit () {
      var company = JSON.parse(Vue.localStorage.get('company'))
      var response = await userService.addUser(this.password, this.reEnterPassword, company, this.userName)
      console.log(response.data)
      alert('New user successfully added')
    },
    checkPassword () {
      if (this.password !== this.reEnterPassword) {
        this.mismatch = true
      } else {
        this.mismatch = false
      }
    }
  }
}
</script>
<style>
.input {
  width: 40%;
  margin: 10px auto;
}
</style>

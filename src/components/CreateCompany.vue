<template>
    <div>
        <h1> Jalaram rakhi</h1>
        <b-form>
        <b-form-input v-model="companyName"
                  type="text"
                  placeholder="Enter Company name" class="input" required></b-form-input>
        <b-form-input v-model="userName"
                  type="text"
                  placeholder="Enter username" class="input" required></b-form-input>
        <b-form-input v-model="password"
                  type="password"
                  placeholder="Password" class="input" required @input="checkPassword()"></b-form-input>
        <b-form-input v-model="reEnterPassword"
                  type="password"
                  placeholder="Confirm Password" class="input" required @input="checkPassword()"></b-form-input>
        <span style="color:red" v-if="this.mismatch">Passwords does not match</span>
        <div>
        <b-button size="md" variant="primary" type="submit" :disabled="this.mismatch" @click="onSubmit()">
                Create
        </b-button>
        </div>
        </b-form>
    </div>
</template>
<script>
import userService from '../services/userService'
export default {
  data () {
    return {
      companyName: '',
      userName: '',
      mismatch: false,
      password: '',
      reEnterPassword: '',
      isLoggedIn: false
    }
  },
  methods: {
    async onSubmit () {
      var response = await userService.addCompany(this.companyName, this.userName, this.password)
      console.log(response.data)
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

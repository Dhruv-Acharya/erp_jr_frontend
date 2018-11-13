<template>
    <div>
        <h1> Jalaram rakhi</h1>

        <b-form-input v-model="text1"
                  type="text"
                  placeholder="Enter Company name" class="input"></b-form-input>
        <b-form-input v-model="text1"
                  type="text"
                  placeholder="Enter username" class="input"></b-form-input>
        <b-form-input v-model="password"
                  type="password"
                  placeholder="Confirm Password" class="input" @input="checkPassword()"></b-form-input>
        <b-form-input v-model="reEnterPassword"
                  type="password"
                  placeholder="Enter Password" class="input" @input="checkPassword()"></b-form-input>
        <span style="color:red" v-if="this.mismatch">Passwords does not match</span>
        <div>
        <b-button size="md" variant="primary">
                Create
            </b-button>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      mismatch: false,
      password: '',
      reEnterPassword: ''
    }
  },
  methods: {
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

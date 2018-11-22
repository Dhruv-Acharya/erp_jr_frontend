<template>
    <div>
        <h1> Jalaram rakhi</h1>
        <!--Enter name of the unit-->
        <b-input-group  class="input">
                <b-form-input id="unitName" v-model="unitName" placeholder="Enter Name"></b-form-input>
        </b-input-group>
        <div>
        <b-button id="addUnit" size="md" required variant="primary" @click="addNewUnit()">
                Add
            </b-button>
        </div>
    </div>
</template>
<script>
import userService from '../services/userService'
export default {
  data () {
    return {
      unitName: ''
    }
  },
  methods: {
    async addNewUnit () {
      var response = await userService.insertUnit(this.unitName)
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
  }
}
</script>
<style>
.input {
  width: 40%;
  margin: 10px auto;
}
</style>

<style>
.input {
  width: 40%;
  margin: 10px auto;
}
</style>

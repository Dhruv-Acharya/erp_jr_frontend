<template>
    <div>
        <h1> Jalaram rakhi</h1>
        <h3> Add Account Type</h3>
        <!--Enter name of the unit-->
        <b-input-group  class="input">
                <b-form-input id="account_type" v-model="accountType" placeholder="Enter Account Type"></b-form-input>
        </b-input-group>
        <div>
        <b-button id="addAccount" @click="addAccountType()" size="md" variant="primary">
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
      accountType: null
    }
  },
  methods: {
    async addAccountType () {
      console.log(await userService.addAccountType(this.accountType))
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

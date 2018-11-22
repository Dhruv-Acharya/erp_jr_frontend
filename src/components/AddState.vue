<template>
    <div>
        <h1> Jalaram rakhi</h1>
        <h3> Add State</h3>
        <!--Enter name of the unit-->
        <b-input-group  class="input">
                <b-form-input id="stateName" v-model="stateName" placeholder="Enter State Name"></b-form-input>
        </b-input-group>
        <div>
        <b-button id="addState" size="md" @click="addNewState()" variant="primary">
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
      stateName: ''
    }
  },
  methods: {
    async addNewState () {
      var response = await userService.addState(this.stateName)
      console.log(response)
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

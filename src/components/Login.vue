<template>
    <div>
        <h1> Jalaram rakhi</h1>

        <b-form-select v-model="selected" :options="options" class="mb-3 input" placeholder="Select Company" />

        <b-form-input v-model="text1"
                  type="text"
                  placeholder="Enter username" class="input"></b-form-input>
        <b-form-input v-model="text1"
                  type="password"
                  placeholder="Enter Password" class="input"></b-form-input>

        <b-button size="md" variant="primary">
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
export default {
  data () {
    return {
      selected: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' }
      ]
    }
  },
  methods: {
    toCreate () {
      this.$router.push({name: 'CreateCompany'})
    }
  }
}
</script>
<style>
.input{
  width:40%;
  margin:10px auto
}
</style>

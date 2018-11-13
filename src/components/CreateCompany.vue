<template>
    <div>
        <h1> Jalaram rakhi</h1>

        <b-form-input v-model="text1"
                  type="text"
                  placeholder="Enter Company name" class="input"></b-form-input>
        <b-form-input v-model="text1"
                  type="text"
                  placeholder="Enter username" class="input"></b-form-input>
        <b-form-input v-model="text1"
                  type="password"
                  placeholder="Enter Password" class="input"></b-form-input>

        <b-button size="md" variant="primary">
                Create
            </b-button>
    </div>
</template>
<script>
export default {
  data () {
    return {

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

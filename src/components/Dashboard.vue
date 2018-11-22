<template>
    <div style="margin-top: 100px">
        <h1> Hello {{companyName.company_name}} </h1>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
  data () {
    return {
      companyName: JSON.parse(Vue.localStorage.get('company')),
      isLoggedIn: true
    }
  },
  methods: {
  },
  mounted () {
    console.log()
  }
}
</script>

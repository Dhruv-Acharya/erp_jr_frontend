<template>
    <div style="margin-top: 100px">
        <h1> Hello {{companyName}} </h1>
    </div>
</template>
<script>
export default {
  data () {
    return {
      companyName: 'Abc Inc.',
      isLoggedIn: true
    }
  },
  methods: {
  }
}
</script>

<template>
    <div style="margin-top:50px">
        <h1> Jalaram rakhi</h1>
        <h3 style="margin-top:20px"> Create Category</h3>
        <b-form >
                <b-form-input placeholder="Enter HSN code" class="input" v-model="HSNCode"></b-form-input>
                <b-form-input placeholder="Enter Category Name" class="input" v-model="categoryName"></b-form-input>
                <b-form-input placeholder="Enter Tax rate" class="input" v-model="taxRate"></b-form-input>
        </b-form>
        <div>
        <b-button id="addUnit" size="md" variant="primary" @click="createCategory()">
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
      HSNCode: null,
      categoryName: null,
      taxRate: null
    }
  },
  methods: {
    async createCategory () {
      var response = await userService.addCategory(this.HSNCode, this.categoryName, this.taxRate)
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

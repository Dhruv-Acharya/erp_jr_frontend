<template>
    <div>
        <h1> Jalaram rakhi</h1>
        <!--Enter name of the inventory item-->
        <b-input-group  class="input">
                <b-form-input id="inventoryName" v-model="itemName" placeholder="Enter Name"></b-form-input>
        </b-input-group>
        <!--Enter description of the inventory item-->
        <b-form-textarea id="inventoryDesc"
                     v-model="itemDescription"
                     placeholder="Enter Description"
                     :rows="3"
                     :max-rows="6"
                     class="input">
        </b-form-textarea>
        <!--Enter cost price of the inventory item-->
        <b-input-group prepend="Rs." append=".00" class="input">
                <b-form-input  placeholder="Enter Cost Price" v-model="costPrice" id="inventoryCostPrice" ></b-form-input>
         </b-input-group>
         <!--Enter selling  price of the inventory item-->
         <b-input-group prepend="Rs." append=".00" class="input">
                <b-form-input  placeholder="Enter Selling Price" v-model="sellPrice" id="inventorySellPrice"></b-form-input>
         </b-input-group>
         <!--Enter Quantity of the inventory item-->
         <b-input-group  class="input">
                <b-form-input  placeholder="Enter Quantity" id="inventoryQty" v-model="itemQty"></b-form-input>
               <b-form-select  slot="append" id="inventoryUnits" v-model="unitSelected" :options="optionsUnits" placeholder="Select Units" />
         </b-input-group>
         <!--Enter Category of the inventory item-->
         <b-form-select id="inventoryCategory" v-model="categorySelected" :options="optionsCategory" class="input" placeholder="Select Category" />
        <div>
        <b-button id="addInventory" size="md" variant="primary" @click="addInventory()">
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
      itemName: null,
      itemDescription: null,
      costPrice: null,
      sellPrice: null,
      category: null,
      itemQty: null,
      itemUnit: null,
      unitSelected: null,
      categorySelected: null,
      optionsCategory: [],
      optionsUnits: []
    }
  },
  methods: {
    async fetchUnits () {
      var response = await userService.getAllUnits()
      console.log(response.data)
      var unitsArray = [{value: null, text: 'Select Unit', disabled: true}]
      for (var item of response.data) {
        unitsArray.push({value: item, text: item.unit_type})
      }
      this.optionsUnits = unitsArray
    },
    async fetchCategories () {
      var response = await userService.getAllCategories()
      console.log(response.data)
      var categoryArray = [{value: null, text: 'Please select a category', disabled: true}]
      for (var item of response.data) {
        categoryArray.push({value: item, text: item.category_name})
      }
      this.optionsCategory = categoryArray
    },
    async addInventory () {
      var response = await userService.addAnInventoryItem(this.itemName, this.itemDescription, this.costPrice, this.sellPrice, this.itemQty, this.unitSelected, this.categorySelected)
      console.log(response.data)
    }
  },
  mounted () {
    this.fetchUnits()
    this.fetchCategories()
  }
}
</script>
<style>
.input {
  width: 40%;
  margin: 10px auto;
}
</style>

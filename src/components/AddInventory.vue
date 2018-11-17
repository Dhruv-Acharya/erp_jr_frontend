<template>
    <div>
        <h1> Jalaram rakhi</h1>
        <!--Enter name of the inventory item-->
        <b-input-group  class="input">
                <b-form-input id="inventoryName" placeholder="Enter Name"></b-form-input>
        </b-input-group>
        <!--Enter description of the inventory item-->
        <b-form-textarea id="inventoryDesc"
                     v-model="text"
                     placeholder="Enter Description"
                     :rows="3"
                     :max-rows="6"
                     class="input">
        </b-form-textarea>
        <!--Enter cost price of the inventory item-->
        <b-input-group prepend="Rs." append=".00" class="input">
                <b-form-input  placeholder="Enter Cost Price" id="inventoryCostPrice" ></b-form-input>
         </b-input-group>
         <!--Enter selling  price of the inventory item-->
         <b-input-group prepend="Rs." append=".00" class="input">
                <b-form-input  placeholder="Enter Selling Price" id="inventorySellPrice"></b-form-input>
         </b-input-group>
         <!--Enter Quantity of the inventory item-->
         <b-input-group  class="input">
                <b-form-input placeholder="Enter Quantity" id="inventoryQty"></b-form-input>
                <b-dropdown text="Unit" slot="append">
                    <b-dropdown-item>Pcs. </b-dropdown-item>
                    <b-dropdown-item>Dozen</b-dropdown-item>
                </b-dropdown>
         </b-input-group>
         <!--Enter Category of the inventory item-->
         <b-form-select id="inventoryCategory" v-model="selected" :options="options" class="mb-3 input" placeholder="Select Category" />
        <div>
        <b-button id="addInventory" size="md" variant="primary">
                Add
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
        { text: 'Select One', value: null },
        'Food.', 'Beverages'
      ]
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

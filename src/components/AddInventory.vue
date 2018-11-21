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
<<<<<<< HEAD
                <b-form-input placeholder="Enter Quantity" v-model="itemQty" id="inventoryQty"></b-form-input>
                <b-dropdown v-model="itemUnit" text="Unit" slot="append">
                    <b-dropdown-item>Pcs. </b-dropdown-item>
                    <b-dropdown-item>Dozen</b-dropdown-item>
                </b-dropdown>
=======
                <b-form-input  placeholder="Enter Quantity" id="inventoryQty"></b-form-input>
               <b-form-select  slot="append" id="inventoryUnits" v-model="selected" :options="optionsUnits" placeholder="Select Units" />
>>>>>>> 5e449f79b79d8e2293984115bbe48ee0e68eaf41
         </b-input-group>
         <!--Enter Category of the inventory item-->
         <b-form-select id="inventoryCategory" v-model="selected" :options="optionsCategory" class="input" placeholder="Select Category" />
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
      itemName: ' ',
      itemDescription: ' ',
      costPrice: ' ',
      sellPrice: ' ',
      category: ' ',
      itemQty: ' ',
      itemUnit: ' ',
      selected: null,
      optionsCategory: [
        { text: 'Select One', value: null },
        'Food.', 'Beverages'
      ],
      optionsUnits: [
        { text: 'Select One', value: null },
        'Pcs.', 'Dozen'
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


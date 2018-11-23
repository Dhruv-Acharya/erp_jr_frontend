<template>
    <div>
        <h1> Jalaram rakhi</h1>
    <!-- <barcode value="Deepak">
        Show this if the rendering fails.
    </barcode> -->
      <Dropdown
        :options="optionsItems"
        v-on:selected="validateSelection"
        v-on:filter="getDropdownValues"
        :disabled="false"
        placeholder="Select an option"
        class="input">
      </Dropdown>
      <b-form-input  placeholder="Enter Price" id="itemPrice" v-model="itemPrice" class="input"></b-form-input>
      <b-form-input  placeholder="Enter Quantity" id="itemQty" v-model="itemQty" class="input"></b-form-input>
      <b-button variant="primary" @click="generateBarcode()">Create</b-button>
      <div style="margin-top:100px">
        <barcode :value="barcodeId" v-if="showBarcode">
          Barcode Render Failed
        </barcode>
      </div>
    </div>
</template>
<script>
import userService from '../services/userService'
export default {
  data () {
    return {
      itemPrice: null,
      itemQty: null,
      optionsItems: [],
      selectedItem: null,
      barcodeId: null,
      showBarcode: false
    }
  },
  methods: {
    async fetchInventoryItems () {
      var response = await userService.getAllInventoryItems()
      console.log(response)
      var inventoryItemsArray = []
      for (var item of response.data) {
        inventoryItemsArray.push({id: item, name: item.item_name})
      }
      this.optionsItems = inventoryItemsArray
    },
    validateSelection (item) {
      this.selectedItem = item.id
    },
    async generateBarcode () {
      var response = await userService.addBarCodeItemDetails(this.selectedItem, this.itemPrice, this.itemQty)
      this.barcodeId = response.data.barcode_id
      this.showBarcode = true
      alert('Barcode successfully generated')
    }
  },
  mounted () {
    this.fetchInventoryItems()
  }
}
</script>
<style>
.input {
  width: 40%;
  margin: 10px auto;
}
</style>

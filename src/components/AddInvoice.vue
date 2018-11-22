<template>
    <div>
        <h1> Jalaram rakhi</h1>
        <h3>Invoice</h3>
        <div class="input">
            <b-container class="bv-example-row">
                <b-row>
                    <b-col>
                            <!--Enter name of the customer-->
                            <b-input-group>
                            <b-form-input id="CustomerName" placeholder="Enter Name"></b-form-input>
                          </b-input-group>
                          <br>
                          <!--Enter narration-->
                            <b-form-textarea id="narration"
                                        v-model="text"
                                        placeholder="Enter Narration"
                                        :rows="3"
                                        :max-rows="6">
                            </b-form-textarea>
                            <br>
                            <!--Enter address of the recipient-->
                            <b-form-textarea id="address"
                                        v-model="text"
                                        placeholder="Enter Address"
                                        :rows="3"
                                        :max-rows="6">
                            </b-form-textarea>
                    </b-col>
                    <b-col>
                            <!--Enter date of bill-->
                            <b-form-group id="dateofbill"
                                label="Date of Bill"
                                label-for="lrnumber"
                                >
                            </b-form-group>
                            <br>
                            <!--Enter L R number  -->
                            <b-input-group>
                            <b-form-input id="lrnumber" placeholder="Enter L R Number"></b-form-input>
                          </b-input-group>
                          <br>
                          <!--Enter transport-->
                            <b-input-group>
                                <b-form-input id="transport" placeholder="Enter Transport"></b-form-input>
                            </b-input-group>
                            <br>
                            <!--Choose  state-->
                            <b-input-group>
                               <b-form-select id="nameofstate" v-model="selected" :options="optionsState" placeholder="Select State" />
                            </b-input-group>
                            <br>
                            <!--Enter phone number-->
                            <b-input-group>
                                <b-form-input id="phonenumber" placeholder="Enter Phone Number"></b-form-input>
                            </b-input-group>
                    </b-col>
                </b-row>
            </b-container>
        </div>
                <b-row>
                    <b-button id="additem" size="md" style="margin:30px" variant="primary" @click="addNewRow">
                    Add Item
                </b-button>
                </b-row>
                <b-row v-for="(item,index) in billitems" :key="item.id">
                    <b-col>
                        Index {{index}}
                    </b-col>
                     <b-col>
                        <b-input-group>
                           <!-- <b-form-select id="inventoryitem" v-model="selected" :options="items"  placeholder="Select Item" /> -->
                           <Dropdown
                                v-model="selected" :options="options"
                                v-on:selected="validateSelection"
                                v-on:filter="getDropdownValues"
                                :disabled="false"
                                placeholder="Select an option">
                            </Dropdown>
                         </b-input-group>
                    </b-col>
                    <b-col>
                        <b-input-group>
                            <b-form-input id="itemprice" placeholder="Price" v-model="item.itemprice"></b-form-input>
                        </b-input-group>
                    </b-col>
                    <b-col>
                        <b-input-group>
                            <b-form-input id="itemqty" placeholder="Qty" v-model="item.itemqty"></b-form-input>
                        </b-input-group>
                    </b-col>
                    <b-col>
                        <b-input-group>
                            <b-form-input id="itemunit" placeholder="Unit" v-model="item.itemunit"></b-form-input>
                        </b-input-group>
                    </b-col>
                    <b-col>
                        <b-input-group>
                            <b-form-input id="itemsubtotal" placeholder="Subtotal" v-model="item.itemsubtotal"></b-form-input>
                        </b-input-group>
                    </b-col>
                    <b-col>
                        <span style="cursor:pointer" @click="deleteRow(index)">X</span>
                    </b-col>
                </b-row>
                <b-row class="input2">
                    <b-input-group>
                            <b-form-input id="grandtotal" placeholder="Total"></b-form-input>
                    </b-input-group>
                </b-row>
                <b-row  class="input2">
                    <b-col>
                        <b-button id="createinvoice"  size="md" variant="success">
                            Create
                        </b-button>
                    </b-col>
                    <b-col>
                        <b-button id="createinvoice" size="md" variant="danger">
                            Reset
                        </b-button>
                    </b-col>
                </b-row>
    </div>
</template>
<script>
export default {
  data () {
    return {
      selected: null,
      optionsState: [
        { text: 'Select One', value: null },
        'Gujarat', 'Maharashtra'
      ],
      options: [
        { name: 'item 1', id: 'item1' },
        { name: 'item 2', id: 'item2' },
        { name: 'item 3', id: 'item3' }
      ],
      billitems: [
        {
          inventoryitem: '',
          itemprice: '',
          itemqty: '',
          itemunit: '',
          itemsubtotal: ''
        }

      ]
    }
  },
  methods: {
    addNewRow () {
      this.billitems.push({
        inventoryitem: '',
        itemname: '',
        itemprice: '',
        itemqty: '',
        itemunit: '',
        itemsubtotal: ''
      })
    },
    deleteRow (index) {
      this.billitems.splice(index, 1)
    }
  }
}
</script>
<style>
.input {
  width: 50%;
  margin: 10px auto;
}
.input2 {
  width: 30%;
  margin: 10px auto;
}
</style>

<template>
  <b-container fluid style="margin-top:20px">
    <!-- User Interface controls -->
    <b-row>
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Filter" class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Type to Search" />
            <b-input-group-append>
              <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Sort" class="mb-0">
          <b-input-group>
            <b-form-select v-model="sortBy" :options="sortOptions">
              <option slot="first" :value="null">-- none --</option>
            </b-form-select>
            <b-form-select :disabled="!sortBy" v-model="sortDesc" slot="append">
              <option :value="false">Asc</option>
              <option :value="true">Desc</option>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Sort direction" class="mb-0">
          <b-input-group>
            <b-form-select v-model="sortDirection" slot="append">
              <option value="asc">Asc</option>
              <option value="desc">Desc</option>
              <option value="last">Last</option>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Per page" class="mb-0">
          <b-form-select :options="pageOptions" v-model="perPage" />
        </b-form-group>
      </b-col>
    </b-row>

    <!-- Main table element -->
    <b-table show-empty
             stacked="md"
             :items="items"
             :fields="fields"
             :current-page="currentPage"
             :per-page="perPage"
             :filter="filter"
             :sort-by.sync="sortBy"
             :sort-desc.sync="sortDesc"
             :sort-direction="sortDirection"
             @filtered="onFiltered"
             responsive
    >
      <template slot="Quantity" slot-scope="row">{{row.item.item_qty}} / {{row.item.unit.unit_type}}</template>
      <template slot="Category" slot-scope="row">{{row.item.category.category_name}}</template>
      <template slot="actions" slot-scope="row">
        <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
        <b-button size="sm" @click.stop="editRecord(row.item, row.index, $event.target)" class="mr-1">
          Edit
        </b-button>
        <b-button size="sm" @click.stop="deleteRecord(row.item.item_id)">
          Delete
        </b-button>
      </template>
    </b-table>
    <b-row>
      <b-col md="6" class="my-1">
        <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
      </b-col>
    </b-row>

    <!-- Info modal -->
    <b-modal id="modalInfo" @hide="resetModal" title="Edit Record" size="lg" centered hide-footer>
      <!-- <pre>{{ modalInfo.content }}</pre> -->
      <b-form-input v-model="modalInfo.content.item_name"
                  type="text"
                  placeholder="Enter Item Name" class="input modal-input"></b-form-input>
      <b-form-textarea v-model="modalInfo.content.item_description"
                  type="text"
                  placeholder="Enter Description" class="input modal-input"></b-form-textarea>
      <b-form-input v-model="modalInfo.content.item_cost_price"
                  type="text"
                  placeholder="Enter Cost Price" class="input modal-input"></b-form-input>
      <b-form-input v-model="modalInfo.content.item_selling_price"
                  type="text"
                  placeholder="Enter Selling Price" class="input modal-input"></b-form-input>
      <b-input-group  class="input modal-input">
                <b-form-input placeholder="Enter Quantity" v-model="modalInfo.content.item_qty" id="inventoryQty"></b-form-input>
                <b-form-select slot="append" v-model="modalInfo.content.unit" :options="unitsOptions">
                </b-form-select>
      </b-input-group>
      <b-form-select v-model="modalInfo.content.category" :options="categoryOptions" class="input modal-input">
                </b-form-select>
      <b-button @click="updateInventory(modalInfo.content)" class="input modal-input">Update</b-button>
    </b-modal>

  </b-container>
</template>

<script>
import userService from '../services/userService'
export default {
  data () {
    return {
      items: [],
      fields: [
        { key: 'item_name', label: 'Item name', sortable: true, sortDirection: 'desc' },
        { key: 'item_description', label: 'Description', 'class': 'text-center' },
        { key: 'item_cost_price', label: 'Cost Price', sortable: true },
        { key: 'item_selling_price', label: 'Selling Price', sortable: true },
        { key: 'Quantity', label: 'Quantity', sortable: true },
        { key: 'Category', label: 'Category', sortable: true },
        { key: 'actions', label: 'Actions' }
      ],
      currentPage: 1,
      perPage: 5,
      totalRows: 0,
      pageOptions: [ 5, 10, 15 ],
      sortBy: null,
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      modalInfo: { title: 'Edit Record', content: {} },
      categoryOptions: [],
      unitsOptions: []
    }
  },
  computed: {
    sortOptions () {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => { return { text: f.label, value: f.key } })
    }
  },
  methods: {
    editRecord (item, index, button) {
      this.modalInfo.content = item
      this.$root.$emit('bv::show::modal', 'modalInfo', button)
    },
    resetModal () {
      this.modalInfo.content = ''
    },
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    async deleteRecord (itemId) {
      var response = await userService.deleteInventoryItem(itemId)
      console.log(response)
      alert('Record deleted successfully')
    },
    async fetchUnits () {
      var response = await userService.getAllUnits()
      console.log(response.data)
      var unitsArray = [{value: null, text: 'Select Unit', disabled: true}]
      for (var item of response.data) {
        unitsArray.push({value: item, text: item.unit_type})
      }
      this.unitsOptions = unitsArray
    },
    async fetchCategories () {
      var response = await userService.getAllCategories()
      console.log(response.data)
      var categoryArray = [{value: null, text: 'Please select a category', disabled: true}]
      for (var item of response.data) {
        categoryArray.push({value: item, text: item.category_name})
      }
      this.categoryOptions = categoryArray
    },
    async fetchInventory () {
      var response = await userService.getAllInventoryItems()
      this.items = response.data
      this.totalRows = this.items.length
    },
    async updateInventory (item) {
      console.log(await userService.updateInventoryItem(item.item_id, item))
      alert('Inventory item updated successfully')
    },
    checkLogin () {
      if (!userService.checkIfLoggedIn()) {
        this.$router.push('Login')
      }
    }
  },
  mounted () {
    this.checkLogin()
    this.fetchUnits()
    this.fetchCategories()
    this.fetchInventory()
  }
}
</script>
<style>
  .modal-input{
    margin-top: 10px;
  }
</style>

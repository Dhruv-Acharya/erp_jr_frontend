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
      <template slot="Quantity" slot-scope="row">{{row.item.quantity}} / {{row.item.unit}}</template>
      <template slot="isActive" slot-scope="row">{{row.value?'Yes :)':'No :('}}</template>
      <template slot="actions" slot-scope="row">
        <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
        <b-button size="sm" @click.stop="editRecord(row.item, row.index, $event.target)" class="mr-1">
          Edit
        </b-button>
        <b-button size="sm" @click.stop="deleteRecord(row.item)">
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
    <b-modal id="modalInfo" @hide="resetModal" title="Edit Record" size="lg" centered>
      <!-- <pre>{{ modalInfo.content }}</pre> -->
      <b-form-input v-model="modalInfo.content.name"
                  type="text"
                  placeholder="Enter Item Name" class="input modal-input"></b-form-input>
      <b-form-textarea v-model="modalInfo.content.description"
                  type="text"
                  placeholder="Enter Description" class="input modal-input"></b-form-textarea>
      <b-form-input v-model="modalInfo.content.costPrice"
                  type="text"
                  placeholder="Enter Cost Price" class="input modal-input"></b-form-input>
      <b-form-input v-model="modalInfo.content.sellingPrice"
                  type="text"
                  placeholder="Enter Selling Price" class="input modal-input"></b-form-input>
      <b-input-group  class="input modal-input">
                <b-form-input placeholder="Enter Quantity" v-model="modalInfo.content.quantity" id="inventoryQty"></b-form-input>
                <b-form-select slot="append" v-model="selected" :options="options">
                </b-form-select>
      </b-input-group>
    </b-modal>

  </b-container>
</template>

<script>

const items = [
  {description: 40, name: 'Item 1', costPrice: 120, sellingPrice: 150, quantity: 12, unit: 'Pcs', category: 'Food'},
  {description: 40, name: 'Item 1', costPrice: 120, sellingPrice: 150, quantity: 12, unit: 'Dozen', category: 'Food'},
  {description: 40, name: 'Item 1', costPrice: 120, sellingPrice: 150, quantity: 12, unit: 'Dozen', category: 'Food'},
  {description: 40, name: 'Item 1', costPrice: 120, sellingPrice: 150, quantity: 12, unit: 'Dozen', category: 'Food'},
  {description: 40, name: 'Item 1', costPrice: 120, sellingPrice: 150, quantity: 12, unit: 'Dozen', category: 'Food'},
  {description: 40, name: 'Item 1', costPrice: 120, sellingPrice: 150, quantity: 12, unit: 'Dozen', category: 'Food'},
  {description: 40, name: 'Item 1', costPrice: 120, sellingPrice: 150, quantity: 12, unit: 'Dozen', category: 'Food'},
  {description: 40, name: 'Item 1', costPrice: 120, sellingPrice: 150, quantity: 12, unit: 'Dozen', category: 'Food'},
  {description: 40, name: 'Item 1', costPrice: 120, sellingPrice: 150, quantity: 12, unit: 'Dozen', category: 'Food'},
  {description: 40, name: 'Item 1', costPrice: 120, sellingPrice: 150, quantity: 12, unit: 'Dozen', category: 'Food'},
  {description: 40, name: 'Item 1', costPrice: 120, sellingPrice: 150, quantity: 12, unit: 'Dozen', category: 'Food'},
  {description: 40, name: 'Item 1', costPrice: 10, sellingPrice: 150, quantity: 12, unit: 'Dozen', category: 'Food'},
  {description: 40, name: 'Item 1', costPrice: 120, sellingPrice: 150, quantity: 12, unit: 'Dozen', category: 'Food'},
  {description: 40, name: 'Item 1', costPrice: 20, sellingPrice: 150, quantity: 12, unit: 'Dozen', category: 'Food'}
]
export default {
  data () {
    return {
      items: items,
      fields: [
        { key: 'name', label: 'Item name', sortable: true, sortDirection: 'desc' },
        { key: 'description', label: 'Description', 'class': 'text-center' },
        { key: 'costPrice', label: 'Cost Price', sortable: true },
        { key: 'sellingPrice', label: 'Selling Price', sortable: true },
        { key: 'Quantity', label: 'Quantity', sortable: true },
        { key: 'actions', label: 'Actions', sortable: true }
      ],
      currentPage: 1,
      perPage: 5,
      totalRows: items.length,
      pageOptions: [ 5, 10, 15 ],
      sortBy: null,
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      modalInfo: { title: 'Edit Record', content: {} },
      selected: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' }
      ]
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
    deleteRecord (item) {
      console.log(item)
    }
  },
  mounted () {
  }
}
</script>
<style>
  .modal-input{
    margin-top: 10px;
  }
</style>

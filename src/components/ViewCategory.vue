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
             @filtered="onFiltered"
             responsive
    >
      <template slot="actions" slot-scope="row">
        <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
        <b-button size="sm" @click.stop="editRecord(row.item, row.index, $event.target)" class="mr-1">
          Edit
        </b-button>
        <b-button size="sm" @click.stop="deleteRecord(row.item.hsn_code)">
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
    <b-modal id="modalInfo" @hide="resetModal" :title="modalInfo.title" centered hide-footer>
      <!-- <pre>{{ modalInfo.content }}</pre> -->
        <b-form-input v-model="modalInfo.content.hsn_code"
                  type="text"
                  placeholder="Enter HSN code" class="input modal-input"></b-form-input>
        <b-form-input v-model="modalInfo.content.category_name"
                  type="text"
                  placeholder="Enter Category Name" class="input modal-input"></b-form-input>
        <b-form-input v-model="modalInfo.content.tax_rate"
                  type="text"
                  placeholder="Enter tax rate" class="input modal-input"></b-form-input>
        <b-button variant="primary" @click="updateCategory(modalInfo.content)"> Update </b-button>
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
        { key: 'hsn_code', label: 'HSN Code', sortable: true },
        { key: 'category_name', label: 'category name', sortable: true },
        { key: 'tax_rate', label: 'tax rate', sortable: true },
        { key: 'actions', label: 'Actions', sortable: true }
      ],
      currentPage: 1,
      perPage: 5,
      totalRows: null,
      pageOptions: [ 5, 10, 15 ],
      filter: null,
      modalInfo: { title: 'Edit Record', content: {} }
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
    async deleteRecord (id) {
      console.log(id)
      var response = await userService.deleteCategory(id)
      console.log(response)
      alert('Category deleted successfully')
    },
    checkLogin () {
      if (!userService.checkIfLoggedIn()) {
        this.$router.push('Login')
      }
    },
    async getAllCategories () {
      var response = await userService.getAllCategories()
      console.log(response.data)
      this.items = response.data
      this.totalRows = response.data.length
    },
    async updateCategory (category) {
      var response = await userService.updateCategory(category.hsn_code, category.hsn_code, category.category_name, category.tax_rate)
      console.log(response.data)
      alert('Category updated successfully')
    }
  },
  mounted () {
    this.checkLogin()
    this.getAllCategories()
  }
}
</script>
<style>
.modal-input{
    margin-top: 10px;
  }
</style>

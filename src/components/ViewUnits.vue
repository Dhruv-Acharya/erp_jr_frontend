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
    <b-modal id="modalInfo" @hide="resetModal" title="Edit Record" size="lg" centered hide-footer>
      <!-- <pre>{{ modalInfo.content }}</pre> -->
      <b-form-input v-model="modalInfo.content.unit_type"
                  type="text"
                  placeholder="Enter Item Name" class="input modal-input"></b-form-input>
      <b-button style="margin-top:10px" @click="updateUnit(modalInfo.content)"> Update </b-button>
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
        { key: 'unit_type', label: 'Unit name', sortable: true },
        { key: 'actions', label: 'Actions', sortable: true }
      ],
      currentPage: 1,
      perPage: 5,
      totalRows: '',
      pageOptions: [ 5, 10, 15 ],
      filter: null,
      modalInfo: { title: 'Edit Unit', content: {} }
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
      this.modalInfo.title = ''
      this.modalInfo.content = ''
    },
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    deleteRecord (item) {
      console.log(item)
    },
    async fetchAllUnits () {
      var response = await userService.getAllUnits()
      console.log(response.data)
      this.totalRows = response.data.length
      this.items = response.data
    },
    async updateUnit (unit) {
      console.log(unit.unit_id)
      var response = await userService.updateUnit(unit.unit_id, unit.unit_type)
      console.log(response)
    },
    checkLogin () {
      if (!userService.checkIfLoggedIn()) {
        this.$router.push('Login')
      }
    }
  },
  mounted () {
    this.checkLogin()
    this.fetchAllUnits()
  }
}
</script>

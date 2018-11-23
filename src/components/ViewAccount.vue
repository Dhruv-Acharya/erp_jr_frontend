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
      <template slot="AccountType" slot-scope="row">{{row.item.accountType.account_type}}</template>
      <template slot="Company" slot-scope="row">{{row.item.company.company_name}}</template>
      <template slot="actions" slot-scope="row">
        <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
        <b-button size="sm" @click.stop="editRecord(row.item, row.index, $event.target)" class="mr-1">
          Edit
        </b-button>
        <b-button size="sm" @click.stop="deleteRecord(row.item.account_code)">
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
      <b-form-input v-model="modalInfo.content.account_name"
                  type="text"
                  placeholder="Enter Account Name" class="input modal-input"></b-form-input>
      <b-form-select v-model="modalInfo.content.accountType" :options="accountOptions" class="input modal-input">
                </b-form-select>
      <b-form-select v-model="modalInfo.content.company" :options="companyOptions" class="input modal-input">
                </b-form-select>
      <b-button style="margin-top:10px" @click="updateAccount(modalInfo.content)"> Update </b-button>
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
        { key: 'AccountType', label: 'Account Type', sortable: true },
        { key: 'Company', label: 'Company', sortable: true },
        { key: 'account_name', label: 'Account Name', sortable: true },
        { key: 'actions', label: 'Actions', sortable: true }
      ],
      currentPage: 1,
      perPage: 5,
      totalRows: null,
      pageOptions: [ 5, 10, 15 ],
      filter: null,
      modalInfo: { title: 'Edit Account', content: {} },
      accountOptions: [],
      companyOptions: []
    }
  },
  computed: {
    sortOptions () {
      return this.fields
      // Create an options list from our fields
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
      var response = await userService.deleteAccount(itemId)
      console.log(response)
      alert('Account successfully deleted')
    },
    async fetchAllAccounts () {
      var response = await userService.getAllAccounts()
      console.log(response.data)
      this.totalRows = response.data.length
      this.items = response.data
    },
    async updateAccount (account) {
      var response = await userService.updateAccount(account.account_code, account)
      console.log(response)
      alert('Account updated successfully')
    },
    async fetchAllAccountType () {
      var response = await userService.getAllAccountTypes()
      console.log(response.data)
      var accountTypeArray = [{value: null, text: 'Please select an account type', disabled: true}]
      for (var item of response.data) {
        accountTypeArray.push({value: item, text: item.account_type})
      }
      this.accountOptions = accountTypeArray
    },
    async getCompanies () {
      var response = await userService.fetchCompanies()
      var companyList = [{value: null, text: 'Please select a company', disabled: true}]
      for (var item of response.data) {
        companyList.push({value: item, text: item.company_name})
      }
      this.companyOptions = companyList
    },
    checkLogin () {
      if (!userService.checkIfLoggedIn()) {
        this.$router.push('Login')
      }
    }
  },
  mounted () {
    this.checkLogin()
    this.fetchAllAccounts()
    this.fetchAllAccountType()
    this.getCompanies()
  }
}
</script>
<style>
  .modal-input{
    margin-top: 10px;
  }
</style>

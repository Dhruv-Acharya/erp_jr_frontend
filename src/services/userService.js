import Api from './api'
import Vue from 'vue'

export default {
  fetchCompanies () {
    return Api().get(`/company`)
  },
  fetchCompany (id) {
    return Api().get(`/company/${id}`)
  },
  addCompany (companyName, userName, userPassword) {
    return Api().post(`/company`, {company_name: companyName, user_name: userName, user_password: userPassword})
  },
  userLogin (userName, userPassword, userCompany) {
    return Api().post(`/login`, {user_name: userName, user_password: userPassword, company: userCompany})
  },
  updateCompany (companyName, id) {
    return Api().put(`/company/${id}`, {company_name: companyName}, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  getAllUnits () {
    return Api().get(`/unit`, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  insertUnit (unitType) {
    return Api().post(`/unit`, {unit_type: unitType}, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  getSingleUnit (id) {
    return Api().get(`/unit/${id}`, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  userLogout () {
    return Api().get(`/logout`, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  updateUnit (id, unitType) {
    return Api().put(`/unit/${id}`, {unit_type: unitType}, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  deleteUnit (id) {
    return Api().delete(`/unit/${id}`, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  getSingleUser (id) {
    return Api().delete(`/user/${id}`, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  addUser (userPassword, userConfirmPassword, company, userName) {
    return Api().post(`/user`, {user_name: userName, company: company, user_password: userPassword, user_confirm_password: userConfirmPassword}, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  updateUser (id, userPassword, userConfirmPassword, company, userName) {
    return Api().put(`/user/${id}`, {user_name: userName, company: company, user_password: userPassword, user_confirm_password: userConfirmPassword}, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  addCategory (hsnCode, categoryName, taxRate) {
    return Api().post(`/category`, {hsn_code: hsnCode, category_name: categoryName, tax_rate: taxRate}, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  getAllCategories () {
    return Api().get(`/category`, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  getSingleCategory (id) {
    return Api().get(`/category/${id}`, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  updateCategory (id, hsnCode, categoryName, taxRate) {
    return Api().put(`/category/${id}`, {hsn_code: hsnCode, category_name: categoryName, tax_rate: taxRate}, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  deleteCategory (id) {
    return Api().delete(`/category/${id}`, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  addAccountType (accountType) {
    return Api().post(`/accountType`, {account_type: accountType}, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  getAllAccountTypes () {
    return Api().get(`/accountType`, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  getSingleAccountType (id) {
    return Api().get(`/accountType/${id}`, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  updateAccountType (id, accountType) {
    return Api().put(`/accountType/${id}`, {account_type: accountType}, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  deleteAccountType (id) {
    return Api().delete(`/accountType/${id}`, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  addAccount (accountType, company, accountName) {
    return Api().post(`/account`, {accountType: accountType, company: company, account_name: accountName}, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  getAllAccounts () {
    return Api().get(`/account`, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  getSingleAccount (id) {
    return Api().get(`/account/${id}`, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  updateAccount (id, account) {
    return Api().put(`/account/${id}`, account, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  deleteAccount (id) {
    return Api().delete(`/account/${id}`, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  getAllStates () {
    return Api().get(`/state`, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  addState (stateName) {
    return Api().post(`/state`, {state_name: stateName}, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  updateState (id, stateName) {
    return Api().put(`/state/${id}`, {state_name: stateName}, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  deleteState (id) {
    return Api().delete(`/state/${id}`, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  addAnAddress (addressLine, state) {
    return Api().post(`/address`, {address_line: addressLine, state: state}, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  getAllAddress () {
    return Api().get(`/address`, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  getOneAddress (id) {
    return Api().get(`/address/${id}`, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  updateAddress (id, addressLine, state) {
    return Api().put(`/address/${id}`, {address_line: addressLine, state: state}, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  deleteAddress (id) {
    return Api().delete(`/address/${id}`, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  addAnInventoryItem (itemName, itemDescription, itemCostPrice, itemSellingPrice, itemQty, unit, category) {
    return Api().post(`/inventoryItem`, {item_name: itemName, item_description: itemDescription, item_cost_price: itemCostPrice, item_selling_price: itemSellingPrice, item_qty: itemQty, unit: unit, category: category}, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  getAllInventoryItems () {
    return Api().get(`/inventoryItem`, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  getSingleInventoryItem (id) {
    return Api().get(`/inventoryItem/${id}`, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  updateInventoryItem (id, item) {
    return Api().put(`/inventoryItem/${id}`, item, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  deleteInventoryItem (id) {
    return Api().delete(`/inventoryItem/${id}`, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  getBarCodeItemDetails () {
    return Api().get(`/barCodeItemDetails`, {headers: {'Authorization': Vue.localStorage.get('bearer')}})
  },
  checkIfLoggedIn () {
    if (Vue.localStorage.get('bearer')) {
      return true
    } else {
      return false
    }
  }
}

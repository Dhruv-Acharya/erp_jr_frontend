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
    return Api().post(`/company`, {company_name: companyName, user_name: userName, user_password: userPassword}, {headers: {'Authorization': Vue.localstorage.get('bearer')}})
  },
  userLogin (userName, userPassword, userCompany) {
    return Api().post(`/login`, {user_name: userName, user_password: userPassword, company: userCompany})
  },
  updateCompany (companyName, id) {
    return Api().put(`/company/${id}`, {company_name: companyName}, {headers: {'Authorization': Vue.localstorage.get('bearer')}})
  },
  getAllUnits () {
    return Api().get(`/unit`, {headers: {'Authorization': Vue.localstorage.get('bearer')}})
  },
  insertUnit (unitType) {
    return Api().post(`/unit`, {unit_type: unitType}, {headers: {'Authorization': Vue.localstorage.get('bearer')}})
  },
  getSingleUnit (id) {
    return Api().get(`/unit/${id}`, {headers: {'Authorization': Vue.localstorage.get('bearer')}})
  },
  userLogout () {
    return Api().get(`/logout`, {headers: {'Authorization': Vue.localstorage.get('bearer')}})
  },
  updateUnit (id, unitType) {
    return Api().put(`/unit/${id}`, {unit_type: unitType}, {headers: {'Authorization': Vue.localstorage.get('bearer')}})
  },
  deleteUnit (id) {
    return Api().delete(`/unit/${id}`, {headers: {'Authorization': Vue.localstorage.get('bearer')}})
  },
  getSingleUser (id) {
    return Api().delete(`/user/${id}`, {headers: {'Authorization': Vue.localstorage.get('bearer')}})
  },
  addUser (userPassword, userConfirmPassword, company, userName) {
    return Api().post(`/user`, {user_name: userName, company: company, user_password: userPassword, user_confirm_password: userConfirmPassword}, {headers: {'Authorization': Vue.localstorage.get('bearer')}})
  },
  updateUser (id, userPassword, userConfirmPassword, company, userName) {
    return Api().put(`/user/${id}`, {user_name: userName, company: company, user_password: userPassword, user_confirm_password: userConfirmPassword}, {headers: {'Authorization': Vue.localstorage.get('bearer')}})
  },
  addCategory (hsnCode, categoryName, taxRate) {
    return Api().post(`/category`, {hsn_code: hsnCode, category_name: categoryName, tax_rate: taxRate}, {headers: {'Authorization': Vue.localstorage.get('bearer')}})
  },
  getAllCategories () {
    return Api().get(`/category`, {headers: {'Authorization': Vue.localstorage.get('bearer')}})
  },
  getSingleCategory (id) {
    return Api().get(`/category/${id}`, {headers: {'Authorization': Vue.localstorage.get('bearer')}})
  },
  updateCategory (id, hsnCode, categoryName, taxRate) {
    return Api().put(`/category/${id}`, {hsn_code: hsnCode, category_name: categoryName, tax_rate: taxRate}, {headers: {'Authorization': Vue.localstorage.get('bearer')}})
  },
  deleteCategory (id) {
    return Api().delete(`/category/${id}`, {headers: {'Authorization': Vue.localstorage.get('bearer')}})
  },
  addAccountType (accountType) {
    return Api().post(`/accountType`, {account_type: accountType}, {headers: {'Authorization': Vue.localstorage.get('bearer')}})
  },
  getAllAccountTypes () {
    return Api().get(`/accountType`, {headers: {'Authorization': Vue.localstorage.get('bearer')}})
  },
  getSingleAccountType (id) {
    return Api().get(`/accountType/${id}`, {headers: {'Authorization': Vue.localstorage.get('bearer')}})
  },
  updateAccountType (id, accountType) {
    return Api().put(`/accountType/${id}`, {account_type: accountType}, {headers: {'Authorization': Vue.localstorage.get('bearer')}})
  },
  deleteAccountType (id) {
    return Api().delete(`/accountType/${id}`, {headers: {'Authorization': Vue.localstorage.get('bearer')}})
  },
  addAccount (accountType, company, accountName) {
    return Api().post(`/accountType`, {account_type: accountType, company: company, account_name: accountName}, {headers: {'Authorization': Vue.localstorage.get('bearer')}})
  },
  getAllAccounts () {
    return Api().get(`/account`, {headers: {'Authorization': Vue.localstorage.get('bearer')}})
  },
  getSingleAccount (id) {
    return Api().get(`/account/${id}`, {headers: {'Authorization': Vue.localstorage.get('bearer')}})
  },
  updateAccount (id, accountType, company, accountName) {
    return Api().put(`/account/${id}`, {account_type: accountType, company: company, account_name: accountName})
  },
  deleteAccount (id) {
    return Api().delete(`/account/${id}`, {headers: {'Authorization': Vue.localstorage.get('bearer')}})
  }
}

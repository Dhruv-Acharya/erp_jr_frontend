import Api from './api'

export default {
  fetchCompanies () {
    return Api().get(`/company`)
  },
  fetchCompany (id) {
    return Api().get(`/company/${id}`)
  },
  addCompany (companyName, userName, userPassword) {
    return Api().post(`/company`, {company_name : companyName, user_name: userName, user_password: userPassword})
  },
  userLogin (userName, userPassword, userCompany) {
    return Api().post(`/login`, {user_name: userName, user_password: userPassword, company: userCompany})
  },
  updateCompany (companyName, id) {
    return Api().put(`/company/${id}`, {company_name: companyName})
  },
  getAllUnits () {
    return Api().get(`/unit`)
  },
  insertUnit (unitType) {
    return Api().post(`/unit`, {unit_type: unitType})
  },
  getSingleUnit (id) {
    return Api().get(`/unit/${id}`)
  },
  userLogout () {
    return Api().get(`/logout`)
  },
  updateUnit (unitType) {
    return Api().put(`/unit/${id}`, {unit_type: unitType})
  },
  deleteUnit (id) {
    return Api().delete(`/unit/${id}`)
  },
  getSingleUser (id) {
    return Api().delete(`/user/${id}`)
  }, 
  addUser (userPassword, userConfirmPassword, company, userName) {
    return Api().post(`/user`, {user_name: userName, company: company, user_password: userPassword, user_confirm_password: userConfirmPassword})
  },
  updateUser (id, userPassword, userConfirmPassword, company, userName) {
    return Api().put(`/user/${id}`, {user_name: userName, company: company, user_password: userPassword, user_confirm_password: userConfirmPassword})
  }, 
  addCategory (hsnCode, categoryName, taxRate) {
    return Api().post(`/category`, {hsn_code: hsnCode, category_name: categoryName, tax_rate: taxRate})
  },
  getAllCategories () {
    return Api().get(`/category`)
  }, 
  getSingleCategory (id) {
    return Api().get(`/category/${id}`)
  },
  updateCategory (id, hsnCode, categoryName, taxRate) {
    return Api().put(`/category/${id}`, {hsn_code: hsnCode, category_name: categoryName, tax_rate: taxRate})
  },
  deleteCategory (id) {
    return Api().delete(`/category/${id}`)
  },
  addAccountType (accountType) {
    return Api().post(`/accountType`, {account_type: accountType})
  },
  getAllAccountTypes () {
    return Api().get(`/accountType`)
  },
  getSingleAccountType (id) {
    return Api().get(`/accountType/${id}`)
  },
  updateAccountType (id) {
    return Api().put(`/accountType/${id}`, {account_type: accountType})
  },
  deleteAccountType (id) {
    return Api().delete(`/accountType/${id}`)
  },
  addAccount (accountType, company, accountName) {
    return Api().post(`/accountType`, {account_type: accountType, company: company, account_name: accountName})
  },
  getAllAccounts() {
    return Api().get(`/account`)
  },
  getSingleAccount(id) {
    return Api().get(`/account/${id}`)
  },
  updateAccount (id, accountType, company, accountName) {
    return Api().put(`/account/${id}`, {account_type: accountType, company: company, account_name: accountName})
  },
  deleteAccount (id) {
    return Api().delete(`/account/${id}`)
  },
}

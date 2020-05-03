'use strict'

class User {
  get rules () {
    return {
      name: 'required',
      userName: 'required',
      email: 'required',
      password: 'required',
      type_user_id: 'required',
    }
  }

  get messages() {
    return {
      'name.required': 'Fill name field',
      'userName.required': 'Fill userName field',
      'email.required': 'Fill email field',
      'password.required': 'Fill password field',
      'type_user_id.required': 'Fill type_user_id field',
    }
  }
}

module.exports = User

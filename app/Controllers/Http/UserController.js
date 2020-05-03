'use strict'

class UserController {
    async index() {
        return {result: 'All users'}
    }

    async show(id) {
        return {result: 'Got user ' + id.toString()}
    }

    async store(user) {
        return {result: 'user saved ' + user.toString()}
    }

    async update(id) {
        return {result: 'Updating user ' + id}
    }

    async destroy() {
        return {result: 'Got 1 specific user'}
    }
}

module.exports = UserController

'use strict'

/*
|--------------------------------------------------------------------------
| ClientSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class ClientSeeder {
  async run () {
    await Database.table('clients').insert({
      user_id: 2, address: 'casa', age: 20, weight: 75
    })
  }
}

module.exports = ClientSeeder

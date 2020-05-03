'use strict'

/*
|--------------------------------------------------------------------------
| TrainingSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class TrainingSeeder {
  async run () {
    await Database.table('trainings').insert({
      name: 'Monday training', observation: '', client_id: 1
    })
  }
}

module.exports = TrainingSeeder

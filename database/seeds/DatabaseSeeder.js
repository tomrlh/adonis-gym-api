'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const TypeUserSeeder = use('./TypeUserSeeder')
const UserSeeder = use('./UserSeeder')
const ClientSeeder = use('./ClientSeeder')
const ExerciseSeeder = use('./ExerciseSeeder')
const TrainingSeeder = use('./TrainingSeeder')
const ExerciseTrainingSeeder = use('./ExerciseTrainingSeeder')

class DatabaseSeeder {
  async run () {
    await TypeUserSeeder.run()
    await UserSeeder.run()
    await ClientSeeder.run()
    await ExerciseSeeder.run()
    await TrainingSeeder.run()
    await ExerciseTrainingSeeder.run()
  }
}

module.exports = DatabaseSeeder

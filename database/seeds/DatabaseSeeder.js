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
const UserTableSeeder = use('./UserTableSeeder')
const ClientSeeder = use('./ClientSeeder')
const ExerciseSeeder = use('./ExerciseSeeder')
const TrainingSeeder = use('./TrainingSeeder')
const ExerciseTrainingSeeder = use('./ExerciseTrainingSeeder')

class DatabaseSeeder {
  async run () {
    await new TypeUserSeeder().run()
    await new UserTableSeeder().run()
    await new ClientSeeder().run()
    await new ExerciseSeeder().run()
    await new TrainingSeeder().run()
    await new ExerciseTrainingSeeder().run()
  }
}

//adonis seed --files="TypeUserSeeder.js, UserTableSeeder.js, ClientSeeder.js, ExerciseSeeder.js, TrainingSeeder.js, ExerciseTrainingSeeder.js"

module.exports = DatabaseSeeder

'use strict'

/*
|--------------------------------------------------------------------------
| ExerciseTrainingSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class ExerciseTrainingSeeder {
  static async run () {
    await Database.table('exercise_training').insert({training_id: 1, exercise_id: 1}),
    await Database.table('exercise_training').insert({training_id: 1, exercise_id: 2})
  }
}

module.exports = ExerciseTrainingSeeder

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExerciseTrainingSchema extends Schema {
  up () {
    this.create('exercise_trainings', (table) => {
      table.increments()
      table.integer('exercise_id').unsigned().references('id').inTable('exercises').notNullable()
      table.integer('training_id').unsigned().references('id').inTable('trainings').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('exercise_trainings')
  }
}

module.exports = ExerciseTrainingSchema

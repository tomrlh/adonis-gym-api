'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExerciseTrainingSchema extends Schema {
  up () {
    this.create('exercise_training', (table) => {
      table.increments()
      table.integer('training_id').unsigned().references('id').inTable('trainings').onDelete('CASCADE').notNullable()
      table.integer('exercise_id').unsigned().references('id').inTable('exercises').onDelete('CASCADE').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('exercise_training')
  }
}

module.exports = ExerciseTrainingSchema

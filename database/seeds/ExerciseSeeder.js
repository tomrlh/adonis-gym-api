'use strict'

/*
|--------------------------------------------------------------------------
| ExerciseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class ExerciseSeeder {
  static async run () {
    await Database.table('exercises').insert({
      name: 'Biceps', observation: '', series: 4, waiting_time: 30, url_image: 'https://www.wikihow.com/images/thumb/0/00/Get-Bigger-Biceps-Step-1-Version-4.jpg/aid828149-v4-728px-Get-Bigger-Biceps-Step-1-Version-4.jpg.webp'
    }),
    await Database.table('exercises').insert({
      name: 'Leg 45', observation: '', series: 4, waiting_time: 45, url_image: 'https://i.pinimg.com/736x/b8/5f/fb/b85ffb42dc680c8a84a6514748cb6135.jpg'
    })
  }
}

module.exports = ExerciseSeeder

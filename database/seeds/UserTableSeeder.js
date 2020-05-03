'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')
const Hash = use('Hash')

class UserTableSeeder {
  async run () {
    let adminPass = await Hash.make('admin')
    let colaboradorPass = await Hash.make('colaborador')
    let clientePass = await Hash.make('cliente')
    await Database.table('users').insert({
      name: 'admin user default', userName: 'admin', password: adminPass, email: 'admin@email.com', type_user_id: 1
    }),
    await Database.table('users').insert({
      name: 'colaborador user default', userName: 'colaborador', password: colaboradorPass, email: 'colaborador@email.com', type_user_id: 2
    }),
    await Database.table('users').insert({
      name: 'cliente user default', userName: 'cliente', password: clientePass, email: 'cliente@email.com', type_user_id: 3
    })
  }
}

module.exports = UserTableSeeder

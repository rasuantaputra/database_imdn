'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JenisprodukKelistrikanSchema extends Schema {
  up () {
    this.create('jenisproduk_kelistrikans', (table) => {
      table.increments()
      table.string('jenis_produk')
      table.timestamps()
    })
  }

  down () {
    this.drop('jenisproduk_kelistrikans')
  }
}

module.exports = JenisprodukKelistrikanSchema

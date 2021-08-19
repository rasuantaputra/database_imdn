'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JenisprodukKeretaApiSchema extends Schema {
  up () {
    this.create('jenisproduk_kereta_apis', (table) => {
      table.increments()
      table.string('jenis_produk')
      table.timestamps()
    })
  }

  down () {
    this.drop('jenisproduk_kereta_apis')
  }
}

module.exports = JenisprodukKeretaApiSchema

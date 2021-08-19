'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JenisprodukKblSchema extends Schema {
  up () {
    this.create('jenisproduk_kbls', (table) => {
      table.increments()
      table.string('jenis_produk')
      table.timestamps()
    })
  }

  down () {
    this.drop('jenisproduk_kbls')
  }
}

module.exports = JenisprodukKblSchema

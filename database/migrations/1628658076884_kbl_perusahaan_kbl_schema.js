'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PerusahaanKblSchema extends Schema {
  up () {
    this.create('perusahaan_kbls', (table) => {
      table.increments()
      table.string('nama_perusahaan')
      table.text('alamat')
      table.timestamps()
    })
  }

  down () {
    this.drop('perusahaan_kbls')
  }
}

module.exports = PerusahaanKblSchema

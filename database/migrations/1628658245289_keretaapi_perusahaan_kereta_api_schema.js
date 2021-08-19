'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PerusahaanKeretaApiSchema extends Schema {
  up () {
    this.create('perusahaan_kereta_apis', (table) => {
      table.increments()
      table.string('nama_perusahaan')
      table.text('alamat')
      table.timestamps()
    })
  }

  down () {
    this.drop('perusahaan_kereta_apis')
  }
}

module.exports = PerusahaanKeretaApiSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PerusahaanKelistrikanSchema extends Schema {
  up () {
    this.create('perusahaan_kelistrikans', (table) => {
      table.increments()
      table.string('nama_perusahaan')
      table.text('alamat')
      table.timestamps()
    })
  }

  down () {
    this.drop('perusahaan_kelistrikans')
  }
}

module.exports = PerusahaanKelistrikanSchema

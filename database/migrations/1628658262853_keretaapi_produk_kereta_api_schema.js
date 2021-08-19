'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdukKeretaApiSchema extends Schema {
  up () {
    this.create('produk_kereta_apis', (table) => {
      table.increments()
      table
        .integer('jenisProduk_kereta_api_id')
        .unsigned()
        .references('id')
        .inTable('jenisproduk_kereta_apis')
        .onUpdate('NO ACTION')
        .onDelete('SET NULL')
      table
        .integer('perusahaan_kereta_api_id')
        .unsigned()
        .references('id')
        .inTable('perusahaan_kereta_apis')
        .onUpdate('NO ACTION')
        .onDelete('SET NULL')
      table.text('merekTipe')
      table.text('spesifikai')
      table.float('tkdn')

      table.text('no_sertifikat')
      table.text('tanggal')
      table.text('hasil_produksi')
      table.text('kode_hs')
      table.text('no_referensi')
      table.text('verivikator')
      table.timestamps()
    })
  }

  down () {
    this.drop('produk_kereta_apis')
  }
}

module.exports = ProdukKeretaApiSchema

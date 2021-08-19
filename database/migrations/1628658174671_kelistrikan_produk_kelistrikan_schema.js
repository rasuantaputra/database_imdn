'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdukKelistrikanSchema extends Schema {
  up() {
    this.create('produk_kelistrikans', (table) => {
      table.increments()
      table
        .integer('jenisProduk_kelistrikan_id')
        .unsigned()
        .references('id')
        .inTable('jenisproduk_kelistrikans')
        .onUpdate('NO ACTION')
        .onDelete('SET NULL')
      table
        .integer('perusahaan_kelistrikan_id')
        .unsigned()
        .references('id')
        .inTable('perusahaan_kelistrikans')
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

  down() {
    this.drop('produk_kelistrikans')
  }
}

module.exports = ProdukKelistrikanSchema

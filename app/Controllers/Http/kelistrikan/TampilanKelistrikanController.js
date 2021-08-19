'use strict'

const Produk = use('App/Models/kelistrikan/ProdukKelistrikan.js')

class TampilanController {

    async index({ request, response, view }) {
        // innerJoin('nama_tabel', 'nama_kolom', 'tabel_ini.dihubungin_dengan_tabel_ini(FK)')
        const produks = await Produk.query()
            .select('produk_kelistrikans.*','perusahaan_kelistrikans.nama_perusahaan','jenisproduk_kelistrikans.jenis_produk')
            .select('produk_kelistrikans.*','perusahaan_kelistrikans.alamat','jenisproduk_kelistrikans.jenis_produk')
            .innerJoin('jenisproduk_kelistrikans', 'jenisproduk_kelistrikans.id', 'produk_kelistrikans.jenisProduk_kelistrikan_id')
            .innerJoin('perusahaan_kelistrikans', 'perusahaan_kelistrikans.id', 'produk_kelistrikans.perusahaan_kelistrikan_id')
            .fetch()


        return view.render('kelistrikan.tampilan.index', { produks: produks.rows })
    }
}

module.exports = TampilanController

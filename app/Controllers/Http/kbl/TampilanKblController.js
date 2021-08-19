'use strict'

const Produk = use('App/Models/kbl/ProdukKbl.js')

class TampilanKblController {

    async index({ request, response, view }) {
        // innerJoin('nama_tabel', 'nama_kolom', 'tabel_ini.dihubungin_dengan_tabel_ini(FK)')
        const produks = await Produk.query()
            .select('produk_kbls.*','perusahaan_kbls.nama_perusahaan','jenisproduk_kbls.jenis_produk')
            .select('produk_kbls.*','perusahaan_kbls.alamat','jenisproduk_kbls.jenis_produk')
            .innerJoin('jenisproduk_kbls', 'jenisproduk_kbls.id', 'produk_kbls.jenisProduk_kbl_id')
            .innerJoin('perusahaan_kbls', 'perusahaan_kbls.id', 'produk_kbls.perusahaan_kbl_id')
            .fetch()


        return view.render('kbl.tampilan.index', { produks: produks.rows })
    }
}

module.exports = TampilanKblController

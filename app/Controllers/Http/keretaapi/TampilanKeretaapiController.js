'use strict'

const Perusahaan = use('App/Models/keretaapi/PerusahaanKeretaapi.js')
const Jenisproduk = use('App/Models/keretaapi/JenisprodukKeretaapi.js')
const Produk = use('App/Models/keretaapi/ProdukKeretaapi.js')

class TampilanKeretaapiController {

    async index({ request, response, view }) {
        // innerJoin('nama_tabel', 'nama_kolom', 'tabel_ini.dihubungin_dengan_tabel_ini(FK)')
        const produks = await Produk.query()
            .select('produk_kereta_apis.*','perusahaan_kereta_apis.nama_perusahaan','jenisproduk_kereta_apis.jenis_produk')
            .select('produk_kereta_apis.*','perusahaan_kereta_apis.alamat','jenisproduk_kereta_apis.jenis_produk')
            .innerJoin('jenisproduk_kereta_apis', 'jenisproduk_kereta_apis.id', 'produk_kereta_apis.jenisProduk_kereta_api_id')
            .innerJoin('perusahaan_kereta_apis', 'perusahaan_kereta_apis.id', 'produk_kereta_apis.perusahaan_kereta_api_id')
            .fetch()


        return view.render('keretaapi.tampilan.index', { produks: produks.rows })
    }
}

module.exports = TampilanKeretaapiController

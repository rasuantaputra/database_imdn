'use strict'

const Perusahaan = use('App/Models/keretaapi/PerusahaanKeretaapi.js')
const Jenisproduk = use('App/Models/keretaapi/JenisprodukKeretaapi.js')
const Produk = use('App/Models/keretaapi/ProdukKeretaapi.js')

class ProdukKeretaapiController {

    async index({ request, response, view }) {
        // innerJoin('nama_tabel', 'nama_kolom', 'tabel_ini.dihubungin_dengan_tabel_ini(FK)')
        const produks = await Produk.query()
            .select('produk_kereta_apis.*','perusahaan_kereta_apis.nama_perusahaan','jenisproduk_kereta_apis.jenis_produk')
            .innerJoin('jenisproduk_kereta_apis', 'jenisproduk_kereta_apis.id', 'produk_kereta_apis.jenisProduk_kereta_api_id')
            .innerJoin('perusahaan_kereta_apis', 'perusahaan_kereta_apis.id', 'produk_kereta_apis.perusahaan_kereta_api_id')
            .fetch()


        return view.render('keretaapi.produk.index', { produks: produks.rows })
    }

    async create({ request, response, view }) {
        const jenisproduks = await Jenisproduk.all()
        const perusahaans = await Perusahaan.all()

        return view.render('keretaapi.produk.create', {
            jenisproduks: jenisproduks.rows,
            perusahaans: perusahaans.rows
        })
    }

    async store({ request, response, view, session }) {
        const produk = new Produk()

        produk.perusahaan_kereta_api_id = request.input('perusahaan_kereta_api_id')
        produk.jenisProduk_kereta_api_id = request.input('jenisProduk_kereta_api_id')
        produk.merekTipe = request.input('merekTipe')
        produk.spesifikai = request.input('spesifikai')
        produk.tkdn = request.input('tkdn')

        produk.no_sertifikat = request.input('no_sertifikat')
        produk.tanggal = request.input('tanggal')
        produk.hasil_produksi = request.input('hasil_produksi')
        produk.kode_hs = request.input('kode_hs')
        produk.no_referensi = request.input('no_referensi')
        produk.verivikator = request.input('verivikator')
        await produk.save()

        session.flash({ notification: 'Data Berhasil Disimpan!' })
        return response.route('keretaapi.produk.index')

    }

    async edit({ request, response, view, params }) {
        const id = params.id
        const produk = await Produk.find(id)
        const jenisproduks = await Jenisproduk.all()
        const perusahaans = await Perusahaan.all()

        // return id

        return view.render('keretaapi.produk.edit',
            {
                produk: produk,
                jenisproduks: jenisproduks.rows,
                perusahaans: perusahaans.rows
            })
    }

    async update({ request, response, view, params, session }) {
        const id = params.id
        const produk = await Produk.find(id)
        produk.perusahaan_kereta_api_id = request.input('perusahaan_kereta_api_id')
        produk.jenisProduk_kereta_api_id = request.input('jenisProduk_kereta_api_id')
        produk.merekTipe = request.input('merekTipe')
        produk.spesifikai = request.input('spesifikai')
        produk.tkdn = request.input('tkdn')

        produk.no_sertifikat = request.input('no_sertifikat')
        produk.tanggal = request.input('tanggal')
        produk.hasil_produksi = request.input('hasil_produksi')
        produk.kode_hs = request.input('kode_hs')
        produk.no_referensi = request.input('no_referensi')
        produk.verivikator = request.input('verivikator')
        await produk.save()

        session.flash({ notification: 'Data Berhasil Diupdate!' })
        return response.route('keretaapi.produk.index')
    }

    async delete({ request, response, view, params, session }) {
        const id = params.id
        const produk = await Produk.find(id)

        await produk.delete()

        session.flash({ notification: 'Data Berhasil Dihapus!' })
        return response.route('keretaapi.produk.index')
    }

    async show({ request, response, view, params }) {
        const id = params.id
        const produk = await Produk.find(id)
        const jenisproduks = await Jenisproduk.all()
        const perusahaans = await Perusahaan.find(produk.perusahaan_kereta_api_id)
        // const perusahaans = await Perusahaan.all()
        // return perusahaans
 

        return view.render('keretaapi.show.index',
            {
                produk: produk,
                jenisproduks: jenisproduks,
                perusahaans: perusahaans
            })
    }

    
}

module.exports = ProdukKeretaapiController

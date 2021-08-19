'use strict'

const Perusahaan = use('App/Models/kbl/PerusahaanKbl.js')
const Jenisproduk = use('App/Models/kbl/JenisprodukKbl.js')
const Produk = use('App/Models/kbl/ProdukKbl.js')

class ProdukKblController {

    async index({ request, response, view }) {
        // innerJoin('nama_tabel', 'nama_kolom', 'tabel_ini.dihubungin_dengan_tabel_ini(FK)')
        const produks = await Produk.query()
            .select('produk_kbls.*','perusahaan_kbls.nama_perusahaan','jenisproduk_kbls.jenis_produk')
            .innerJoin('jenisproduk_kbls', 'jenisproduk_kbls.id', 'produk_kbls.jenisProduk_kbl_id')
            .innerJoin('perusahaan_kbls', 'perusahaan_kbls.id', 'produk_kbls.perusahaan_kbl_id')
            .fetch()


        return view.render('kbl.produk.index', { produks: produks.rows })
    }

    async create({ request, response, view }) {
        const jenisproduks = await Jenisproduk.all()
        const perusahaans = await Perusahaan.all()

        return view.render('kbl.produk.create', {
            jenisproduks: jenisproduks.rows,
            perusahaans: perusahaans.rows
        })
    }

    async store({ request, response, view, session }) {
        const produk = new Produk()

        produk.perusahaan_kbl_id = request.input('perusahaan_kbl_id')
        produk.jenisProduk_kbl_id = request.input('jenisProduk_kbl_id')
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
        return response.route('kbl.produk.index')

    }

    async edit({ request, response, view, params }) {
        const id = params.id
        const produk = await Produk.find(id)
        const jenisproduks = await Jenisproduk.all()
        const perusahaans = await Perusahaan.all()

        // return id

        return view.render('kbl.produk.edit',
            {
                produk: produk,
                jenisproduks: jenisproduks.rows,
                perusahaans: perusahaans.rows
            })
    }

    async update({ request, response, view, params, session }) {
        const id = params.id
        const produk = await Produk.find(id)

        produk.perusahaan_kbl_id = request.input('perusahaan_kbl_id')
        produk.jenisProduk_kbl_id = request.input('jenisProduk_kbl_id')
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
        return response.route('kbl.produk.index')
    }

    async delete({ request, response, view, params, session }) {
        const id = params.id
        const produk = await Produk.find(id)

        await produk.delete()

        session.flash({ notification: 'Data Berhasil Dihapus!' })
        return response.route('kbl.produk.index')
    }

    async show({ request, response, view, params }) {
        const id = params.id
        const produk = await Produk.find(id)
        const jenisproduks = await Jenisproduk.all()
        const perusahaans = await Perusahaan.find(produk.perusahaan_kbl_id)
        // const perusahaans = await Perusahaan.all()
        // return perusahaans
 

        return view.render('kbl.show.index',
            {
                produk: produk,
                jenisproduks: jenisproduks,
                perusahaans: perusahaans
            })
    }
}

module.exports = ProdukKblController

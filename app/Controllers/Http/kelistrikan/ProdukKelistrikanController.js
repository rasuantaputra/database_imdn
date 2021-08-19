'use strict'

const Perusahaan = use('App/Models/kelistrikan/PerusahaanKelistrikan.js')
const Jenisproduk = use('App/Models/kelistrikan/JenisprodukKelistrikan.js')
const Produk = use('App/Models/kelistrikan/ProdukKelistrikan.js')

class ProdukKelistrikanController {
    async index({ request, response, view }) {
        // innerJoin('nama_tabel', 'nama_kolom', 'tabel_ini.dihubungin_dengan_tabel_ini(FK)')
        const produks = await Produk.query()
            .select('produk_kelistrikans.*','perusahaan_kelistrikans.nama_perusahaan','jenisproduk_kelistrikans.jenis_produk')
            .innerJoin('jenisproduk_kelistrikans', 'jenisproduk_kelistrikans.id', 'produk_kelistrikans.jenisProduk_kelistrikan_id')
            .innerJoin('perusahaan_kelistrikans', 'perusahaan_kelistrikans.id', 'produk_kelistrikans.perusahaan_kelistrikan_id')
            .fetch()


        return view.render('kelistrikan.produk.index', { produks: produks.rows })
    }

    async create({ request, response, view }) {
        const jenisproduks = await Jenisproduk.all()
        const perusahaans = await Perusahaan.all()

        return view.render('kelistrikan.produk.create', {
            jenisproduks: jenisproduks.rows,
            perusahaans: perusahaans.rows
        })
    }

    async store({ request, response, view, session }) {
        const produk = new Produk()

        produk.perusahaan_kelistrikan_id = request.input('perusahaan_kelistrikan_id')
        produk.jenisProduk_kelistrikan_id = request.input('jenisProduk_kelistrikan_id')
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
        return response.route('kelistrikan.produk.index')

    }

    async edit({ request, response, view, params }) {
        const id = params.id
        const produk = await Produk.find(id)
        const jenisproduks = await Jenisproduk.all()
        const perusahaans = await Perusahaan.all()

        // return id

        return view.render('kelistrikan.produk.edit',
            {
                produk: produk,
                jenisproduks: jenisproduks.rows,
                perusahaans: perusahaans.rows
            })
    }

    async update({ request, response, view, params, session }) {
        const id = params.id
        const produk = await Produk.find(id)

        produk.perusahaan_kelistrikan_id = request.input('perusahaan_kelistrikan_id')
        produk.jenisProduk_kelistrikan_id = request.input('jenisProduk_kelistrikan_id')
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
        return response.route('kelistrikan.produk.index')
    }

    async delete({ request, response, view, params, session }) {
        const id = params.id
        const produk = await Produk.find(id)

        await produk.delete()

        session.flash({ notification: 'Data Berhasil Dihapus!' })
        return response.route('kelistrikan.produk.index')
    }
    
    async show({ request, response, view, params }) {
        const id = params.id
        const produk = await Produk.find(id)
        const jenisproduks = await Jenisproduk.all()
        const perusahaans = await Perusahaan.find(produk.perusahaan_kelistrikan_id)
        // const perusahaans = await Perusahaan.all()
        // return perusahaans
 

        return view.render('kelistrikan.show.index',
            {
                produk: produk,
                jenisproduks: jenisproduks,
                perusahaans: perusahaans
            })
    }
}

module.exports = ProdukKelistrikanController

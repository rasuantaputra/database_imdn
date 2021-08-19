'use strict'

const Jenisproduk = use('App/Models/kelistrikan/JenisprodukKelistrikan.js')


class JenisprodukKelistrikanController {
    async index({ request, response, view }) {
        const jenisproduks = await Jenisproduk.all()

        return view.render('kelistrikan.jenisproduk.index', { jenisproduks: jenisproduks.rows })
    }

    async create({ request, response, view }) {
        return view.render('kelistrikan.jenisproduk.create')
    }

    async store({ request, response, view, session }) {
        const jenisproduk = new Jenisproduk()

        // jenisproduk.perusahaan_id = request.input('perusahaan_id')
        jenisproduk.jenis_produk = request.input('jenis_produk')
        await jenisproduk.save()

        session.flash({ notification: 'Data Berhasil Disimpan!' })
        return response.route('kelistrikan.jenisproduk.index')

    }

    async edit({ request, response, view, params }) {
        const id = params.id
        const jenisproduk = await Jenisproduk.find(id)

        return view.render('kelistrikan.jenisproduk.edit', { jenisproduk: jenisproduk })
    }

    async update({ request, response, view, params, session }) {
        const id = params.id
        const jenisproduk = await Jenisproduk.find(id)

        // jenisproduk.perusahaan_id = request.input('perusahaan_id')
        jenisproduk.jenis_produk = request.input('jenis_produk')
        await jenisproduk.save()

        session.flash({ notification: 'Data Berhasil Diupdate!' })
        return response.route('kelistrikan.jenisproduk.index')
    }

    async delete({ request, response, view, params, session }) {
        const id = params.id
        const jenisproduk = await Jenisproduk.find(id)
        await jenisproduk.delete()

        session.flash({ notification: 'Data Berhasil Dihapus!' })
        return response.route('kelistrikan.jenisproduk.index')
    }
}

module.exports = JenisprodukKelistrikanController

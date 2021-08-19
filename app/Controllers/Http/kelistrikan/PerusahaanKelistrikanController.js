'use strict'

const Perusahaan = use('App/Models/kelistrikan/PerusahaanKelistrikan.js')

class PerusahaanKelistrikanController {
    async index({ request, response, view }) {
        const perusahaans = await Perusahaan.all()


        return view.render('kelistrikan.perusahaan.index', { perusahaans: perusahaans.rows })
    }

    create({ request, response, view }) {
        return view.render('kelistrikan.perusahaan.create')
    }

    async store({ request, response, view, session }) {
        const perusahaan = new Perusahaan()

        perusahaan.nama_perusahaan = request.input('nama_perusahaan')
        perusahaan.alamat = request.input('alamat')
        await perusahaan.save()

        session.flash({ notification: 'Data Berhasil Disimpan!' })
        return response.route('kelistrikan.perusahaan.index')

    }

    async edit({ request, response, view, params }) {
        const id = params.id
        // return id
        const perusahaan = await Perusahaan.find(id)
        // return perusahaan
        return view.render('kelistrikan.perusahaan.edit', { perusahaan: perusahaan })
    }

    async update({ request, response, view, params, session }) {
        const id = params.id
        const perusahaan = await Perusahaan.find(id)

        perusahaan.nama_perusahaan = request.input('nama_perusahaan')
        perusahaan.alamat = request.input('alamat')
        await perusahaan.save()

        session.flash({ notification: 'Data Berhasil Diupdate!' })
        return response.route('kelistrikan.perusahaan.index')
    }

    async delete({ request, response, view, params, session }) {
        const id = params.id
        const perusahaan = await Perusahaan.find(id)
        await perusahaan.delete()

        session.flash({ notification: 'Data Berhasil Dihapus!' })
        return response.route('kelistrikan.perusahaan.index')
    }


}

module.exports = PerusahaanKelistrikanController

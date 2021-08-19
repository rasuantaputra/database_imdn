'use strict'

const Perusahaan = use('App/Models/kbl/PerusahaanKbl.js')

class PerusahaanKblController {
    async index({ request, response, view }) {
        const perusahaans = await Perusahaan.all()


        return view.render('kbl.perusahaan.index', { perusahaans: perusahaans.rows })
    }

    create({ request, response, view }) {
        return view.render('kbl.perusahaan.create')
    }

    async store({ request, response, view, session }) {
        const perusahaan = new Perusahaan()

        perusahaan.nama_perusahaan = request.input('nama_perusahaan')
        perusahaan.alamat = request.input('alamat')
        await perusahaan.save()

        session.flash({ notification: 'Data Berhasil Disimpan!' })
        return response.route('kbl.perusahaan.index')

    }

    async edit({ request, response, view, params }) {
        const id = params.id
        // return id
        const perusahaan = await Perusahaan.find(id)
        // return perusahaan
        return view.render('kbl.perusahaan.edit', { perusahaan: perusahaan })
    }

    async update({ request, response, view, params, session }) {
        const id = params.id
        const perusahaan = await Perusahaan.find(id)

        perusahaan.nama_perusahaan = request.input('nama_perusahaan')
        perusahaan.alamat = request.input('alamat')
        await perusahaan.save()

        session.flash({ notification: 'Data Berhasil Diupdate!' })
        return response.route('kbl.perusahaan.index')
    }

    async delete({ request, response, view, params, session }) {
        const id = params.id
        const perusahaan = await Perusahaan.find(id)
        await perusahaan.delete()

        session.flash({ notification: 'Data Berhasil Dihapus!' })
        return response.route('kbl.perusahaan.index')
    }
}

module.exports = PerusahaanKblController

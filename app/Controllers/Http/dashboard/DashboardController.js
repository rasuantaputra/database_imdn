'use strict'

class DashboardController {
    async index({ request, response, view }) {
        return view.render('dashboard.index')
    }
}

module.exports = DashboardController

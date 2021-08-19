'use strict'

class LoginController {

  index({ view }) {
    return view.render('auth.login')
  }

  async check({ request, auth, session, response }) {

    /**
     * get data from form
     */
    const { email, password } = request.all()

    /**
     * attemp auth
     */
    await auth.attempt(email, password)

    return response.route('dashboard.index')

  }

  async logout({ auth, response }) {
    await auth.logout()
    return response.route('/')
  }

}

module.exports = LoginController
'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

/*
Route dashboard start
*/
Route.get('/dashboard', 'dashboard/DashboardController.index').as('dashboard.index').middleware(['Authenticate'])
/*
Route dashboard end
*/
// =========================
/*
Route register start
*/
Route.post('register', 'register/RegisterController.store').as('register.store').middleware(['RedirectIfAuthenticated'])
/*
Route register end
*/
/*
Route login start
*/
Route.post('login', 'register/LoginController.check').as('login.check').middleware(['RedirectIfAuthenticated'])
Route.get('logout', 'register/LoginController.logout').as('logout').middleware(['Authenticate'])
/*
Route login start
*/
// =========================
/*
Route Kelistrikan Start
*/

/*
Perusahaan
*/
Route.get('/perusahaan_kelistrikan', 'kelistrikan/PerusahaanKelistrikanController.index').as('kelistrikan.perusahaan.index').middleware(['Authenticate'])
// create
Route.get('/perusahaan_kelistrikan/create', 'kelistrikan/PerusahaanKelistrikanController.create').as('kelistrikan.perusahaan.create').middleware(['Authenticate'])
Route.post('/perusahaan_kelistrikan/store', 'kelistrikan/PerusahaanKelistrikanController.store').as('kelistrikan.perusahaan.store').middleware(['Authenticate'])
// edit
Route.get('/perusahaan_kelistrikan/edit/:id', 'kelistrikan/PerusahaanKelistrikanController.edit').as('kelistrikan.perusahaan.edit').middleware(['Authenticate'])
Route.post('/perusahaan_kelistrikan/update/:id', 'kelistrikan/PerusahaanKelistrikanController.update').as('kelistrikan.perusahaan.update').middleware(['Authenticate'])
// delete
Route.get('/perusahaan_kelistrikan/delete/:id', 'kelistrikan/PerusahaanKelistrikanController.delete').as('kelistrikan.perusahaan.delete').middleware(['Authenticate'])

/*
Jenis Produk
*/
Route.get('/jenisproduk_kelistrikan', 'kelistrikan/JenisprodukKelistrikanController.index').as('kelistrikan.jenisproduk.index').middleware(['Authenticate'])
// create
Route.get('/jenisproduk_kelistrikan/create', 'kelistrikan/JenisprodukKelistrikanController.create').as('kelistrikan.jenisproduk.create').middleware(['Authenticate'])
Route.post('/jenisproduk_kelistrikan/store', 'kelistrikan/JenisprodukKelistrikanController.store').as('kelistrikan.jenisproduk.store').middleware(['Authenticate'])
// edit
Route.get('/jenisproduk_kelistrikan/edit/:id', 'kelistrikan/JenisprodukKelistrikanController.edit').as('kelistrikan.jenisproduk.edit').middleware(['Authenticate'])
Route.post('/jenisproduk_kelistrikan/update/:id', 'kelistrikan/JenisprodukKelistrikanController.update').as('kelistrikan.jenisproduk.update').middleware(['Authenticate'])
// delete
Route.get('/jenisproduk_kelistrikan/delete/:id', 'kelistrikan/JenisprodukKelistrikanController.delete').as('kelistrikan.jenisproduk.delete').middleware(['Authenticate'])

/*
Produk
*/
Route.get('/produk_kelistrikan', 'kelistrikan/ProdukKelistrikanController.index').as('kelistrikan.produk.index').middleware(['Authenticate'])
// create
Route.get('/produk_kelistrikan/create', 'kelistrikan/ProdukKelistrikanController.create').as('kelistrikan.produk.create').middleware(['Authenticate'])
Route.post('/produk_kelistrikan/store', 'kelistrikan/ProdukKelistrikanController.store').as('kelistrikan.produk.store').middleware(['Authenticate'])
// edit
Route.get('/produk_kelistrikan/edit/:id', 'kelistrikan/ProdukKelistrikanController.edit').as('kelistrikan.produk.edit').middleware(['Authenticate'])
Route.post('/produk_kelistrikan/update/:id', 'kelistrikan/ProdukKelistrikanController.update').as('kelistrikan.produk.update').middleware(['Authenticate'])
// delete
Route.get('/produk_kelistrikan/delete/:id', 'kelistrikan/ProdukKelistrikanController.delete').as('kelistrikan.produk.delete').middleware(['Authenticate'])

/*
Tampilan
*/
Route.get('/tampilan_kelistrikan', 'kelistrikan/TampilanKelistrikanController.index').as('kelistrikan.tampilan.index')

// show
Route.get('/produk_kelistrikan/show/:id', 'kelistrikan/ProdukKelistrikanController.show').as('kelistrikan.show.index')
/*
Route Kelistrikan End
*/
// ======================================
/*
Route Keretaapi Start
*/

/*
Perusahaan
*/
Route.get('/perusahaan_keretaapi', 'keretaapi/PerusahaanKeretaapiController.index').as('keretaapi.perusahaan.index').middleware(['Authenticate'])
// create
Route.get('/perusahaan_keretaapi/create', 'keretaapi/PerusahaanKeretaapiController.create').as('keretaapi.perusahaan.create').middleware(['Authenticate'])
Route.post('/perusahaan_keretaapi/store', 'keretaapi/PerusahaanKeretaapiController.store').as('keretaapi.perusahaan.store').middleware(['Authenticate'])
// edit
Route.get('/perusahaan_keretaapi/edit/:id', 'keretaapi/PerusahaanKeretaapiController.edit').as('keretaapi.perusahaan.edit').middleware(['Authenticate'])
Route.post('/perusahaan_keretaapi/update/:id', 'keretaapi/PerusahaanKeretaapiController.update').as('keretaapi.perusahaan.update').middleware(['Authenticate'])
// delete
Route.get('/perusahaan_keretaapi/delete/:id', 'keretaapi/PerusahaanKeretaapiController.delete').as('keretaapi.perusahaan.delete').middleware(['Authenticate'])

/*
Jenis Produk
*/
Route.get('/jenisproduk_keretaapi', 'keretaapi/JenisprodukKeretaapiController.index').as('keretaapi.jenisproduk.index').middleware(['Authenticate'])
// create
Route.get('/jenisproduk_keretaapi/create', 'keretaapi/JenisprodukKeretaapiController.create').as('keretaapi.jenisproduk.create').middleware(['Authenticate'])
Route.post('/jenisproduk_keretaapi/store', 'keretaapi/JenisprodukKeretaapiController.store').as('keretaapi.jenisproduk.store').middleware(['Authenticate'])
// edit
Route.get('/jenisproduk_keretaapi/edit/:id', 'keretaapi/JenisprodukKeretaapiController.edit').as('keretaapi.jenisproduk.edit').middleware(['Authenticate'])
Route.post('/jenisproduk_keretaapi/update/:id', 'keretaapi/JenisprodukKeretaapiController.update').as('keretaapi.jenisproduk.update').middleware(['Authenticate'])
// delete
Route.get('/jenisproduk_keretaapi/delete/:id', 'keretaapi/JenisprodukKeretaapiController.delete').as('keretaapi.jenisproduk.delete').middleware(['Authenticate'])

/*
Produk
*/
Route.get('/produk_keretaapi', 'keretaapi/ProdukKeretaapiController.index').as('keretaapi.produk.index').middleware(['Authenticate'])
// create
Route.get('/produk_keretaapi/create', 'keretaapi/ProdukKeretaapiController.create').as('keretaapi.produk.create').middleware(['Authenticate'])
Route.post('/produk_keretaapi/store', 'keretaapi/ProdukKeretaapiController.store').as('keretaapi.produk.store').middleware(['Authenticate'])
// edit
Route.get('/produk_keretaapi/edit/:id', 'keretaapi/ProdukKeretaapiController.edit').as('keretaapi.produk.edit').middleware(['Authenticate'])
Route.post('/produk_keretaapi/update/:id', 'keretaapi/ProdukKeretaapiController.update').as('keretaapi.produk.update').middleware(['Authenticate'])
// delete
Route.get('/produk_keretaapi/delete/:id', 'keretaapi/ProdukKeretaapiController.delete').as('keretaapi.produk.delete').middleware(['Authenticate'])
// show
Route.get('/produk_keretaapi/show/:id', 'keretaapi/ProdukKeretaapiController.show').as('keretaapi.show.index')

/*
Tampilan
*/
Route.get('/tampilan_keretaapi', 'keretaapi/TampilanKeretaapiController.index').as('keretaapi.tampilan.index')
Route.get('/tampilan_keretaapi/show/:id', 'keretaapi/ProdukKeretaapiController.show').as('keretaapi.tampilan.show')
/*
Route Keretaapi end
*/
// ======================================
/*
Route kbl Start
*/

/*
Perusahaan
*/
Route.get('/perusahaan_kbl', 'kbl/PerusahaanKblController.index').as('kbl.perusahaan.index').middleware(['Authenticate'])
// create
Route.get('/perusahaan_kbl/create', 'kbl/PerusahaanKblController.create').as('kbl.perusahaan.create').middleware(['Authenticate'])
Route.post('/perusahaan_kbl/store', 'kbl/PerusahaanKblController.store').as('kbl.perusahaan.store').middleware(['Authenticate'])
// edit
Route.get('/perusahaan_kbl/edit/:id', 'kbl/PerusahaanKblController.edit').as('kbl.perusahaan.edit').middleware(['Authenticate'])
Route.post('/perusahaan_kbl/update/:id', 'kbl/PerusahaanKblController.update').as('kbl.perusahaan.update').middleware(['Authenticate'])
// delete
Route.get('/perusahaan_kbl/delete/:id', 'kbl/PerusahaanKblController.delete').as('kbl.perusahaan.delete').middleware(['Authenticate'])

/*
Jenis Produk
*/
Route.get('/jenisproduk_kbl', 'kbl/JenisprodukKblController.index').as('kbl.jenisproduk.index').middleware(['Authenticate'])
// create
Route.get('/jenisproduk_kbl/create', 'kbl/JenisprodukKblController.create').as('kbl.jenisproduk.create').middleware(['Authenticate'])
Route.post('/jenisproduk_kbl/store', 'kbl/JenisprodukKblController.store').as('kbl.jenisproduk.store').middleware(['Authenticate'])
// edit
Route.get('/jenisproduk_kbl/edit/:id', 'kbl/JenisprodukKblController.edit').as('kbl.jenisproduk.edit').middleware(['Authenticate'])
Route.post('/jenisproduk_kbl/update/:id', 'kbl/JenisprodukKblController.update').as('kbl.jenisproduk.update').middleware(['Authenticate'])
// delete
Route.get('/jenisproduk_kbl/delete/:id', 'kbl/JenisprodukKblController.delete').as('kbl.jenisproduk.delete').middleware(['Authenticate'])

/*
Produk
*/
Route.get('/produk_kbl', 'kbl/ProdukKblController.index').as('kbl.produk.index').middleware(['Authenticate'])
// create
Route.get('/produk_kbl/create', 'kbl/ProdukKblController.create').as('kbl.produk.create').middleware(['Authenticate'])
Route.post('/produk_kbl/store', 'kbl/ProdukKblController.store').as('kbl.produk.store').middleware(['Authenticate'])
// edit
Route.get('/produk_kbl/edit/:id', 'kbl/ProdukKblController.edit').as('kbl.produk.edit').middleware(['Authenticate'])
Route.post('/produk_kbl/update/:id', 'kbl/ProdukKblController.update').as('kbl.produk.update').middleware(['Authenticate'])
// delete
Route.get('/produk_kbl/delete/:id', 'kbl/ProdukKblController.delete').as('kbl.produk.delete').middleware(['Authenticate'])

/*
Tampilan
*/
Route.get('/tampilan_kbl', 'kbl/TampilanKblController.index').as('kbl.tampilan.index')

// show
Route.get('/produk_kbl/show/:id', 'kbl/ProdukKblController.show').as('kbl.show.index')
/*
/*
Route kbl End
*/
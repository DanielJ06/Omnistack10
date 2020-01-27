const { Router } = require('express')
const DevControllers = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router()

routes.get('/devs', DevControllers.index)

routes.post('/devs', DevControllers.store)

routes.get('/search', SearchController.index)

module.exports = routes
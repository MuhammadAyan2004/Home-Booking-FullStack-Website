const express = require('express')
const storeController = require('../controllers/storeController')

const storeRouter = express.Router()

storeRouter.get('/',storeController.getIndex)
storeRouter.get('/homeList',storeController.getHomes)
storeRouter.get('/favorite',storeController.getFav)
storeRouter.get('/bookings',storeController.getBook)


module.exports = storeRouter; 
const express = require('express')
const storeController = require('../controllers/storeController')

const storeRouter = express.Router()

storeRouter.get('/',storeController.getIndex)
storeRouter.get('/homeList',storeController.getHomes)
storeRouter.get('/homeList/:homeId',storeController.getdetails)
storeRouter.get('/favorites',storeController.getFav)
storeRouter.post('/favorite',storeController.postaddFav)
storeRouter.post('/favorites/:homeId',storeController.postDelFav)
storeRouter.get('/bookings',storeController.getBook)


module.exports = storeRouter; 
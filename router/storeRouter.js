const express = require('express')
const storeController = require('../controllers/storeController')

const storeRouter = express.Router()

storeRouter.get('/',storeController.getIndex)


module.exports = storeRouter; 
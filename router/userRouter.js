const express = require('express')
const userController = require('../controllers/userController')

const userRouter = express.Router()

userRouter.get('/host/addHome',userController.getRegistration)
userRouter.get('/host/homeAdded',userController.addedHome)

module.exports = userRouter
const express = require('express')
const userController = require('../controllers/userController')

const userRouter = express.Router()

userRouter.get('/host/addHome',userController.getRegistration)
userRouter.get('/host/homes',userController.addedHome)
userRouter.post('/host/registration',userController.postRegistration)

module.exports = userRouter
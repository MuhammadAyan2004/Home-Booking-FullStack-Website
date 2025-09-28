const express = require('express')
const userController = require('../controllers/userController')

const userRouter = express.Router()

userRouter.get('/host/addHome',userController.getRegistration)
userRouter.get('/host/homes',userController.addedHome)
userRouter.post('/host/registration',userController.postRegistration)
userRouter.get('/host/editHome/:homeId',userController.getEdithome)
userRouter.post('/host/editHome/',userController.postEdithome)
userRouter.post('/host/delete/:homeId',userController.getDelhome)

module.exports = userRouter
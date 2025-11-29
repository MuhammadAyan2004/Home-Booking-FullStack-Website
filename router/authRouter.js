const express = require('express')
const authController = require('../controllers/authController')

const authRouter = express.Router()

authRouter.get('/login',authController.getLogin)
authRouter.post('/login',authController.postLogin)
authRouter.post('/logout',authController.postLogout)
authRouter.get('/signUp',authController.getSignUp)
authRouter.post('/signUp',authController.postSignUp)


module.exports = authRouter
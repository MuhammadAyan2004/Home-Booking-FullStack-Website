const express = require('express')
const authController = require('../controllers/authController')

const authRouter = express.Router()

authRouter.get('/login',authController.getLogin)
authRouter.get('/signUp',authController.getSignUp)


module.exports = authRouter
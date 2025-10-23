const express = require('express')
const authController = require('../controllers/authController')

const authRouter = express.Router()

authRouter.get('/login',authController.getLogin)
authRouter.post('/',authController.postLogin)
authRouter.get('/signUp',authController.getSignUp)
// authRouter.post('/signUp',authController.getSignUp)


module.exports = authRouter
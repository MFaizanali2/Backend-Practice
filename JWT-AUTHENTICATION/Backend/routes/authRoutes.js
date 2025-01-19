import express from 'express'
import { loginControllers, logoutControllers, registerControllers, resetPasswordControllers } from '../controllers/authControllers.js'

const AuthRoutes = express.Router()


AuthRoutes.post('/register', registerControllers)

AuthRoutes.post('/login', loginControllers)

AuthRoutes.post('/logout', logoutControllers)

AuthRoutes.post('/resetPassword', resetPasswordControllers)

export default AuthRoutes;
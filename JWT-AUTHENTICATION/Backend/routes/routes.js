import express from 'express'
import AuthRoutes from './authRoutes.js'


const Router = express.Router()

Router.use('/auth', AuthRoutes)

export default Router;
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { DbConnection } from './db/dbConnection.js'
import AuthRoutes from './routes/authRoutes.js'
import Router from './routes/routes.js'

dotenv.config()

const app = express()
 
    // middleware
app.use(express.json())
app.use(cors())


    // health check
app.get('/',(req,res)=>{
    res.status(200).json({message: 'Api is running'})
})

app.use('/api', Router)

DbConnection()
// const PORT = process.env.PORT || 8080;
const PORT = 8000;

app.listen(PORT,()=>{
    console.log(`server started at PORT`,PORT)
})
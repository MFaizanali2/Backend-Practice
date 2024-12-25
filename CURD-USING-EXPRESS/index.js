import express from 'express'
import dotenv from 'dotenv'
import { ProductRoute } from './routes/ProductRoutes.js';

const app = express()
dotenv.config()
app.use(express.json())
const PORT = process.env.PORT || 8080;

app.get('/',(req,res)=>{
    res.status(200).send("welcome to backend")
})
app.use('/products',ProductRoute)

app.listen(PORT,()=>{
    console.log(`server is starting at ${PORT}`)
})
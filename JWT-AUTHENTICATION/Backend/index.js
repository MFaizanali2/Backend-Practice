import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()


    // middleware
app.use(express.json())
app.use(cors())


    // health check
app.get('/',(req,res)=>{
    res.status(200).json({message: 'Api is running'})
})

// const PORT = process.env.PORT || 8080;
const PORT = 8000;

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
})
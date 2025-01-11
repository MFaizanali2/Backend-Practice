import express from 'express'
import dotenv from 'dotenv'
import TaskRouter from './routes/TaskRoutes.js';
import mongoose from 'mongoose';

const app = express();
dotenv.config()

app.use(express.json())

const PORT = process.env.PORT || 8080;
const MONGODB_URL = process.env.MONGODB_URL;

app.get('/',(req,res)=>{
    res.send("welcome back to backend")
})

app.use('/tasks', TaskRouter)

// mongoose.connect(MONGODB_URL)
// .then(()=>{
//     console.log("db connection succesfully")
// })
// .catch((error)=>{
//     console.log("db connection Failed", error)
// })

const dbConnection = async()=>{
    try{
        await mongoose.connect(MONGODB_URL)
        console.log("db connection succesfully")
    }catch(error){
        console.log("db connection Failed", error)
    }
} 
dbConnection()


app.listen(PORT,()=>{
    console.log("Server Started" , PORT)
})

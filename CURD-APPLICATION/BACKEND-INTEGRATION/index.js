import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import TaskRoutes from './routes/TaskRoutes.js';
// import taskschema from './model/taskModal.js';

const app = express();
dotenv.config();

app.use(express.json());

const PORT = process.env.PORT || 8080;
const MONGODB_URL = process.env.MONGODB_URL;

// mongoose.connect(MONGODB_URL)
// .then(()=>{
//     console.log('Connect Succesfully')
// })
// .catch((error)=>{
//     console.log('coonection failed', error)
// })

const dbConnection = async() =>{
    try{
        await mongoose.connect(MONGODB_URL)
        console.log('Connect Succesfully')
    }
    catch(error){
        console.log('coonection failed', error)
    }
}

app.get('/',(req,res)=>{
    res.send("welcome to backend!")
})

app.use('/routes',TaskRoutes);
// app.use('/tasks',taskschema);

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
})
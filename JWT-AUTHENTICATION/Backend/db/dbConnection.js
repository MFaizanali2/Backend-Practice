import mongoose from "mongoose";

const dbConnection = async() =>{
    try{
        await mongoose.connect();
        console.log("connected to mongodb")
    }catch(error){
        console.error('error connection to mongodb:', error)
        process.exit(1)
    }
}
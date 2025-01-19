import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

export const DbConnection = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("connected to Mongodb")
    }catch(error){
        console.error('error connection to mongodb:', error.message)

    }
}
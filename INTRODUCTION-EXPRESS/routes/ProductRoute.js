import express from "express";
import comments from "../comments.js";
// import { status } from "express/lib/response";

const ProductRoute = express.Router()

ProductRoute.get('/',(req,res)=>{
    res.status(200).send({status:200,message:"success",data:comments})
})
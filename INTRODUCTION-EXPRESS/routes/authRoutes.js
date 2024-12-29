import express from 'express'

export const authRoute = express.Router()

authRoute.get('/forget-password',(req,res)=>{
    try{
        res.status(200).send({message:'Email Sent'})
    }
    catch(error){
        res.status(200).send({message:'Something went wrong'})
    }
})
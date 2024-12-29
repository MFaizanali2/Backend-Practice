import express from 'express'
import comment from '../comments.js'

const ProductRoutes = express.Router()

ProductRoutes.get('/products',(req, res)=>{
    res.status(200).send({status:200,message:'succes',data:comment})
})

ProductRoutes.get('/products/:id',(req,res)=>{
    const id = req.params.id
    res.status(200).send({status:200,message:`Welcome to Your Product ${id}`,data:[]})
})

export default ProductRoutes;
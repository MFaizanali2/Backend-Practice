import express from 'express'
import { Products } from '../utils/constant/Products.js'

export const ProductRoute = express.Router()



// ProductRoute.get('/:id',(req,res)=>{
//     try{
//         const {id} = req.params;
//     const isProductfound = Products.find((item)=> item.id == id)
//     console.log(isProductfound)
//     if(!isProductfound){
//         res.status(404).send({status:404,message:"Product ID not found"})
//     }
//         res.status(200).send({status:200,message:"success",data:isProductfound})
//     }
//     catch(error){
//         res.status(400).send({status:400,message:"Some thing fail"})
//     }
// })


ProductRoute.get('/category', (req, res) => {

    const category = req.query.category;

    const isCategoryfound = Products.find((item) => item.category == category)
    if (!isCategoryfound) {
        res.status(404).send({ status: 404, message: "Category not found" })
    }

    const iscategory = Products.filter((item) => item.category == category)
    if (!iscategory) {
        res.status(404).send({ status: 404, message: "category is not found" })
    }
    res.status(200).send({ status: 200, message: "success", data: iscategory })
})


ProductRoute.get('/', (req, res) => {
    try {
        res.status(200).send({ status: 200, message: "Sucessfully", data: Products })
    }
    catch (error) {
        res.send(400).send({ status: 400, message: "something wrong" })
    }
})

ProductRoute.get('/product/:id', (req, res) => {
    try {
        const { id } = req.params;
        const isSingleproduct = Products.find((item) => item.id == id)
        console.log(isSingleproduct)
        if (!isSingleproduct) {
            res.status(404).send({ status: 404, message: "Single Product ID not found" })
        }
        res.status(200).send({ status: 200, message: "success", data: isSingleproduct })
    }
    catch (error) {
        res.status(200).send({ status: 200, message: "Some thing fail" })
    }
})

ProductRoute.post('/', (req, res) => {
    const data = req.body
    const isreadyProduct = Products.find((item) => item.id == data.id)
    if (!isreadyProduct) {
        res.status(409).send({ status: 409, message: "Product are already found" })
    }
    else {
        Products.push(data);
        res.status(201).send({ status: 201, message: "product add succesfully", data: Products })
    }
})


ProductRoute.delete('/:id', (req, res) => {
    const data = req.body
    const idNotfound = Products.find((item) => item.id == id)
    if (!idNotfound) {
        res.status(409).send({ status: 409, message: "Product ID not found" })
    }
        let deleteItem = Products.filter((item) => item.id != id)
        console.log(deleteItem)
        res.status(200).send({ status: 200, message: "product delete succesfully", data: deleteItem })
})
import express from "express"
import dotenv from "dotenv"
import comments from "./comments.js"

const app = express()
dotenv.config()

const PORT = process.env.PORT || 3000;
// const PORT = 3000;

app.get('/',(req, res)=>{
    res.status(200).send("hello world!")
})
// app.get('/about',(req, res)=>{
//     res.status(200).send("hello About!")
// })
// app.get('/product',(req, res)=>{
//     res.status(200).send("hello Product!")
// })
// app.get('/user/:id',(req, res)=>{
//     const id = req.params.id;
//     res.status(200).send(`welcome to product page ${id}`)
// })
// app.get('*',(req, res)=>{
//     res.status(200).send("page not found")
// })
// app.get('/comments',(req, res)=>{
//     res.status(200).send({status:200, message:"success",data:comments})
// })
// status , message data;

// app.get('/login',(req, res)=>{
//     res.status(200).send({status:200, message:"you are sucessfully login"})
// })




app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`)
})

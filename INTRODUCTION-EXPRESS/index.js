import express from 'express'
import dotenv from 'dotenv'
import ProductRoutes from './routes/ProductRoute.js'
import comment from './comments.js'
import UserRoutes from './routes/usersRoute.js'
// import cors from 'cors'

const app = express()
dotenv.config()

// app.use(cors())

// const PORT = process.env.PORT || 8000;
const PORT = 8000;

app.get('/',(req,res)=>{
    res.status(200).send('Welcome to Backend!')
})

app.get('/products', ProductRoutes)
app.get('/products/:id', ProductRoutes)
app.get('/login', UserRoutes)
// app.use('/signup', UserRoutes)

// app.get('/profile',(req,res)=>{
//     res.status(200).send('Welcome to Your Profile!')
// })

// app.get('/profile/:id',(req,res)=>{
//     const id = req.params.id
//     res.status(200).send(`Welcome to Your Profile ${id}`)
// })

// app.get('*',(req,res)=>{
//     res.status(200).send('Page not found!')
// })

// app.get('/comment',(req,res)=>{
//     res.status(200).send({status:200,message:'Welcome to Your Product',data:comment})
// })


app.listen(PORT,(req,res)=>{
    console.log(`server started at ${PORT}`)
})
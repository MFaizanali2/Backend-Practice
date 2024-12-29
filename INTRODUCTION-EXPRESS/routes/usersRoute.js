import express from 'express'


const UserRoutes = express.Router()

UserRoutes.get('/login',(req, res)=>{
    res.send({message:'login page'})
})

UserRoutes.get('/signup',(req, res)=>{
    res.send({message:'signup page'})
})

export default UserRoutes
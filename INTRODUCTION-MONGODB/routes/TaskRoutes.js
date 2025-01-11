import express from 'express'
import { enums } from '../constant/enum.js'
import Task from '../model/taskModal.js'

const TaskRouter = express.Router()

TaskRouter.get('/', async(req,res)=>{
    // find for get all data from mongoodb
    try{
        const getAllTask = await Task.find()
        res.status(200).send({status:200,message:enums.SUCCES,data:getAllTask})
    }catch(error){
        res.status(400).send({status:400,message:enums.ERROR_CONNECTION})
    }
})

TaskRouter.post('/add', async(req,res)=>{
    try{
        const data = req.body;
        const response = await Task.create(data)
        res.status(200).send({status:200,message:enums.SUCCES_MSG,data:response})
    }catch(error){
        res.status(400).send({status:400,message:enums.ERROR_CONNECTION})
    }
})


TaskRouter.delete('/delete/:id', async(req,res)=>{
    try{
        const {id} = req.params;
        const response = await Task.findByIdAndDelete(id)
        res.status(200).send({status:200,message:enums.DELETE_MSG,data:response})
    }catch(error){
        res.status(400).send({status:400,message:enums.ERROR_CONNECTION})
    }
})


TaskRouter.put('/update/:id', async(req,res)=>{
    try{
        const {id} = req.params;
        const data = req.body;
        const response = await Task.findByIdAndUpdate(id,data)
        res.status(200).send({status:200,message:enums.UPDATE_MSG,data:response})
    }catch(error){
        res.status(400).send({status:400,message:enums.ERROR_CONNECTION})
    }
})


export default TaskRouter
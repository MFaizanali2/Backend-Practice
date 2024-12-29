import express from 'express'
import { enums } from '../constant/enum.js';
import Tasks from '../model/taskModal.js';

const TaskRoutes = express.Router();

TaskRoutes.get('/',async(req, res)=>{
    try{
        const getAllTasks = await Tasks.find()
        res.status(200).send({status:200,message:enums.SUCCES_MSG, data:getAllTasks})
    }catch(err){
        res.status(400).send({status:400,message:enums.ERROR_CONNECTION})
    }
})

TaskRoutes.get('/add', async(req, res)=>{
    try{
        const data = req.body
        await Tasks.create(data)
        res.status(200).send({status:200,message:enums.SUCCES, data:data})
    }catch(err){
        res.status(400).send({status:400,message:enums.ERROR_CONNECTION})
    }
})


export default TaskRoutes;
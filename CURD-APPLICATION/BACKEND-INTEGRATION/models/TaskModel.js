import { application } from "express";
import mongoose from "mongoose";

// schema is the identity of field how many field are you using in the application

const taskschema = mongoose.Schema({
    title: {type:String},
    description: {type:String},
    due_date: {type:String}
},{timestamps : true})

const Tasks = mongoose.model('tasks',taskschema)

export default Tasks;


// video 40 min
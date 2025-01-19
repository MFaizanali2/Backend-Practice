import mongoose from "mongoose";

// schema is the identity of field how many field are you using in the application

const taskSchema = mongoose.Schema({
    title:{type:String},
    description:{type:String},
    due_date:{type:String}
},{timestamps:true})

const Task = mongoose.model('tasks', taskSchema)

export default Task
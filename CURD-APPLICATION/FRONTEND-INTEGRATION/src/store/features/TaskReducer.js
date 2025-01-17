import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    task:[],
}


const TaskReducer = createSlice({
    name: "tasks",
    initialState,
    reducers:{
        getAllTask:(state,{payload})=>{
            state.task = payload;   
        },
        addTask:(state,{payload})=>{
            state.task.push(payload)
        },
        deleteTask:(state,{payload})=>{
            state.task = state.task.filter((item)=>item.id !== payload)
        }
    }
})



export const {getAllTask, addTask, deleteTask} = TaskReducer.actions
export default TaskReducer.reducer


// video 54 min
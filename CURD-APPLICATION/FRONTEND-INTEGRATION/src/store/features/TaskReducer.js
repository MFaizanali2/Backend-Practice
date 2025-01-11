import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    task:[],
}

const taskreducer = createSlice({
    name: "tasks",
    initialState,
    reducers:{

    }
})

export default taskreducer.reducer;
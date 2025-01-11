import {configureStore} from '@reduxjs/toolkit'
import taskReducer from './features/TaskReducer'


export const store = configureStore({
    reducer: {
        tasks: taskReducer,
    },
})

// video 53 min
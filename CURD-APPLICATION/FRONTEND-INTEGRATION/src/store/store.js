import { configureStore } from '@reduxjs/toolkit'
import TaskReducer from './features/TaskReducer.js'

export const store = configureStore({
  reducer: {
    tasks: TaskReducer
  },
})
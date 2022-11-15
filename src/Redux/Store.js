import { configureStore } from "@reduxjs/toolkit"
import CounterR from './CounterSlice'
export const Store = configureStore({
    reducer:{
     CounterR
    }
})

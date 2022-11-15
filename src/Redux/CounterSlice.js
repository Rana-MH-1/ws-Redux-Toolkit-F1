import {createSlice} from '@reduxjs/toolkit'
 const initialState = {
    count:0
}
const CounterSlice = createSlice({
    name:'counter',
    initialState ,
    reducers:{
        Increment : (state)=>{
            state.count++
        },
        Decrement: (state) =>{
            if(state.count> 0){
                state.count--
            }
        },
        Reset: (state)=>{
            state.count = 0;
        },
        Increment_with_value : (state,action)=>{
            state.count += action.payload
        }
    }
})

export default CounterSlice.reducer
export const {Increment,Decrement,Reset,Increment_with_value} = CounterSlice.actions
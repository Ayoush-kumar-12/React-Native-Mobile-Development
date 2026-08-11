import { View, Text } from 'react-native'
import React from 'react'
import { createSlice } from '@reduxjs/toolkit'


/*
//my code
const CounterSlice = createSlice({
    name:"manager",
    initialState:{count:0},
    reducers:{
        increament: (state) => {state.count+=1},
        decreament: (state) => {state.count-=1},
        reset: (state) => {state.count=0}
    }
})

export const {increament,decreament,reset} = CounterSlice.actions;
export default CounterSlice.reducer;
*/







// class code
const counterSlice = createSlice({
    name: 'counter', //name of the slice
    initialState: {
      count: 0 // this is the state with initial value
      //you can create more states 
    },
    reducers: {  //it's a function which update the state based on action type 
        
      increment: (state) => {   //increament action type
        state.count += 1;
      },
      decrement: (state) => { //decreament action type
        state.count -= 1;
      },
    },
  });
  

//Export actions and reducer
export const { increment, decrement} = counterSlice.actions;
export default counterSlice.reducer; // Export reducer to add it to store


import { configureStore } from '@reduxjs/toolkit'
import  CounterSlice from './CounterSlice'


/*
//my code
const Storage = configureStore({
    reducer:{
        manager:CounterSlice
    }
})

export default Storage;
*/







// class code
import counterReducer from './CounterSlice';

const store = configureStore({
  reducer: {
    manager:counterReducer
  }
});

export default store;

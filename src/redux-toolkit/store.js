
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counter/counterSlice'
import postSlice from './features/post/postSlice'
export const store = configureStore({
    reducer : {
        counter :  counterSlice,
        post : postSlice
    }
})
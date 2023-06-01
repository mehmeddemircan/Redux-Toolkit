
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counter/counterSlice'
import postSlice from './features/post/postSlice'
import userSlice from './features/user/userSlice'
import todoSlice from './features/todo/todoSlice'
export const store = configureStore({
    reducer : {
        counter :  counterSlice,
        post : postSlice,
        user : userSlice,
        todo : todoSlice
    }
})
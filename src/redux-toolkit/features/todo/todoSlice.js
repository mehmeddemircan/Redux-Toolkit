import { createSlice } from '@reduxjs/toolkit'
import { getAllTodo } from '../../actions/TodoActions';

const initialState = {
    data : [],
    loading : false ,
    success : false 
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers : (builder) => {
    builder
    .addCase(getAllTodo.pending,(state) => {
        state.loading = true;
    })
    .addCase(getAllTodo.fulfilled , (state,action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null 
    })
    .addCase(getAllTodo.rejected, (state,action) => {
        state.loading = false ;
        state.error = action.error.message
    })
  },
});



export default todoSlice.reducer
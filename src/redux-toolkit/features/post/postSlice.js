import { createSlice } from '@reduxjs/toolkit'
import { getAllPost } from '../../actions/PostActions';

const initialState = {
    data :  [],
    loading : false,
    success : false , 
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers : (builder) => {
    builder
    .addCase(getAllPost.pending,(state) => {
        state.loading = true;
    })
    .addCase(getAllPost.fulfilled , (state,action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null 
    })
    .addCase(getAllPost.rejected, (state,action) => {
        state.loading = false ;
        state.error = action.error.message
    })
  },
});



export default postSlice.reducer
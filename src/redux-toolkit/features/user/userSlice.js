import { createSlice } from '@reduxjs/toolkit'
import { getAllUser } from '../../actions/UserActions';

const initialState = {
    data : [],
    loading : false,
    success : false , 
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers : (builder) => {
    builder
    .addCase(getAllUser.pending,(state) => {
        state.loading = true;
    })
    .addCase(getAllUser.fulfilled , (state,action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null 
    })
    .addCase(getAllUser.rejected, (state,action) => {
        state.loading = false ;
        state.error = action.error.message
    })
  },
});



export default userSlice.reducer
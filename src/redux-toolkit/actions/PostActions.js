import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllPost = createAsyncThunk('post/getAllPost', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
});


import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllTodo = createAsyncThunk('getAllTodo', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
  return response.data;
});


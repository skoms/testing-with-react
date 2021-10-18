import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  posts: []
}

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts?_limit=10'
    );
    return response;
  }
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, { payload }) => {
      const result = state;
      result.posts = [...result.posts, payload];
      return result;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, { payload }) => {
      const result = state;
      if (payload.status === 200) result.posts = payload.data;
      return result;
    });
  }
})

export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;
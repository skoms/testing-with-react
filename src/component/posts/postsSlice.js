import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: []
}

export const getPosts = createAsyncThunk(
  '',
  async () => {

  }
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      const result = state;
      result.posts = [...result.posts, payload];
      return result;
    }
  }
})

export const { addTodo } = postsSlice.actions;

export default postsSlice.reducer;
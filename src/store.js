import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './component/posts/postsSlice';

export const reducers = {
  posts: postsReducer,
}

export const store = configureStore({
  reducer: reducers
});


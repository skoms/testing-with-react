import postsReducer, { addTodo, getPosts } from './postsSlice';

describe('Posts Reducer', () => {
  
  it('should return default state', () => {
      expect(
        postsReducer(undefined, {})
      ).toEqual({ posts: [] });
  });

  it('should return new state after adding new post', () => {
    const prevState = { posts: [] };
    expect(
      postsReducer(prevState, addTodo({ title: 'test 1' })).posts
    ).toEqual([{ title: 'test 1' }]);
  });
  
});
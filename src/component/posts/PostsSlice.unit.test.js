import postsReducer, { addPost, getPosts } from './postsSlice';

describe('Posts Reducer', () => {
  
  it('should return default state', () => {
      expect(
        postsReducer(undefined, {})
      ).toEqual({ posts: [] });
  });

  it('should handle adding new post to empty list', () => {
    const prevState = { posts: [] };
    expect(
      postsReducer(prevState, addPost({ title: 'test 1' })).posts
    ).toEqual([{ title: 'test 1' }]);
  });

  it('should handle adding new post to existing list', () => {
    const prevState = { 
      posts: [ 
        { title: 'test 0' } 
      ]
    };
    expect(
      postsReducer(prevState, addPost({ title: 'test 1' })).posts
    ).toEqual([ 
      { title: 'test 0' }, 
      { title: 'test 1' }
    ]);
  });
  
});
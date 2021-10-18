import moxios from 'moxios';
import { testStore } from '../utils/testing';
import { getPosts } from '../component/posts/postsSlice';

describe('getPosts Async Thunk', () => {
  
  beforeEach(() => {
    moxios.install();  
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should update the store correctly', () => {
    
    const expectedState = [
      {
        title: 'title 1',
        body: 'some text'
      },
      {
        title: 'title 1',
        body: 'some text'
      },
      {
        title: 'title 1',
        body: 'some text'
      }
    ]

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState
      })
    });

    return store.dispatch(getPosts())
      .then(() => {
        const newState = store.getState();
        expect(newState.posts.posts).toBe(expectedState);
      });

  });
  
});
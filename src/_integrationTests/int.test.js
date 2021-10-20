import React from 'react';
import moxios from 'moxios';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { testStore } from '../utils/testing';
import { getPosts } from '../component/posts/postsSlice';
import App from '../App';
import { Provider } from 'react-redux';

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

describe('Get Posts button disappears after click', () => {

  beforeEach(() => {
    render(
      <Provider store={testStore()}>
        <App />
      </Provider>
    );
  });
  

  it('hides the button after pressing it', () => {
    const button = screen.getByRole('button', /get posts/i);
    userEvent.click(button);
    expect(
      button
    ).not.toBeVisible();
  });
  
  
});
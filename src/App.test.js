import React from 'react';
import { render, screen } from '@testing-library/react';
import { testStore } from './utils/testing'
import App from './App';
import { Provider } from 'react-redux';

let store;

const renderComponent = (preloadedState = {}) => {
  store = testStore(preloadedState);
  render(
    <Provider store={store}>
      <App />
    </Provider>
  ) 
}

describe('App', () => {

  beforeEach(() => {
    const preloadedState = {
      posts: {
        posts: [{
          title: 'test title 1',
          body: 'test body'
        },{
          title: 'test title 2',
          body: 'test body'
        },{
          title: 'test title 3',
          body: 'test body'
        }]
      }
    }
    renderComponent(preloadedState);
  });

  it('should render without errors', () => {
    expect(
      screen.getByTestId('app-component')
    ).toBeInTheDocument();
  });
  

});
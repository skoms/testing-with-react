import React from 'react';
import { render, screen } from '@testing-library/react';
import { expectNoPropTypeErrors } from '../../utils/testing';
import Post from './Post';

describe('Post', () => {
  
  describe('checking prop types', () => {
    
    it('should not throw an error', () => {
      const expectedProps = {
        title: 'test title',
        desc: 'test description'
      }
      expectNoPropTypeErrors(Post, expectedProps);
    });
    

  });

  describe('renders', () => {

    beforeEach(() => {
      const props = {
        title: 'test title',
        desc: 'test description'
      }
      render(<Post {...props} />)
    });

    it('should render without error', () => {
      expect(
        screen.getByTestId('post-container')
      ).toBeInTheDocument();
    });

    it('should render a title', () => {
      expect(
        screen.getByRole('heading', { name: /test title/i })
      ).toBeInTheDocument();
    });

    it('should render a title', () => {
      expect(
        screen.getByTestId('desc-paragraph')
      ).toBeInTheDocument();
    });
    
  });

  describe('does not render', () => {
    beforeEach(() => {
      const props = {
        desc: 'test description'
      }
      render(<Post {...props} />)
    });

    it('should not render', () => {
      expect(
        screen.queryByTestId('post-container')
      ).toBeNull();
    });
    
    
  });

});
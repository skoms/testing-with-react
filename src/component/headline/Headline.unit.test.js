import React from 'react';
import { screen, render } from '@testing-library/react';
import { expectNoPropTypeErrors } from '../../utils/testing';
import Headline from './Headline';

const renderComponent = (props = {}) => {
  render(<Headline {...props} />);
}

describe('Headline', () => {

  describe('checking our prop types', () => {
    
    it('should not throw a warning', () => {
      
      const expectedProps = {
        header: 'test header',
        desc: 'test desc',
        tempArray: [{
          fName: 'test fname',
          lName: 'test lname',
          email: 'test email',
          age: 17,
          onlineStatus: true
        }]
      }

      expectNoPropTypeErrors(Headline, expectedProps);
    });

  });
  
  describe('Have props', () => {

    beforeEach(() => {
      renderComponent({
        header: 'test header',
        desc: 'test desc'
      });
    });

    it('should render without errors', () => {
      const wrapper = screen.getByTestId('headline-component');
      expect(wrapper).toBeInTheDocument();
    });
    
    it('should render an H1', () => {
      const h1 = screen.getByRole('heading');
      expect(h1).toBeInTheDocument();
    });

    it('should render a description', () => {
      const description = screen.getByText(/test desc/i);
      expect(description).toBeInTheDocument();
    });
    
  });


  describe('Does not have props', () => {

    beforeEach(() => {
      renderComponent();
    });

    it('should not render', () => {
      const headline = screen.queryByTestId('headline-component');
      expect(headline).toBeNull();
    });

  });

});

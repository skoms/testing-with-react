import React from 'react';
import { screen, render } from '@testing-library/react';
import Headline from './Headline';

const renderComponent = (props = {}) => {
  render(<Headline {...props} />);
}

describe('Headline', () => {
  
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

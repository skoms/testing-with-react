import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

const renderComponent = (props = {}) => {
  render(<Header {...props} />);
}

describe('Header', () => {

  beforeEach(() => {
    renderComponent();
  });

  it('should render without errors', () => {
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });
  

  it('should render the logo', () => {
    const logo = screen.getByRole('img');
    expect(logo).toBeVisible();
  });
  
})

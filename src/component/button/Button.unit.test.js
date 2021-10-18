import React from 'react';
import { render, screen } from '@testing-library/react';
import { expectNoPropTypeErrors } from '../../utils/testing'
import Button from './Button';

describe('Button', () => {
  
  describe('checking prop types', () => {
    
    it('should not throw a warning', () => {
      const expectedProps = {
        buttonText: 'test button text',
        emitEvent: () => {}
      }
      expectNoPropTypeErrors(Button, expectedProps);
    });
    

  });

  describe('Renders', () => {

    beforeEach(() => {
      const props = {
        buttonText: 'test button text',
        emitEvent: () => {}
      }
      render(<Button {...props} />)
    });

    it('should render a button', () => {
      expect(
        screen.getByRole('button')
      )
    });
    

  });

});
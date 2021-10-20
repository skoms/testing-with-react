import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expectNoPropTypeErrors } from '../../utils/testing'
import Button from './Button';

const clickHandler = jest.fn();

describe('Button', () => {
  
  describe('checking prop types', () => {
    
    it('should not throw a warning', () => {
      const expectedProps = {
        buttonText: 'test button text',
        emitEvent: clickHandler
      }
      expectNoPropTypeErrors(Button, expectedProps);
    });
    

  });

  describe('Renders', () => {

    beforeEach(() => {
      const props = {
        buttonText: 'test button text',
        emitEvent: clickHandler
      }
      render(<Button {...props} />)
    });

    it('should render a button', () => {
      expect(
        screen.getByRole('button')
      )
    });
    
  });

  describe('Event', () => {

    beforeEach(() => {
      const props = {
        buttonText: 'test button text',
        emitEvent: clickHandler
      }
      render(<Button {...props} />)
    });

    afterEach(() => {
      clickHandler.mockReset();
    });

    it('should call the emitEvent on click', () => {
      const button = screen.getByRole('button', { name: /test button text/i });
      userEvent.click(button);
      expect(
        clickHandler
      ).toHaveBeenCalled();
    });

    it('should call emitEvent the correct number of times', () => {
      const button = screen.getByRole('button', { name: /test button text/i });
      userEvent.click(button);
      userEvent.click(button);
      userEvent.click(button);
      expect(
        clickHandler
      ).toHaveBeenCalledTimes(3);
    });
    
    
  });

});
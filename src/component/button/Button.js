import React from 'react'
import PropTypes from 'prop-types';

const Button = ({ buttonText, emitEvent }) => {

  const submitEvent = (e) => {
    emitEvent && emitEvent(e)
  }

  return (
    <div>
      <button onClick={submitEvent}>
        {buttonText}
      </button>
    </div>
   
  )
}

Button.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func
}

export default Button

import React from 'react'
import PropTypes from 'prop-types'; 

const Headline = ({ header, desc }) => {

  if(!header) return null;

  return (
    <div data-testid='headline-component'>
      <h1>{header}</h1>
      <p>{desc}</p>
    </div>
  )
}

Headline.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  tempArray: PropTypes.arrayOf(PropTypes.shape({
    fName: PropTypes.string,
    lName: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    onlineStatus: PropTypes.bool,
  }))
}

export default Headline

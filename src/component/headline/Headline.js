import React from 'react'

const Headline = ({ header, desc }) => {

  if(!header) return null;

  return (
    <div data-testid='headline-component'>
      <h1>{header}</h1>
      <p>{desc}</p>
    </div>
  )
}

export default Headline

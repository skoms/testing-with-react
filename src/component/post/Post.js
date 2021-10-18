import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Post = ({ title, desc }) => {

  if (!title) return <Fragment />;

  return (
    <div data-testid='post-container'>
      <h2>{title}</h2>
      <p data-testid='desc-paragraph'>
        {desc}
      </p>
    </div>
  )
}

Post.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string
}

export default Post

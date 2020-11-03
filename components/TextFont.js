import React from 'react'
import PropTypes from 'prop-types'

const TextFont = ({ children }) => {
  return (
    <span style={{ fontFamily: 'Great Vibes', fontSize: '3.5rem' }}>
      {children}
    </span>
  )
}
TextFont.propTypes = {
  children: PropTypes.node
}
export default TextFont

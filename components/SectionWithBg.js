import React from 'react'
import PropTypes from 'prop-types'
const SectionWithBg = ({ children, bg, className }) => {
  return (
    <section className={className} style={{
      background: `url(${bg}) no-repeat center center`,
      backgroundSize: 'cover'
    }}>
      {children}
    </section>
  )
}

SectionWithBg.propTypes = {
  children: PropTypes.node,
  bg: PropTypes.string,
  className: PropTypes.string
}

export default SectionWithBg

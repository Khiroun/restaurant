import React from 'react'

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

export default SectionWithBg

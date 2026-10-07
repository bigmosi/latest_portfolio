import React from 'react'
import './Logo.css'
import { animateScroll } from 'react-scroll'

const Logo = () => {
  return (
    <a
    href='#hero'
    className='logo'
    onClick={(e) => {
      e.preventDefault();
      animateScroll.scrollToTop();
    }}
    >
        <span className='flex-center mark'>KA</span>
        <span className='name'>Kinyera Amos</span>
    </a>
  )
}

export default Logo

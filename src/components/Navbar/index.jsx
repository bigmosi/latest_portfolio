import React, { useState } from 'react'
import './Navbar.css'
import { tabs } from '../../sources'
import { Link } from 'react-scroll'
import Logo from '../../commons/Logo'
import { HiMenu } from 'react-icons/hi'
import { FaTimes } from 'react-icons/fa'
import SocialHandles from '../../commons/SocialHandles'

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <nav className='navbar flex'>
      {openSidebar ? <div className="overlay" onClick={() => setOpenSidebar(!openSidebar)} /> : '' }
      
    <Logo />
      <div className={`box flex-center tabs-group sidebar ${openSidebar ? 'visible' : ''}`}>
        <div 
        className="flex-center icon-wrapper cancel-btn"
        role="button"
        aria-label="Close menu"
        onClick={() => setOpenSidebar(!openSidebar)}
        >
          <FaTimes/> 
        </div>
        {tabs.map((tab, index) => (
          <Link
          to={tab.id}
          smooth={true}
          spy={true}
          offset={-70}
          className='tab'
          activeClass='active'
          key={index}
          onClick={() => setOpenSidebar(false)}
          >
          {tab.name}
          </Link>
        ))}
      </div>
      <SocialHandles />
      <div className='box flex-center buttons' >
        <Link
        to='contact'
        smooth={true}
        offset={-70}
        className='btn primary contact-btn'
        >
        Hire Me
        </Link>
        <div 
        className='flex-center icon-wrapper menu-btn'
        role="button"
        aria-label="Open menu"
        onClick={() => setOpenSidebar(!openSidebar)}
        >
          <HiMenu />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
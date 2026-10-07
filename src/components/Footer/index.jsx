import React from 'react'
import './Footer.css'
import Logo from '../../commons/Logo'
import SocialHandles from '../../commons/SocialHandles'
import { tabs, contactOptions } from '../../sources'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="wrapper">
        <div className="column">
          <Logo />
          <p className="muted tagline">
            Full Stack Developer building React, Node.js and mobile products used across Africa.
          </p>
          <SocialHandles />
        </div>
        <div className="column">
          <h3 className="muted title">Navigate</h3>
          {tabs.map((tab) => (
            <Link to={tab.id} smooth={true} offset={-70} className='route' key={tab.id}>
              {tab.name}
            </Link>
          ))}
        </div>
        <div className="column">
          <h3 className="muted title">Contact</h3>
          {contactOptions.map((option) => (
            option.href
              ? <a href={option.href} className='route' key={option.title}>{option.value}</a>
              : <span className='route static' key={option.title}>{option.value}</span>
          ))}
        </div>
      </div>
      <div className="flex-center copyright">
        <p className="muted">&copy; {new Date().getFullYear()} Kinyera Amos. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

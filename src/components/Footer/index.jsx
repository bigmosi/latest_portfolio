import React from 'react'
import './Footer.css'
import Logo from '../../commons/Logo'
import SocialHandles from '../../commons/SocialHandles'
import { footer } from '../../sources'
import { Link } from 'react-scroll'


const Footer = () => {
  return (
    <footer id='footer'>
      <div className="wrapper">
        <div className="column" data-aos='fade-down'>
          <Logo />
          <SocialHandles />
        </div>
        {
          footer.map((list,index) => (
            <div className="column" data-aos='fade-down' key={index}>
              <h3 className="muted title">{list.title}</h3>
              {
                list.routes.map((route,i) => (
                  <Link to={route.id || ''} smooth={true} className='route' key={index}>
                  {
                    route.name
                  }
                  </Link>
                ))
              }
            </div>
          ))
        }
      </div>
      <div className="flex-center copyright" data-aos='fade-zoom-in'>
        <h4>Copyright &copy; All rights reserved | 2024</h4>
        <p className="muted">Built with love by Amos a Developer</p>
      </div>
    </footer>
  )
}

export default Footer
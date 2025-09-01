import React from 'react'
import './Hero.css'
import me100 from '../../assets/me100.png'
import last from '../../assets/last.png'
import { Link } from 'react-scroll'
import Achievement from '../../commons/Achievement'

const Hero = () => {
  return (
    <section id='hero'>
      <div className="wrapper info-container">
        <div className="column">
          <h3 className='sub-title' data-aos='fade-right' data-aos-duration='1000'>
            Hi, I'm <span className="primary">Kinyera Amos</span>
          </h3>
          <h1 className="heading-1" data-aos='fade-up' data-aos-duration='1000'>
            A <span className="gradient-text">Fullstack</span>Web Developer
          </h1>
          <p className="muted" data-aos='fade-up' data-aos-duration='2000'> 
            who combines technical expertise with a creative flair to build captivating online experiences. With a mastery of coding languages and a passion for innovation, I transform ideas into beautifully functional websites.
          </p>
          <div className="flex-center buttons-wrapper">
            <Link 
            to='services' 
            smooth={true}
            className='btn primary'
            data-aos='fade-left' data-aos-delay='2000' data-aos-offset='50'
            >
              Learn More
            </Link>
            <Link 
            to='contact' 
            smooth={true}
            className='btn'
            data-aos='fade-left' data-aos-delay='1500' data-aos-offset='50'
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="column hero-image" data-aos='fade-left' data-aos-delay='200'>
            <img src={last} alt="me" />
        </div>
      </div>
      <div className="achievement-cluster">
        <div className="wrapper">
          <Achievement />
        </div>
      </div>
    </section>
  )
}

export default Hero
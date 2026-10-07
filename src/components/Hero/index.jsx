import React from 'react'
import './Hero.css'
import portrait from '../../assets/pic1212.png'
import { Link } from 'react-scroll'
import Achievement from '../../commons/Achievement'

const Hero = () => {
  return (
    <section id='hero'>
      <div className="wrapper info-container">
        <div className="column">
          <span className="availability" data-aos='fade-right'>
            <span className="dot" /> Open to remote roles & contracts
          </span>
          <h3 className='sub-title' data-aos='fade-right' data-aos-duration='1000'>
            Hi, I'm <span className="primary">Kinyera Amos</span>
          </h3>
          <h1 className="heading-1" data-aos='fade-up' data-aos-duration='1000'>
            <span className="gradient-text">Full Stack</span> Developer
          </h1>
          <p className="muted intro" data-aos='fade-up' data-aos-duration='1000'>
            I ship web and mobile apps that people actually use — React, TypeScript and TanStack on the
            frontend, Node.js and PostgreSQL on the backend, React Native and Flutter for mobile. Six years
            of NGO platforms, ERPs, marketplaces and civic tech, from first commit to production.
          </p>
          <div className="flex-center buttons-wrapper">
            <Link to='projects' smooth={true} offset={-70} className='btn primary'>
              View My Work
            </Link>
            <Link to='contact' smooth={true} offset={-70} className='btn'>
              Get in Touch
            </Link>
          </div>
          <Achievement />
        </div>
        <div className="column hero-image" data-aos='fade-left' data-aos-delay='200'>
          <img src={portrait} alt="Kinyera Amos" />
        </div>
      </div>
    </section>
  )
}

export default Hero

import React from 'react'
import './Services.css'
import { services } from '../../sources'
import { Link } from 'react-scroll'

const Services = () => {
  return (
    <section id='services'>
      <div className="wrapper">
        <div className="section-header">
          <h1 className="heading-1" data-aos='fade-up' data-aos-duration='1000'>
            <span className="gradient-text">Services</span>
          </h1>
          <h4 className="sub-title muted" data-aos='fade-down' data-aos-duration='1000'>
          I create captivating user interfaces that not only showcase your brand's essence but also provides an intuitive and delightful journey for your visitors. 
          I bring your story to life with words and visuals that speak directly to the hearts of your audience. By understanding your unique voice and objectives.
          When it comes to full-stack development, I possess the skills to turn your dreams into a fully functional reality. From crafting responsive websites to building powerful web applications,
          </h4>
        </div>
        <div className="services-container">
          {
            services.map((service, index) => (
              <div className="service" data-aos='fade-left' data-aos-duration='2000' key={index}>
                <div className="flex-center icon-wrapper">
                  {service.icon}
                </div>
                <div className="details">
                  <h3 className="name gradient-text"> {service.name} </h3>
                  <p className="muted"> {service.description} </p>
                </div>
                <div className="flex buttons-wrapper">
                  <button className="btn">Read More</button>
                  <Link to='contact' smooth={true} className='btn ' >Get Started</Link>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Services
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
            <span className="gradient-text">What I Can Do For You</span>
          </h1>
          <p className="sub-title muted" data-aos='fade-up' data-aos-duration='1000'>
            Whether you need a full product built, an API behind your app, a dashboard your team will actually
            enjoy using, or a mobile app that keeps working offline — I can own it from first commit to production.
          </p>
        </div>
        <div className="services-container">
          {
            services.map((service) => (
              <div className="service" data-aos='fade-up' data-aos-duration='800' key={service.name}>
                <div className="flex-center icon-wrapper">
                  {service.icon}
                </div>
                <div className="details">
                  <h3 className="name gradient-text">{service.name}</h3>
                  <p className="muted">{service.description}</p>
                </div>
              </div>
            ))
          }
        </div>
        <div className="flex-center cta" data-aos='fade-up'>
          <Link to='contact' smooth={true} offset={-70} className='btn primary'>Discuss Your Project</Link>
        </div>
      </div>
    </section>
  )
}

export default Services

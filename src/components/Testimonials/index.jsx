import React, { useRef } from 'react'
import './Testimonials.css'
import Slider from 'react-slick'
import { clients } from '../../sources'
import { FaStar } from 'react-icons/fa6'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'

const Testimonials = () => {
  const ref = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    pauseOnHover:true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  return (
    <section id='testimonials'>
      <div className="wrapper">
        <div className="section-header">
          <h1 className="heading-1" data-aos='fade-up' data-aos-duration='1000'>
            <span className="gradient-text">Testimonials</span>
          </h1>
          <h4 className="sub-title" data-aos='fade-up' data-aos-duration='1000'>What my clients are saying</h4>
        </div>
        <Slider {...settings} className='testimonials-container' ref={ref}>
          {
            clients.map((list, index) => (
              <React.Fragment key={index}>
                <div className="flex">
                  <div className="profile">
                    <img src={list.image} alt={list.name} />
                  </div>
                  <div className="details">
                    <h3 className="name">
                      {list.name}
                    </h3>
                    <small className="muted">Director Sairo LMS</small>
                    <p className="muted content">{list.review}</p>
                    <div className="stars-container">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))
          }
        </Slider>
        <div className="flex-center buttons-container">
          <button 
          onClick={() => ref.current.slickPrev()}
          className="flex-center btn">
            <FaLongArrowAltLeft />
          </button>
          <button 
          onClick={() => ref.current.slickNext()}
          className="flex-center btn">
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
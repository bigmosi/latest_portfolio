import React, { useRef } from 'react';
import './Contact.css'
import {contactOptions} from '../../sources'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const clearForm = () => {
    form.current.reset();
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5fhni6l', 'template_tl4meir', form.current, {
        publicKey: '5y582uX0EBJrUO9q5',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          clearForm(); // Clear the form after successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id='contact' data-aos='fade-zoom-in'>
      <div className="wrapper">
        <div className="contact-options">
          {
            contactOptions.map((option, index) => (
              <div className="flex-center option" data-aos='fade-right' key={index}>
                <div className="flex-center icon-wrapper">
                  {option.icon}
                </div>
                <h4 className="muted"> {option.title}</h4>
                <h3 className="value">{option.value}</h3>
              </div>
            ))
          }
        </div>
        <div className="contact-form" data-aos='fade-up'>
          <div className="top">
            <h1 className="title">
              <span className="gradient-text">
                about me              </span>
            </h1>
            <p className="muted">
              I tell your story. <br />With creativity, passion and expertise, I breathe life into your brand establishing your digital foot print
            </p>
          </div>
          <form ref={form} onSubmit={sendEmail}>
              <div className="middle">
                <div className="flex row">
                  <input type="text" placeholder='First name' name='firstname' className='control' />
                  <input type="text" placeholder='Last name' name='lastname' className='control' />
                </div>
                <div className="flex row">
                  <input type="email" placeholder='Email address' name='email' className='control' />
                  <input type="tel" placeholder='Phone number' name='phone' className='control' />
                </div>
                <textarea name="message" cols={30} rows={10} placeholder='Message' className='control'></textarea>
              </div>
              <div className="flex-center bottom">
                <button type="submit" value="Send" className='btn primary'>Send Now</button>
              </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
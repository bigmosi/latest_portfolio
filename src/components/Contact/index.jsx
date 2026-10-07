import React, { useRef, useState } from 'react';
import './Contact.css'
import {contactOptions} from '../../sources'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm('service_5fhni6l', 'template_tl4meir', form.current, {
        publicKey: '5y582uX0EBJrUO9q5',
      })
      .then(
        () => {
          setStatus('success');
          form.current.reset();
        },
        () => {
          setStatus('error');
        },
      );
  };
  return (
    <section id='contact'>
      <div className="wrapper">
        <div className="contact-options">
          {
            contactOptions.map((option) => {
              const content = (
                <>
                  <div className="flex-center icon-wrapper">
                    {option.icon}
                  </div>
                  <h4 className="muted">{option.title}</h4>
                  <h3 className="value">{option.value}</h3>
                </>
              );
              return option.href ? (
                <a href={option.href} className="flex-center option" data-aos='fade-up' key={option.title}>
                  {content}
                </a>
              ) : (
                <div className="flex-center option" data-aos='fade-up' key={option.title}>
                  {content}
                </div>
              );
            })
          }
        </div>
        <div className="contact-form" data-aos='fade-up'>
          <div className="top">
            <h1 className="title">
              <span className="gradient-text">Let's Work Together</span>
            </h1>
            <p className="muted">
              Hiring for a full stack role, or need a web app, API or mobile app built?
              Send me a few details and I'll get back to you within 24 hours.
            </p>
          </div>
          <form ref={form} onSubmit={sendEmail}>
              <div className="middle">
                <div className="flex row">
                  <input type="text" placeholder='First name' name='firstname' className='control' aria-label='First name' required />
                  <input type="text" placeholder='Last name' name='lastname' className='control' aria-label='Last name' />
                </div>
                <div className="flex row">
                  <input type="email" placeholder='Email address' name='email' className='control' aria-label='Email address' required />
                  <input type="tel" placeholder='Phone number (optional)' name='phone' className='control' aria-label='Phone number' />
                </div>
                <textarea name="message" cols={30} rows={8} placeholder='Tell me about the role or project' className='control' aria-label='Message' required></textarea>
              </div>
              <div className="flex-center bottom">
                <button type="submit" className='btn primary' disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
                {status === 'success' && (
                  <p className="form-status success" role="status">Thanks — your message has been sent. I'll be in touch soon.</p>
                )}
                {status === 'error' && (
                  <p className="form-status error" role="alert">
                    Something went wrong. Please email me directly at <a href="mailto:kinyeramo@gmail.com">kinyeramo@gmail.com</a>.
                  </p>
                )}
              </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

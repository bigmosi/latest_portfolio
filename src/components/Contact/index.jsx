import React, { useRef, useState } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';
import { profile } from '../../sources'

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
    <section id='contact' className='section' aria-label='Contact'>
      <h2 className="section-title">Contact</h2>
      <h3 className="contact-heading">Let's build something</h3>
      <p>
        I'm open to full stack and senior front-end roles (remote or in Uganda) and to contract work on
        web apps, APIs and mobile apps. The fastest way to reach me is email — I reply within a day.
      </p>
      <div className="contact-direct">
        <a href={`mailto:${profile.email}`} className="contact-btn">{profile.email}</a>
        <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="text-link">{profile.phone}</a>
      </div>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="row">
          <label>
            <span>Name</span>
            <input type="text" name='firstname' autoComplete="name" required />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name='email' autoComplete="email" required />
          </label>
        </div>
        <label>
          <span>Message</span>
          <textarea name="message" rows={5} placeholder='Tell me about the role or project' required></textarea>
        </label>
        <div className="form-footer">
          <button type="submit" className='submit' disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>
          {status === 'success' && (
            <p className="form-status success" role="status">Thanks — your message is on its way.</p>
          )}
          {status === 'error' && (
            <p className="form-status error" role="alert">
              That didn't go through. Please email me at <a className="text-link" href={`mailto:${profile.email}`}>{profile.email}</a>.
            </p>
          )}
        </div>
      </form>
    </section>
  )
}

export default Contact

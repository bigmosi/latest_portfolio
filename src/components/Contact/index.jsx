import React, { useState } from 'react';
import './Contact.css'
import { profile } from '../../sources'
import { trackEvent } from '../../analytics'

const Contact = () => {
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!profile.formspreeId) {
      setErrorMessage('The contact form isn\'t connected yet.');
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(`https://formspree.io/f/${profile.formspreeId}`, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        setStatus('success');
        trackEvent('generate_lead', { method: 'contact_form' });
        form.reset();
        return;
      }
      const data = await response.json().catch(() => ({}));
      setErrorMessage(data.errors?.map((err) => err.message).join(', ') || 'That didn\'t go through.');
      setStatus('error');
    } catch {
      setErrorMessage('That didn\'t go through — check your connection.');
      setStatus('error');
    }
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

      <form onSubmit={sendEmail} className="contact-form">
        <input type="hidden" name="_subject" value="New message from your portfolio" />
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="honeypot" aria-hidden="true" />
        <div className="row">
          <label>
            <span>Name</span>
            <input type="text" name='name' autoComplete="name" required />
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
              {errorMessage} Please email me at <a className="text-link" href={`mailto:${profile.email}`}>{profile.email}</a>.
            </p>
          )}
        </div>
      </form>
    </section>
  )
}

export default Contact

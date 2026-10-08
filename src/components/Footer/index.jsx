import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="site-footer">
      <p>
        Designed and built by Kinyera Amos with React and Vite, deployed on Netlify. Layout inspired by{' '}
        <a className="text-link" href="https://brittanychiang.com" target="_blank" rel="noopener noreferrer">Brittany Chiang</a>.
        © {new Date().getFullYear()}.
      </p>
    </footer>
  )
}

export default Footer

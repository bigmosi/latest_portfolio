import React from 'react'
import './SocialHandles.css'
import { socialHandles } from '../../sources'

const SocialHandles = () => {
  return (
    <div className="handles-container">
        {socialHandles.map((handle) => (
            <a
            href={handle.link}
            key={handle.name}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={handle.name}
            title={handle.name}
            className='flex-center icon-wrapper'
            >
                {handle.icon}
            </a>
        ) )}
    </div>
  )
}

export default SocialHandles

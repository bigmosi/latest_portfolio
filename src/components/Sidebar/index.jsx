import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import portrait from '../../assets/pic1212.png'
import { profile, sections, socialHandles } from '../../sources'
import { FiArrowUpRight } from 'react-icons/fi'

const useActiveSection = (ids) => {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])

  return active
}

const sectionIds = sections.map((s) => s.id)

const Sidebar = () => {
  const active = useActiveSection(sectionIds)

  return (
    <header className="sidebar">
      <div>
        <img src={portrait} alt="" className="avatar" />
        <h1 className="name">
          <a href="/">{profile.name}</a>
        </h1>
        <h2 className="title">{profile.title}</h2>
        <p className="tagline">{profile.tagline}</p>
        <p className="availability">
          <span className="dot" aria-hidden="true" /> {profile.location}
        </p>

        <nav className="nav" aria-label="In-page">
          <ul>
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={active === section.id ? 'active' : ''}
                  aria-current={active === section.id ? 'true' : undefined}
                >
                  <span className="line" />
                  <span className="label">{section.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="sidebar-footer">
        <ul className="socials" aria-label="Social media">
          {socialHandles.map((handle) => (
            <li key={handle.name}>
              <a
                href={handle.link}
                target={handle.link.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={handle.name}
                title={handle.name}
              >
                {handle.icon}
              </a>
            </li>
          ))}
        </ul>
        <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="resume-btn">
          Résumé <FiArrowUpRight />
        </a>
      </div>
    </header>
  )
}

export default Sidebar

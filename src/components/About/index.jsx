import React from 'react'
import './About.css'
import { skills, education } from '../../sources'

const About = () => {
  return (
    <section id="about" className="section" aria-label="About me">
      <h2 className="section-title">About</h2>
      <p>
        I'm a full stack developer with six years of experience shipping web and mobile apps that people
        rely on every day. Right now I'm a Senior Front-End Developer at{' '}
        <a className="text-link" href="https://raisingthevillage.org" target="_blank" rel="noopener noreferrer">Raising The Village</a>,
        building the system field teams use to track development work with households across four
        countries. I'm also on the team behind{' '}
        <a className="text-link" href="https://nyumbanapp.com" target="_blank" rel="noopener noreferrer">NyumbanApp</a>,
        a rental platform for Uganda, where I own the payments, refunds and agreement flows.
      </p>
      <p>
        Before that I led the frontend of a utility ERP running at water utilities in Nigeria, Ethiopia
        and South Sudan, helped ship{' '}
        <a className="text-link" href="https://claritydesk.org" target="_blank" rel="noopener noreferrer">ClarityDesk</a>,
        an offline-first civic app for South Sudan's elections, and owned a grocery marketplace end to end.
        Much of what I build has to work on cheap phones and patchy connections, which keeps me honest about
        performance.
      </p>
      <p>
        I work across the stack — React, TypeScript and the TanStack ecosystem on the frontend; Node.js,
        NestJS and PostgreSQL behind it; React Native and Flutter for mobile — and I care about writing code
        other developers can read and extend without headaches.
      </p>

      <dl className="skills">
        {skills.map((group) => (
          <div className="skill-row" key={group.title}>
            <dt>{group.title}</dt>
            <dd>{group.items}</dd>
          </div>
        ))}
      </dl>

      <ul className="education">
        {education.map((item) => (
          <li key={item.title}>
            <span className="edu-title">{item.title}</span>
            <span className="card-sub"> · {item.school} · {item.period}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default About

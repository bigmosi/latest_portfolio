import React from 'react'
import './Experience.css'
import { experience, education } from '../../sources'

const Experience = () => {
  return (
    <section id='experience'>
      <div className="wrapper">
        <div className="section-header">
          <h1 className="heading-1" data-aos='fade-up'>
            <span className="gradient-text">Experience</span>
          </h1>
          <p className="sub-title muted" data-aos='fade-up'>
            Six years building products for NGOs, utilities, start-ups and marketplaces.
          </p>
        </div>
        <ol className="timeline">
          {experience.map((job) => (
            <li className="job" key={`${job.company}-${job.period}`} data-aos='fade-up'>
              <span className="marker" />
              <div className="job-card">
                <div className="job-header">
                  <div>
                    <h3 className="role">{job.role}</h3>
                    <h4 className="company primary">{job.company}</h4>
                  </div>
                  <div className="meta">
                    <span className="period">{job.period}</span>
                    <span className="muted location">{job.location}</span>
                  </div>
                </div>
                <ul className="points">
                  {job.points.map((point, index) => (
                    <li className="muted" key={index}>{point}</li>
                  ))}
                </ul>
                <div className="chips">
                  {job.stack.map((tech) => (
                    <span className="chip" key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="education" data-aos='fade-up'>
          <h3 className="education-title">Education</h3>
          <div className="education-grid">
            {education.map((item) => (
              <div className="education-item" key={item.title}>
                <h4>{item.title}</h4>
                <p className="muted">{item.school} · {item.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

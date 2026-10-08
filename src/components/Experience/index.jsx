import React from 'react'
import './Experience.css'
import { experience, profile } from '../../sources'
import { FiArrowUpRight } from 'react-icons/fi'

const Experience = () => {
  return (
    <section id="experience" className="section" aria-label="Work experience">
      <h2 className="section-title">Experience</h2>
      <ol className="card-list">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`}>
            <article className="card">
              <p className="period">{job.period}</p>
              <div>
                <h3 className="card-title">
                  {job.url ? (
                    <a href={job.url} target="_blank" rel="noopener noreferrer" aria-label={`${job.role} at ${job.company} (opens in a new tab)`}>
                      <span>{job.role} · {job.company}</span>
                      <FiArrowUpRight />
                    </a>
                  ) : (
                    <span>{job.role} · {job.company}</span>
                  )}
                </h3>
                <p className="card-body">{job.summary}</p>
                <ul className="chips" aria-label="Technologies used">
                  {job.stack.map((tech) => (
                    <li className="chip" key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ol>
      <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="arrow-link resume-link">
        View Full Résumé <FiArrowUpRight />
      </a>
    </section>
  )
}

export default Experience

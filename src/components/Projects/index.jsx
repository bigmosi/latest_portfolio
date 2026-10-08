import React from 'react'
import './Projects.css'
import { featuredProjects, archive } from '../../sources'
import { FiArrowUpRight } from 'react-icons/fi'

const Projects = () => {
  return (
    <section id="projects" className="section" aria-label="Selected projects">
      <h2 className="section-title">Projects</h2>
      <ul className="card-list">
        {featuredProjects.map((project) => (
          <li key={project.title}>
            <article className="card project">
              <div className="thumb">
                {project.image ? (
                  <img src={project.image} alt="" loading="lazy" />
                ) : (
                  <span className="thumb-placeholder" aria-hidden="true">RTV</span>
                )}
              </div>
              <div>
                <h3 className="card-title">
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} (opens in a new tab)`}>
                      <span>{project.title}</span>
                      <FiArrowUpRight />
                    </a>
                  ) : (
                    <span>{project.title}</span>
                  )}
                </h3>
                <p className="card-body">{project.description}</p>
                {project.note && <p className="card-body card-sub">{project.note}</p>}
                {project.links && (
                  <div className="inner-links">
                    {project.links.map((link) => (
                      <a href={link.url} target="_blank" rel="noopener noreferrer" key={link.url}>
                        {link.label} <FiArrowUpRight />
                      </a>
                    ))}
                  </div>
                )}
                <ul className="chips" aria-label="Technologies used">
                  {project.stack.map((tech) => (
                    <li className="chip" key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <h3 className="archive-title">More projects</h3>
      <table className="archive">
        <thead>
          <tr>
            <th scope="col">Year</th>
            <th scope="col">Project</th>
            <th scope="col" className="hide-sm">Made at</th>
            <th scope="col" className="hide-md">Built with</th>
          </tr>
        </thead>
        <tbody>
          {archive.map((item) => (
            <tr key={item.title}>
              <td className="year">{item.year}</td>
              <td className="project-name">
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.title} <FiArrowUpRight />
                  </a>
                ) : item.title}
              </td>
              <td className="hide-sm">{item.madeAt || '—'}</td>
              <td className="hide-md">{item.stack.join(' · ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default Projects

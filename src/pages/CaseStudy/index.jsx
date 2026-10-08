import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import { caseStudies, getCaseStudy } from '../../caseStudies'
import './CaseStudy.css'

const CaseStudy = () => {
  const { slug } = useParams()
  const study = getCaseStudy(slug)

  useEffect(() => {
    document.title = study
      ? `${study.title} — Case study · Kinyera Amos`
      : 'Case study not found · Kinyera Amos'
    return () => {
      document.title = 'Kinyera Amos — Full Stack Developer (React, Node.js, TypeScript)'
    }
  }, [study])

  if (!study) {
    return (
      <main id="content" className="case-study">
        <Link to="/#projects" className="back-link"><FiArrowLeft /> Kinyera Amos</Link>
        <h1 className="cs-title">Case study not found</h1>
        <p>That page doesn't exist. <Link className="text-link" to="/#projects">See all projects</Link>.</p>
      </main>
    )
  }

  const index = caseStudies.indexOf(study)
  const next = caseStudies[(index + 1) % caseStudies.length]

  return (
    <main id="content" className="case-study">
      <Link to="/#projects" className="back-link"><FiArrowLeft /> Kinyera Amos</Link>

      <p className="cs-eyebrow">Case study</p>
      <h1 className="cs-title">{study.title}</h1>
      <p className="cs-tagline">{study.tagline}</p>

      <dl className="cs-facts">
        <div><dt>Role</dt><dd>{study.role}</dd></div>
        <div><dt>Timeline</dt><dd>{study.period}</dd></div>
        <div className="wide"><dt>Team</dt><dd>{study.team}</dd></div>
        <div className="wide">
          <dt>Stack</dt>
          <dd>
            <ul className="chips">
              {study.stack.map((tech) => <li className="chip" key={tech}>{tech}</li>)}
            </ul>
          </dd>
        </div>
        {study.links?.length > 0 && (
          <div className="wide">
            <dt>Links</dt>
            <dd className="cs-links">
              {study.links.map((link) => (
                <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="arrow-link">
                  {link.label} <FiArrowUpRight />
                </a>
              ))}
            </dd>
          </div>
        )}
      </dl>

      <figure className="cs-hero">
        {study.image ? (
          <img src={study.image} alt={`${study.title} screenshot`} />
        ) : (
          <div className="cs-hero-placeholder" aria-hidden="true">{study.title}</div>
        )}
      </figure>

      <section className="cs-section">
        <h2>Overview</h2>
        <p>{study.overview}</p>
      </section>

      <section className="cs-section">
        <h2>The problem</h2>
        <p>{study.problem}</p>
      </section>

      <section className="cs-section">
        <h2>What I built</h2>
        <div className="cs-grid">
          {study.contributions.map((item) => (
            <div className="cs-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {study.webScreens && (
        <section className="cs-section">
          <h2>Web app</h2>
          <div className="cs-screens cs-screens--web">
            {study.webScreens.map((screen) => (
              <figure key={screen.src}>
                <img src={screen.src} alt={`${study.title} ${screen.caption.toLowerCase()} screen`} loading="lazy" />
                <figcaption>{screen.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {(study.video || study.screens) && (
        <section className="cs-section">
          <h2>Mobile app</h2>
          {study.video && (
            <figure className="cs-video">
              <video src={study.video.src} poster={study.video.poster} controls muted playsInline preload="none" />
              <figcaption>{study.video.caption}</figcaption>
            </figure>
          )}
          {study.screens && (
            <div className="cs-screens" style={{ "--cols": study.screens.length === 4 ? 4 : 3 }}>
              {study.screens.map((screen) => (
                <figure key={screen.src}>
                  <img src={screen.src} alt={`${study.title} ${screen.caption.toLowerCase()} screen`} loading="lazy" />
                  <figcaption>{screen.caption}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </section>
      )}

      <section className="cs-section">
        <h2>Key decisions</h2>
        <ol className="cs-decisions">
          {study.decisions.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="cs-section">
        <h2>Outcome</h2>
        <p>{study.outcome}</p>
      </section>

      {import.meta.env.DEV && study.todo?.length > 0 && (
        <aside className="cs-todo" aria-label="Draft notes">
          <strong>To fill in before publishing</strong> <span>(only visible in development)</span>
          <ul>
            {study.todo.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </aside>
      )}

      <nav className="cs-next" aria-label="More case studies">
        <Link to="/#projects" className="arrow-link"><FiArrowLeft /> All projects</Link>
        {next !== study && (
          <Link to={`/work/${next.slug}`} className="arrow-link next">
            Next: {next.title} <FiArrowRight />
          </Link>
        )}
      </nav>
    </main>
  )
}

export default CaseStudy

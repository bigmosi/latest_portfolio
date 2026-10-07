import React from 'react'
import './ProjectCard.css'
import { FiArrowUpRight } from 'react-icons/fi'

const ProjectCard = ({
    title,image,category,description,stack,links = [],note,className,
}) => {
  return (
    <article className={`project-card ${className ? className:''}`}>
        <div className="picture">
            {image ? (
                <img src={image} alt={`${title} screenshot`} loading="lazy" />
            ) : (
                <div className="flex-center placeholder">
                    <span className="placeholder-title">{title.split(' — ')[0]}</span>
                </div>
            )}
            <span className="category">{category}</span>
        </div>
        <div className="details">
            <h2 className="title">{title}</h2>
            <p className="muted description">{description}</p>
            <div className="chips">
                {stack.map((tech) => (
                    <span className="chip" key={tech}>{tech}</span>
                ))}
            </div>
            <div className="footer">
                {links.length > 0 ? (
                    <div className="links">
                        {links.map((link, index) => (
                            <a
                            href={link.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className={`btn ${index === 0 ? 'primary' : ''}`}
                            key={link.url}
                            >
                                {link.label} <FiArrowUpRight />
                            </a>
                        ))}
                    </div>
                ) : (
                    <span className="muted note">{note || 'Private client project'}</span>
                )}
                {links.length > 0 && note && <span className="muted note">{note}</span>}
            </div>
        </div>
    </article>
  )
}

export default ProjectCard

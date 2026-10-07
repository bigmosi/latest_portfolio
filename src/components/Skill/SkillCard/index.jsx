import React from 'react'
import './SkillCard.css'

const SkillCard = ({data, title}) => {
  return (
    <div className='skill-card' data-aos='fade-up' data-aos-duration='800'>
        <h3 className="title gradient-text">
            {title}
        </h3>
        <div className="chips">
            {
                data.map((skill) => (
                    <span className="chip" key={skill}>{skill}</span>
                ))
            }
        </div>
    </div>
  )
}

export default SkillCard

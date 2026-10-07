import React, { useEffect, useState } from 'react'
import './Achievement.css'
import Odometer from 'react-odometerjs'
import { stats } from '../../sources'

const Achievement = () => {
    const [values, setValues] = useState(stats.map(() => 0));

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            setValues(stats.map((stat) => stat.value));
        }, 800)

        return () => clearTimeout(timeOutId);
    }, [])
  return (
    <div className='achievement-container'>
        {stats.map((stat, index) => (
            <div className="card" key={stat.label}>
                <div className="flex-center">
                    <Odometer value={values[index]} className='title'/>
                    {stat.suffix && <span className="title">{stat.suffix}</span>}
                </div>
                <p className="muted name">{stat.label}</p>
            </div>
        ))}
    </div>
  )
}

export default Achievement

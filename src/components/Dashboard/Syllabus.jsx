import React from 'react'
import './Dashboard.css'
import { Line } from 'rc-progress'

const Syllabus = () => {
  return (
    <div className='syllabus__div'>

              <p className='progress__heading'>HTML Tools, Forms, History</p>
              <div className='progress__div'>
              <Line percent={80} strokeWidth={5} trailWidth={5} strokeColor="#438AF6" trailColor='#C3D6F3' style={{width:'60%'}}/>
                <p className='progress__percentage'>80%</p>
              </div>
            </div>
  )
}

export default Syllabus

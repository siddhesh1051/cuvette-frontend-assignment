import React from 'react'
import './Dashboard.css'
import HTML from '../../assets/img/html.svg'
import { Line } from 'rc-progress'
import Syllabus from './Syllabus'
const Dashboard = () => {
  return (
    <div className='dashboard__container'>
      <div className='dashboard__item1'>
        <div className='skill__div'>

          <p className='skill__heading'>Skill test</p>
        </div>

        <div className='html__div'>
          <div className='html__content'>

            <img src={HTML} alt="" width={36} height={50} />
            <div className='html__innerDiv'>
              <p className='html__heading'>Hypertext Markup Language</p>
              <p className='html__para'>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
            </div>
          </div>
          <button className='html__button'>
            Update
          </button>

        </div>

        <div className='stat__container'>
          <p className='stat__heading'>Quick Statistics</p>
          <div className='stat__grid'>

            <div className='stat__item'>
              <div className='stat__icon'>
              <span className='emoji'>🏆</span>
              </div>
              <div className='stat__box'>
                <p className='stat__number'>12,890</p>
                <p className='stat__type'>YOUR RANK</p>
              </div>
            </div>
            <div className='stat__item'>
              <div className='stat__icon'>
              <span className='emoji'>📋</span>
              </div>
              <div className='stat__box'>
                <p className='stat__number'>37%</p>
                <p className='stat__type'>PERCENTILE</p>
              </div>
            </div>
            <div className='stat__item' id='stat__last__item'>
              <div className='stat__icon'>
              <span className='emoji'>✅</span>
              </div>
              <div className='stat__box'>
                <p className='stat__number'>07 / 15</p>
                <p className='stat__type'>CORRECT ANSWERS</p>
              </div>
            </div>
          </div>

          </div>

          <div className='comp__conatiner'>

            <p className='comp__heading'>Comparison Graph</p>
            <div className='comp__para__div'>

            <p className='comp__para'><span style={{fontWeight:700}}>You scored 37% percentile </span> which is lower than the average percentile 72% of all the engineers who took this assessment</p>
            <div className='stat__icon'>
              <span className='emoji'>📈</span>
              </div>
            </div>
            


            <div className='comp__graph'>
              Graph
            </div>

        </div>



      </div>
      <div className='dashboard__item2'>
        <div className='progress__container'>
            <p className='syllabus__heading'>Syllabus wise Analysis</p>
            <Syllabus/>
            <Syllabus/>
            <Syllabus/>
            <Syllabus/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

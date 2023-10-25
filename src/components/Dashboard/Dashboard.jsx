import React, { useState } from 'react'
import './Dashboard.css'
import HTML from '../../assets/img/html.svg'
import Syllabus from './Syllabus'
import { PieChart, Pie, Cell, ReferenceLine } from 'recharts';

import { LineChart, Line, XAxis, Tooltip} from 'recharts';
const graphData = [
  {
    name: '0%',
    value: 24,
  },
  {
    name: '20%',
    value: 13,
  },
  {
    name: '40%',
    value: 98,
  },
  {
    name: '60%',
    value: 39,
  },
  {
    name: '80%',
    value: 48,
  },
  {
    name: '100%',
    value: 38,
  },

];
const COLORS = ['rgba(67, 138, 246, 1)', 'rgba(67, 138, 246, 0.1)'];


const Dashboard = ({ setModalOpen, modalOpen, rank, percentile, correctAnswers }) => {



  const [data, setData] = useState([
    { name: 'Group A', value: correctAnswers },
    { name: 'Group B', value: 15 - correctAnswers },
  ])



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
          <button className='html__button openModalBtn'
        onClick={() =>{ setModalOpen(!modalOpen);console.log(modalOpen)}}>
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
                <p className='stat__number'>{rank}</p>
                <p className='stat__type'>YOUR RANK</p>
              </div>
            </div>
            <div className='stat__item'>
              <div className='stat__icon'>
                <span className='emoji'>📋</span>
              </div>
              <div className='stat__box'>
                <p className='stat__number'>{percentile}%</p>
                <p className='stat__type'>PERCENTILE</p>
              </div>
            </div>
            <div className='stat__item' id='stat__last__item'>
              <div className='stat__icon'>
                <span className='emoji'>✅</span>
              </div>
              <div className='stat__box'>
                <p className='stat__number'>{correctAnswers} / 15</p>
                <p className='stat__type'>CORRECT ANSWERS</p>
              </div>
            </div>
          </div>

        </div>

        <div className='comp__conatiner'>

          <p className='comp__heading'>Comparison Graph</p>
          <div className='comp__para__div'>

            <p className='comp__para'><span style={{ fontWeight: 700 }}>You scored 37% percentile </span> which is lower than the average percentile 72% of all the engineers who took this assessment</p>
            <div className='stat__icon'>
              <span className='emoji'>📈</span>
            </div>
          </div>



          <div className='comp__graph'>
            {/* <ResponsiveContainer width="100%" height="100%"> */}
            <LineChart
              width={700}
              height={500}
              data={graphData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              {/* <CartesianGrid strokeDasharray="5 5" /> */}

              <XAxis dataKey="name" />
              {/* <YAxis /> */}
              <Tooltip />
              {/* <Legend /> */}
              <Line type="monotone" dataKey="value" stroke="#438AF6" activeDot={{ r: 8 }} />
              <ReferenceLine x="40%" stroke="#C8D6E5" label="Percentile" strokeDasharray="5 5" />
              <ReferenceLine x="80%" stroke="#FF914280" label="Percentile" strokeDasharray="5 5" />
            </LineChart>
            {/* </ResponsiveContainer> */}
          </div>

        </div>



      </div>
      <div className='dashboard__item2'>
        <div className='progress__container'>
          <p className='syllabus__heading'>Syllabus wise Analysis</p>
          <Syllabus heading="HTML Tools, Forms, History" value={80} strokeColor="rgba(67, 138, 246, 1)" trailColor="rgba(67, 138, 246, 0.1)" />
          <Syllabus heading="Tags & References in HTML" value={60} strokeColor="rgba(255, 145, 66, 1)" trailColor="rgba(255, 145, 66, 0.1)" />
          <Syllabus heading="Tables & CSS Basics" value={24} strokeColor="rgba(251, 94, 94, 1)" trailColor="rgba(251, 94, 94, 0.1)" />
          <Syllabus heading="Tables & CSS Basics" value={96} strokeColor="rgba(46, 201, 113, 1)" trailColor="rgba(46, 201, 113, 0.1)" />
        </div>

        <div className='analysis__container'>

          <div className='analysis__main'>

            <p className='analysis__heading'>Analysis</p>
            <p className='analysis__score'>07 / 15</p>
          </div>

          <p className='analysis__para'>
            You scored 7 question correct out of 15. <span id='analysis__statement'>However it
              still needs some improvements</span>
          </p>

          <div className='analysis__pie'>
            <PieChart width={250} height={250}>
              <foreignObject
                x={(250 - 50) / 2} // Centering horizontally
                y={(250 - 50) / 2} // Centering vertically
                width={100}
                height={100}
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              >
                <span style={{ fontSize: '40px' }}>🎯</span>
              </foreignObject>
              <Pie
                data={data}
                // cx={120}
                // cy={200}
                innerRadius={60}
                outerRadius={90}
                fill="#8884d8"
                paddingAngle={0}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

            </PieChart>
          </div>



        </div>
      </div>
    </div>
  )
}

export default Dashboard

import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Main from '../components/Main/Main'
import './Home.css'

const Home = () => {
  return (
    <div className='home__container'>
      <Navbar/>
      <Main/>
    </div>
  )
}

export default Home

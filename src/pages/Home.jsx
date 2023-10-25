import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Main from '../components/Main/Main'
import './Home.css'

const Home = ({ setModalOpen,modalOpen }) => {
  return (
    <div className='home__container'>
      <Navbar/>
      <Main setModalOpen={ setModalOpen } modalOpen={modalOpen}/>
    </div>
  )
}

export default Home

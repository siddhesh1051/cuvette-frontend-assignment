import React from 'react'
import Logo from '../../assets/img/logo.png'
import './Navbar.css'
import Profile from './Profile'

const Navbar = () => {
  return (
    <div className='nav__div'>
      <div className='logo__container'>
        <img src={Logo} alt="logo" className='logo__img' width={120} height={30} />
      </div>
      <Profile /> 
    </div>
  )
}

export default Navbar

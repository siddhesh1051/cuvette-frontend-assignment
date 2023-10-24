import React from 'react'
import './Navbar.css'
import Avatar from '../../assets/img/avatar.png'

const Profile = () => {
  return (
    <div className='profile__container'>
      <img src={Avatar} className='avatar' alt="" />
      <div className='profile__name'>Siddharth Jain</div>
    </div>
  )
}

export default Profile

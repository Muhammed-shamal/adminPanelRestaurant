import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

function Navbar() {
  return (
    <div className='navbar'>
        <img className='logo' src={assets.foodzy_logo} alt="" />
        <img src={assets.profile_image} alt="" className="profile" />
    </div>
  )
}

export default Navbar
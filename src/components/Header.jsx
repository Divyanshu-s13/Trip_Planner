import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <Link to="/" className='homeLogo'>
        <img 
          src="src/photos/logo1.png" 
          alt="Itinera Logo"
          className="logo-img"
        />
        <span>Itinera</span>
      </Link>
      <div className='navbar'>
        <Link to="/login" className='nav-link'>Login</Link>
        <Link to="/signup" className='nav-link'>Sign Up</Link>
      </div>
    </div>
  )
}

export default Header
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <Link to="/" className='homeLogo'>Itinera</Link>
        <div className='navbar'>
            <Link to="/login" className='links'>Login</Link>
            <Link to="/signup" className='links'>Sign Up</Link>
        </div>
    </div>
  )
}

export default Header
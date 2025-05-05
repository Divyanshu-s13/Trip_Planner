import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='signup'>
        <div>
          <h1>Sign Up</h1>
          <label For="email">Email</label>
          <input id="email" placeholder="Enter your email" type="email" />
          
          <label For="password">Password</label>
          <input id="password" placeholder="Enter your password" type="password" />

          <label For="con_password">Password</label>
          <input id="con_password" placeholder="Confirm your password" type="password" />
          
          <button>Sign Up</button>
          
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
  )
}

export default Signup
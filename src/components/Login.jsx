import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <>
      <div className='login'>
        <div>
          <h1>Log In</h1>
          <label For="email">Email</label>
          <input id="email" placeholder="Enter your email" type="email" />
          
          <label For="password">Password</label>
          <input id="password" placeholder="Enter your password" type="password" />
          
          <button>Log In</button>
          
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </div>
    </>
  )
}

export default Login
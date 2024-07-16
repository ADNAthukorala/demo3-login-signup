import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className='signup-container'>
      <form className='signup-form'>
        <h1>Sign Up</h1>
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <button type='submit'>Sign Up</button>
        <p>Already have an account? <Link to='/'>Sign In</Link></p>
      </form>
    </div>
  );
}

export default SignUp;
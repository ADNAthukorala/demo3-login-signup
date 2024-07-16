import React from 'react';
import './SignIn.css'

function SignIn() {
  return (
    <div className='signin-container'>
      <form className='signin-form'>
        <h1>Sign In</h1>
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <button type='submit'>Sign In</button>
        <p>Don't have an account? Sign Up</p>
      </form>
    </div>
  );
}

export default SignIn;
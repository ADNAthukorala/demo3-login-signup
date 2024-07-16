import React, { useState } from 'react';
import './SignIn.css'
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('You have logged in successfully!')
    } catch(err) {
      alert('Incorrect email or password!')
    }
  }

  return (
    <div className='signin-container'>
      <form className='signin-form' onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <input type='email' placeholder='Email' onChange={(e) => {setEmail(e.target.value)}}/>
        <input type='password' placeholder='Password' onChange={(e) => {setPassword(e.target.value)}}/>
        <button type='submit'>Sign In</button>
        <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
      </form>
    </div>
  );
}

export default SignIn;
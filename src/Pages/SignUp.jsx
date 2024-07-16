import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('The account has been created successfully!');
    } catch(err) {
      alert('An error has occurred!');
    }
  }

  return (
    <div className='signup-container'>
      <form className='signup-form' onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <input type='email' placeholder='Email' onChange={(e) => {setEmail(e.target.value)}}/>
        <input type='password' placeholder='Password' onChange={(e) => {setPassword(e.target.value)}}/>
        <button type='submit'>Sign Up</button>
        <p>Already have an account? <Link to='/'>Sign In</Link></p>
      </form>
    </div>
  );
}

export default SignUp;
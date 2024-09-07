import React, { useState } from 'react';
import '../style/signUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className='sign-up'>
     <div className='sign-up-container'>
      <h1>Sign Up</h1>
      <div className='sign-up-form'>
        <input type='text' name='name' placeholder='Name' onChange={handleChange} />
        <input type='email' name='email' placeholder='Email' onChange={handleChange} />
        <input type='password' name='password' placeholder='Password' onChange={handleChange} />
        </div>
        <button className='sign-btn'>Sign Up</button>
        <p>Already have an account? <a href='/login'>Login</a></p>
        <div className='login-agree'>
     <input type='checkbox' />
      <p>I agree to the terms and conditions</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

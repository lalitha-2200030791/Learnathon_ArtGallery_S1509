import React from 'react'
import '../css/login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'
// import hue360 from '../assets/img/hue350.png'

export default function Register() {
  const [registrationData, setRegistrationData] = useState({
    fullname: '',
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) =>
  {
    setRegistrationData({...registrationData, [e.target.id]: e.target.value});
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const response = await axios.post('http://localhost:1509/insertcustomer', registrationData);
      if (response.status === 200) 
      {
        setRegistrationData({
          fullname: '',
          email: '',
          password: ''
        });
      }
      setMessage(response.data);
      setError(''); 
    } 
    catch(error) 
    {
      setError(error.response.data);
      setMessage(''); 
    }
  };

  

  return (
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500&display=swap" rel="stylesheet" />
<div class="container-fluid">   
      <div class="row">
        <div class="col-sm-6 col-md-7 intro-section">
          <div class="brand-wrapper">
            {/* <img id='hue360Logo' src={hue360} alt="hue360Logo" /> */}
          </div>
          <div class="intro-content-wrapper">
            <h1 class="intro-title">Welcome to Gallery Gateway</h1>

          </div>
          <div class="intro-section-footer">
            <na class="footer-nav">
              <a href="#!">Facebook</a>
              <a href="#!">Twitter</a>
              <a href="#!">Gmail</a>
            </na>
          </div>
        </div>
        <div class="col-sm-6 col-md-5 form-section">
          <div class="login-wrapper">
            <h2 class="login-title">Register</h2>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                <label for="name" class="sr-only">Username</label>
                <input type="text"  id="fullname" value={registrationData.fullname} class="form-control" placeholder="Username"  onChange={handleChange} required/>
              </div>
              <div class="form-group">
                <label for="email" class="sr-only">Email</label>
                <input type="email"  id="email" value={registrationData.email} class="form-control" placeholder="Email"  onChange={handleChange} required/>
              </div>
              <div class="form-group mb-3">
                <label for="password" class="sr-only">Password</label>
                <input type="password"  id="password" value={registrationData.password} class="form-control" placeholder="Password"  onChange={handleChange} required/>
              </div>
              <div class="d-flex justify-content-between align-items-center mb-5">
              <button  class="btn login-btn" type='submit' >Register</button>
                <a href="#!" class="forgot-password-link">Forgot Password?</a>
              </div>
            </form>           
            <p class="login-wrapper-footer-text">Already have an account? <Link to="/Login" class="text-reset">Login here</Link></p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
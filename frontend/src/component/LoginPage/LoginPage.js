import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import { useNavigate } from 'react-router-dom';

async function loginUser(credentials) {
 return fetch('http://localhost:4000/auth/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function LoginPage({ setToken }) {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');  // State to store the error message
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');  // Reset error before submitting
  
      const token = await loginUser({
        username,
        password
      });
  
      if (token) {
        setToken(token);
        window.location.reload();
      } else {
        setError('Something went wrong. Please check your credentials.');  // Set error message
      }
    }
  
  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired
};
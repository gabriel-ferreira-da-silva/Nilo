import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Login.module.css'
import { loginAdmin,loginUser } from '../../services/AuthService';
import { setToken } from '../../utils/AuthUtils';

export default function LoginPanel() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [error, setError] = useState(''); 
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');  

      if(isAdmin){
        
        const token = await loginAdmin({username,password});
        if (token) {
          setToken(token);
          window.location.reload();
        } else {
          setError('Something went wrong. Please check your credentials.'); 
        }

      }else{
        const token = await loginUser({username,password});
        if (token) {
          setToken(token);
          window.location.reload();
        } else {
          setError('Something went wrong. Please check your credentials.'); 
        }
      }
      

    }
  
  return(
    <div className={styles.loginWrapper}>
      <img className={styles.logoImage} src="https://github.com/gabriel-ferreira-da-silva/Nilo/blob/main/frontend/public/blue-pyramide.png?raw=true" ></img>
      <form onSubmit={handleSubmit}>
        <div class="form-group" className={styles.formPanel}>
          <label>Username</label>
          <input class="form-control" type="text" onChange={e => setUserName(e.target.value)} />
        </div>
        <div class="form-group" className={styles.formPanel}>
          <label>Password</label>
          <input class="form-control" type="password" onChange={e => setPassword(e.target.value)} />
        </div>
        <div className={styles.togglePanel}>
          <div class="form-check form-switch" >
              <input class="form-check-input" type="checkbox" role="switch" onChange={e=>setIsAdmin(e.target.value)} id="flexSwitchCheckDefault"/>
              <label class="form-check-label" for="flexSwitchCheckDefault">log as admin</label>
            </div>
          </div>
        <div>
          <button className={styles.buttonLogin} type="submit">login</button>
        </div>
      </form>
    </div>
  )
}

LoginPanel.propTypes = {
  setToken: PropTypes.func.isRequired
};
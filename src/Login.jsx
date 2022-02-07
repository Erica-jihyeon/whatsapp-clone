import React from 'react';
import { Button } from '@mui/material';
import "./Login.css";
import { auth, provider } from './firebase';

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider)
      .then(result => console.log(result))
      .catch(err => alert(err.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/archive/6/6b/20200905003027%21WhatsApp.svg" alt="whatsapp logo"/>
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>

        <Button onClick={signIn}>
          Sign In With Google
        </Button>
      </div>
    </div>
  )
}

export default Login;

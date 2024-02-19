import React, { useState,useContext } from 'react';
import { FirebaseContext } from '../../firebase/firebaseContest';
import { useNavigate } from 'react-router-dom';
import validate from '../../validation';

import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({ email: "", password: "", notFound: "" })
  const { isUserExist,userGlobal } = useContext(FirebaseContext)
  const Navigate = useNavigate()

  const submitLogin = async(e)=>{
    e.preventDefault();
    if (validate({ email, password, setError })) {
      const userData = await isUserExist(email, password)
      if (userData) {
        userGlobal(userData)
        window.location.href = '/';
      } else {
        setError((err) => ({ ...err, notFound: "sorry invalid credentials or no user account" }))
      }

    }
  }
  return (
     <div className="row">
      <div className="mx-auto mt-5 col-sm-4 formDivLogin" >
        <center><img width="200px" height="200px" src={Logo} alt="logo"></img></center>
        <center>
          <form>
            {error.notFound && <p className="errorShow">{error.notFound}</p>}
            {error.email && <p className='errorShow'>{error.email}</p>}
            <input onChange={(e) => { setEmail(e.target.value); setError((err) => ({ ...err, email: "" })) }}
              className="form-control"
              type="email"
              id="fname"
              name="email"
              placeholder="Enter the Email"
            />
            <br />
            {error.password && <p className='errorShow'>{error.password}</p>}

            <input onChange={(e) => { setPassword(e.target.value); setError((err) => ({ ...err, password: "" })) }}
              className="form-control"
              type="password"
              id="lname"
              name="password"
              placeholder="Enter the Password"
            />
            <br />
            <br />
            <button className='Loginbutton' type='button' onClick={submitLogin}>Login</button><br /><br />
            <a href='/signup'>Don't have an account ? Signup</a>

          </form></center>
      </div>
    </div>
  );
}

export default Login;

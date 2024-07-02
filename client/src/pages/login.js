import '../App.css';
import NavBar from '../components/NavBar';
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";

function Login({ isNavbarCollapsed, setIsNavbarCollapsed }) {
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  async function login(ev) {
    ev.preventDefault();
    const response = await fetch('https://jaykwonproject-com-backend.vercel.app/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    if (response.ok) {
      response.json().then(userInfo => {
        setUsername(userInfo.username);
        navigate("/");
      })

    }
    else {
      alert('wrong credentials');
    }

  }
  return (
    <div className="App">
      {/*header section*/}
      <NavBar isCollapsed={isNavbarCollapsed} setIsCollapsed={setIsNavbarCollapsed} />

      {/*body section*/}
      <div className="body">
        <form className="login-form" onSubmit={login}>
          <div className="form-group">
            <input name="username" className="form-control" placeholder='username' value={username} onChange={ev => setUsername(ev.target.value)}></input>
          </div>
          <br />
          <div className="form-group">
            <input name="password" className="form-control" placeholder='password' value={password} onChange={ev => setPassword(ev.target.value)}></input>
          </div>
          <br />
          <Button variant="primary" type="submit">Login</Button>
        </form>
      </div>


    </div>
  );

}

export default Login;

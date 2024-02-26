import React, { useState } from "react";
import "./CookLogin.css";
import Axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function CookLogin() {
  const [Email_id, setEmail_id] = useState("");
  const [Password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  let navigate = useNavigate();

  const routeChange = () => {
    let path = '/cookregister';
    navigate(path);
  }

  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/cooklogin", {
      Email_id: Email_id,
      Password: Password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(<Navigate to="/cook" />);
      }
    });
  }

  return (
    <div className="cookl">
    <div className="cook-login">
      <form>
        <h4>LOG IN</h4>
        <label htmlFor="email_id">Email</label><br/>
        <input className="textInput" type="text" name="email_id" onChange={(e) => setEmail_id(e.target.value)} required /><br/>
        <label htmlFor="password">Password</label><br/>
        <input className="textInput" type="password" name="password" onChange={(e) => setPassword(e.target.value)} required /><br/>
        <input className="button" type="submit" onClick={login} value="Login" /><br/>
        <h1 style={{color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '0px'}}>{loginStatus}</h1>
      </form>
      <div className="signup">
        <div className="siup"><h6>Don't have an account?</h6></div>
        <div><a className="link-btn" onClick={routeChange}>Signup here.</a></div>
      </div>
    </div>
    </div>
  );
}

export default CookLogin;
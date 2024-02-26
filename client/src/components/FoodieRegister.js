import { Navigate , useNavigate } from "react-router-dom";
import "./FoodieRegister.css"
import React, {useState} from "react";

import Axios from "axios";

function FoodieRegister(){
    const [Name, setName] = useState("");
    const [Email_id, setEmail_id] = useState("");
    const [Phone, setPhone] = useState("");
    const [Password, setPassword] = useState("");
    const [Address, setAddress] = useState("");
    const [registerStatus, setRegisterStatus] = useState("");

    let navigate = useNavigate();
  const routeChange = () =>{
    let path = '/foodielogin';
    navigate(path);
  }


    const register = (x) => {
        x.preventDefault();
        Axios.post("http://localhost:3001/foodiesignup", {
          Name: Name,
          Email_id: Email_id,
          Phone: Phone,
          Password: Password,
          Address: Address,
        }).then((response) => {
          if(response.data.message || !Name || !Password){
            setRegisterStatus(response.data.message);
          }else{
            // setRegisterStatus(<Navigate to="/foodielogin" />);
            setRegisterStatus("Registration Successful! You will be directed to the login page after 5 seconds");

        // Route to "/cooklogin" after 5 seconds
        setTimeout(() => {
          navigate("/foodielogin");
        }, 5000);
          }
        })
      }


  return (
    <div className="foodie-register-new">
    <div className="foodie-register">
    <div className="loginForm">
        <form>
          <h4>Register Here</h4>
          <label htmlFor="username">Name*</label><br/>
          <input className="textInput" type="name" name="name" onChange={(x) => {setName(x.target.value)}} required /><br/>
          <label htmlFor="email_id">Email*</label><br/>
          <input className="textInput" type="text" name="email_id" onChange={(x) => {setEmail_id(x.target.value)}} required /><br/>
          <label htmlFor="contact">Phone*</label><br/>
          <input className="textInput" type="phone" name="phone" onChange={(x) => {setPhone(x.target.value)}} required /><br/>
          <label htmlFor="password">Password*</label><br/>
          <input className="textInput" type="password" name="password" onChange={(x) => {setPassword(x.target.value)}} required /><br/>
          <label htmlFor="address">Address*</label><br/>
          <input className="textInput" type="address" name="address" onChange={(x) => {setAddress(x.target.value)}} required /><br/>

          <input className="button" type="submit" onClick={register} value="Create an account" /><br/>
          <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '0px'}}>{registerStatus}</h1>
        </form>
        
        <div className="signup">
        <div className="siup"><h6>Already have an account?</h6></div>
        <div><a className="link-btn" onClick={routeChange}>Login here.</a></div>
        </div>
      </div>
      </div>
      </div>
  )
}



export default FoodieRegister

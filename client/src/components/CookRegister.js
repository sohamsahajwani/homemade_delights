import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import "./CookRegister.css";

function Register() {
  const [Name, setName] = useState("");
  const [Email_id, setEmail_id] = useState("");
  const [Phone, setPhone] = useState("");
  const [Password, setPassword] = useState("");
  const [Address, setAddress] = useState("");
  const [Experience, setExperience] = useState(0);
  const [Specialty, setSpecialty] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");

  const navigate = useNavigate();

  const register = async (event) => {
    event.preventDefault();

    try {
      const response = await Axios.post("http://localhost:3001/signup", {
        Name: Name,
        Email_id: Email_id,
        Phone: Phone,
        Password: Password,
        Address: Address,
        Experience: Experience,
        Specialty: Specialty,
      });

      if (response.data.message || !Name || !Password) {
        setRegisterStatus(response.data.message);
      } else {
        setRegisterStatus("Registration Successful! You will be directed to the login page after 5 seconds");

        // Route to "/cooklogin" after 5 seconds
        setTimeout(() => {
          navigate("/cooklogin");
        }, 5000);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setRegisterStatus("Failed to register. Please try again.");
    }
  };

  return (
    <div className="cook-register-new">
      <div className="cook-register">
        <div className="loginForm">
          <form>
            <h4>Register Here</h4>

            <label htmlFor="username">Name*</label><br />
          <input className="textInput" type="name" name="name" onChange={(x) => { setName(x.target.value) }} required /><br />
          <label htmlFor="email_id">Email*</label><br />
          <input className="textInput" type="text" name="email_id" onChange={(x) => { setEmail_id(x.target.value) }} required /><br />
          <label htmlFor="contact">Phone*</label><br />
          <input className="textInput" type="phone" name="phone" onChange={(x) => { setPhone(x.target.value) }} required /><br />
          <label htmlFor="password">Password*</label><br />
          <input className="textInput" type="password" name="password" onChange={(x) => { setPassword(x.target.value) }} required /><br />
          <label htmlFor="experience">Experience (years)*</label><br />
          <input className="textInput" type="name" name="name" onChange={(x) => { setExperience(x.target.value) }} required /><br />
          <label htmlFor="specialty">Specialty*</label><br />
          <select className="textInputt" name="specialty" onChange={(event) => { setSpecialty(event.target.value) }} required>
            <option value="" disabled selected>Select Specialty</option>
            <option value="Indian">Indian</option>
            <option value="Italian">Italian</option>
            <option value="American">American</option>
            <option value="Mexican">Mexican</option>
            <option value="Greek">Greek</option>
            <option value="Chinese">Chinese</option>
          </select><br />
          <label htmlFor="address">Address*</label><br />
          <input className="textInput" type="address" name="address" onChange={(x) => { setAddress(x.target.value) }} required /><br />

            <input
              className="button"
              type="submit"
              onClick={register}
              value="Create an account"
            />
            <br />
            <h1
              style={{
                fontSize: "15px",
                textAlign: "center",
                marginTop: "0px",
              }}
            >
              {registerStatus}
            </h1>
          </form>

          <div className="signup">
            <div className="siup">
              <h6>Already have an account?</h6>
            </div>
            <div>
              <a className="link-btn" onClick={() => navigate("/cooklogin")}>
                Login here.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;


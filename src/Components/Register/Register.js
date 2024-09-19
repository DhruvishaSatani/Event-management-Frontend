import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Registration successful!");
    navigate("/");
  };

  return (
    <div className="main-box ">
       <h2>Event Management</h2>
      <div className="box-div">
        <div className="box-form">
          <h2>Register</h2>
          <form onSubmit={handleRegister} className=" form-box">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Register</button>
          </form>
          <p>
            Already have an account? <a href="/">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;

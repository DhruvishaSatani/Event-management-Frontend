import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'user@gmail.com' && password === 'password') {
      setIsLoggedIn(true);
      navigate("/home");
    } else {
      alert("Invalid login credentials");
    }
  };

  return (
    <div className=" main-box ">
      <h2>Event Management</h2>
      <div className="box-div">
        <div className="box-form">
          <h2 className="head">Login</h2>
          <form onSubmit={handleLogin} className=" form-box">
            <input
              className="m-2"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>
            <input
              type="password"
              placeholder="Password"
              value={password}
             
              onChange={(e) => setPassword(e.target.value)}
            />
            <br></br>
            <button type="submit" className="btn">
              Login
            </button>
          </form>
          <p className="">
            Don't have an account? <a href="/register">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

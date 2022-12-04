import React from 'react'
import { useState } from 'react';
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext"; 
import axios from "axios";


const Login = () => {
    const [inputs, setInputs] = useState({
      email: "",
      password: "",
    });
    const [err, setError] = useState(null);
  
    const navigate = useNavigate();
  
    const { login } = useContext(AuthContext);
  
  
    const handleChange = (e) => {
      setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // await axios.post("/auth/login",inputs);
        await login(inputs)
        navigate("/landpage");
      } catch (err) {
        setError(err.response.data);
      }
    };

    return (
        <div className="d-flex justify-content-center">
          <main className="form-signin bg-light">
              <img className="mb-4" src="https://donatestock.com/sites/default/files/styles/de2e/public/2021-03/AHFH_Color-With-New-Tagline_RGB_lo%20res_0.png?itok=tozizJGq"
                   alt="no show" width="260" height="110"></img>
              <h1 className="h3 mb-4 fw-normal w-1000">Sign In As Board Member</h1>
              {/* {(error !== '')? (<div className = 'error'> {error} </div>):''} */}
              {/* <form onSubmit = {submitHandler}> */}
              <form>
                  <div className = "form-inner">
  
                      <div className="form-floating">
                          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name = "email" onChange={handleChange}/>
                          <label htmlFor="floatingInput">Email address</label>
                      </div>
  
                      <div className="form-floating">
                          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name = "password" onChange={handleChange}/>
                          <label htmlFor="floatingPassword">Password</label>
                      </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSubmit}>Log in</button>
                        {err && <p>{err}</p>}
                        <span>
                            Do not have an account yet? <Link to="/register">Register</Link>
                        </span>
                      <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
                  </div>
              </form>
          </main>
      </div>
    )
}

export default Login
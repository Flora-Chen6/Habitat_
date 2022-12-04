import React from "react";
import { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
// import axios from "axios";
import { axiosInstance, AxiosInstance } from "../config";

    const Register = () => {
        const [inputs, setInputs] = useState({
          username: "",
          email: "",
          password: "",
        });
        // const [err, setError] = useState(null);
      
        const navigate = useNavigate();
      
        const handleChange = (e) => {
          setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        };

        console.log(inputs)
      
        // const handleSubmit = async (e) => {
        //   e.preventDefault();
        //   try {
        //     await axios.post("/auth/register", inputs);
        //     navigate("/login");
        //   } catch (err) {
        //     setError(err.response.data);
        //   }
        //     console.log("registration submitted")
        // };
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                console.log("before axios in try")
                await axiosInstance.post("/auth/register", inputs)
                // console.log(res)
                navigate("/login"); 
            }
            catch(err) {
                console.log(err.response.data)
                // console.log("User Not Allowed to Register")
            }
            // console.log("registration submitted")
        };

    return (
        <div className="d-flex justify-content-center">
          <main className="form-signin bg-light">
              <img className="mb-4" src="https://donatestock.com/sites/default/files/styles/de2e/public/2021-03/AHFH_Color-With-New-Tagline_RGB_lo%20res_0.png?itok=tozizJGq"
                   alt="no show" width="260" height="110"></img>
              <h1 className="h3 mb-4 fw-normal w-1000">Registration</h1>
              <form>
                  <div className = "form-inner">

                      <div className="form-floating">
                          <input required className="form-control" id="floatingInput" placeholder="User Name" name = "username" onChange={handleChange}/>
                          <label htmlFor="floatingInput">User Name</label>
                      </div>                    
                      
                      <div className="form-floating">
                          <input required type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name = "email" onChange={handleChange}/>
                          <label htmlFor="floatingInput">Email Address</label>
                      </div>
  
                      <div className="form-floating">
                          <input required type="password" className="form-control" id="floatingPassword" placeholder="Password" name = "password" onChange={handleChange}/>
                          <label htmlFor="floatingPassword">Password</label>
                      </div>


                        <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSubmit}>Register</button>
                        <span>
                            Already have an account? <Link to="/login">Login</Link>
                        </span>
                      <p className="mt-5 mb-3 text-muted">&copy; 2017-2022</p>
                  </div>
              </form>
          </main>
       </div>
    )
}

export default Register;

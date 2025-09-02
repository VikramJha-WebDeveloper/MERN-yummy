import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(()=>{
    fetch("http://localhost:8000/me", {
      method: "GET",
      credentials: "include",
    }).then((response)=>{
      return response.json();
    }).then((data)=>{
      if(data.errorMessage){
        navigate("/register");
      }else if(data.message){
        navigate("/home");
      }else{
        navigate("/register")
        console.log("Something went wrong during verification");
      }
    })
  }, [])

  const collectData = async (e) => {
    e.preventDefault();
    if(!fullName || !email || !password || !confirmPassword){
        console.log("All fields are required");
        toast.error("All fields are required");
        return;
    }
    if(password !== confirmPassword){
      console.log("Password do not match");
      toast.error("Password do not match");
      return;
    }
    setIsLoading(true);
    try {
        const response = await fetch("http://localhost:8000/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fullName, email, password, confirmPassword }),
        });
        const result = await response.json();
        setIsLoading(false);
        if (result.errorMessage) {
          console.log(result.errorMessage);
          toast.error(result.errorMessage);
        } else if (result.message) {
          console.log(result.message);
          navigate("/login");
          toast.success(result.message);
        } else {
          console.log("Something goes wrong");
          toast.error("Something goes wrong");
        }
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return isLoading ? (
    <div className="border vh-100 d-flex align-items-center justify-content-center">
      <div className="spinner-grow text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  ) : (
    <>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Register</h3>
              <form onSubmit={collectData}>
                <div className="mb-3">
                  <label for="fullName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label for="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label for="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-danger">
                    Register
                  </button>
                </div>
              </form>
              <div className="mt-3 text-center">
                <small>
                  Already have an account?{" "}
                  <NavLink to="/login">Login here</NavLink>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemembered, setIsRemembered] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("running");
    fetch("http://localhost:8000/me", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.errorMessage) {
          console.log(data.errorMessage);
          navigate("/login");
        } else if (data.message) {
          console.log(data.message);
          navigate("/home");
        } else {
          navigate("/login");
          console.log("Something went wrong during verification");
        }
      });
  }, []);

  const collectData = async (e) => {
    e.preventDefault();
    if (!email || !password || !isRemembered) {
      console.log("All fields are required");
      toast.error("All fields are required");
      return;
    }
    setIsLoading(true);

    try {
        const response = await fetch("http://localhost:8000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password, isRemembered }),
          credentials: "include",
        });

        const result = await response.json();
        setIsLoading(false);
        if (result.errorMessage) {
          console.log(result.errorMessage);
          toast.error(result.errorMessage);
        } else if (result.message) {
          console.log(result.message);
          toast.success(result.message);
          navigate("/home");
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
      <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Login</h3>
              <form onSubmit={collectData}>
                <div className="mb-3">
                  <label for="usernameOrEmail" className="form-label">
                    Username or Email
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
                  <label for="loginPassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                    checked={isRemembered}
                    onChange={() =>
                      setIsRemembered(isRemembered ? false : true)
                    }
                  />
                  <label className="form-check-label" for="rememberMe">
                    Remember me
                  </label>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-danger">
                    Login
                  </button>
                </div>
              </form>
              <div className="mt-3 text-center">
                <small>
                  Don't have an account?{" "}
                  <NavLink to="/register">Register here</NavLink>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

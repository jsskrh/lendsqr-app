import React from "react";
import "./Login.css";
import LogoContainer from "./LogoContainer";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-page-inner">
        <div className="login-page-left">
          <LogoContainer />
          <div className="image-container">
            <img src="pablo-sign-in 1.png" alt="Login page image" />
          </div>
        </div>
        <div className="login-page-right">
          <div className="page-content">
            <div className="heading-container">
              <h1 className="heading">Welcome!</h1>
              <p className="sub-heading">Enter details to login.</p>
            </div>
            <div className="form-container">
              <form action="/POST" className="login-form">
                <div className="form-input">
                  <input
                    type="email"
                    className="email-input"
                    placeholder="Email"
                  />
                  <input
                    type="password"
                    className="password-input"
                    placeholder="Password"
                  />
                </div>
                <p className="forgot-password">
                  <a href="#" className="link">
                    Forgot Password
                  </a>
                </p>
                <button className="login-button">Log in</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

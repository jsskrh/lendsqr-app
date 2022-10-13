import React from "react";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-page-inner">
        <div className="login-page-left">
          <div className="logo-container">
            <div className="logo">L</div>
            <div className="logo-text">Lendsqr</div>
          </div>
          <div className="image-container"></div>
        </div>
        <div className="login-page-right">
          <div className="page-content">
            <div className="header-container">
              <h1 className="header">Welcome!</h1>
              <p className="header-sub">Enter details to login.</p>
            </div>
            <div className="form-container">
              <form action="/POST" className="login-form">
                <div className="form-input">
                  <input type="email" className="email-input" />
                  <input type="password" className="password-input" />
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

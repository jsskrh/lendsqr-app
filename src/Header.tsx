import React from "react";
import "./Header.css";
import LogoContainer from "./LogoContainer";

const Header = () => {
  return (
    <div className="header">
      <div className="header-inner">
        <LogoContainer />
        <div className="search-bar-container">
          <input type="text" className="search-input" />
          <button className="search-button">
            <img src="Vector copy.png" alt="microscope" />
          </button>
        </div>
        <div className="nav-items">
          <div className="nav-item">
            <a href="#" className="nav-link">
              Docs
            </a>
          </div>
          <div className="nav-item">
            <img
              className="bell-notification"
              src="Vector.png"
              alt="notification bell"
            />
          </div>
          <div className="nav-item avatar-container">
            <img className="user-avatar" src="image 4.png" alt="avatar" />
          </div>
          <div className="nav-item">
            <span className="username">Adedeji</span>
            <div className="dropdown-arrow">
              <img src="Vector-2.png" alt="dropdown arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

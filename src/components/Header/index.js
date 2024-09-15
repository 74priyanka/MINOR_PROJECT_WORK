import React from "react";
import { StyledHeader } from "./style";
import { Link } from "react-router-dom";
import face_recognition from "../../assets/face_recognition.png";

const Header = () => {
  return (
    <StyledHeader>
      <div className="logo-container">
        <img src={face_recognition} alt="" className="logo" />
      </div>
      <div className="nav-items">
        <ul className="nav-items-list">
          <li>Home</li>
          <li>About</li>

          <li>Login</li>
          <li>Signup</li>
          {/* <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>

          <li><Link to="/contact">Login</Link></li>
          <li><Link to="/register">Signup</Link></li> */}
        </ul>
      </div>
    </StyledHeader>
  );
};

export default Header;

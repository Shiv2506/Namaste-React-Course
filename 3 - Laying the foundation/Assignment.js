import React from "react";
import "./Assignment.css";
import logo from "./assets/logo.png";
import userIcon from "./assets/userIcon.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="left">
          <img src={logo} alt="Logo"></img>
        </div>
        <div className="center">
          <input type="text" className="input" placeholder="Search anything ...." />
          <button type="submit">Search</button>
        </div>
        <div className="right">
          <img src={userIcon} alt="User Icon"></img>
        </div>
      </div>
    </>
  );
};

export default Header;

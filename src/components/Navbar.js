import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="header">
        <Link to="/">
          <h2>Header</h2>
        </Link>
      </div>
      <div className="links">
        <Link to="/">
          <h2>SignUp</h2>
        </Link>
        <Link to="/profile">
          <h2>Profile</h2>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

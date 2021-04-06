import React from "react";
import { Link } from "react-router-dom";

function Nav() {

    
  return (
      <div className="nav2">
        <div className="navbar-brand">
          <Link to="/" className="brand-title">
            <i className="fa fa-train"></i>
            <span style={{ marginLeft: "5px" }}>train ticket app</span>
          </Link>
        </div>
        <ul className="navbar-right">
          <li className="navbar-list">
            <Link to="/" className="navbar-link">
              book a train
            </Link>
          </li>
          <li className="navbar-list">
            <Link to="/stations" className="navbar-link">
              stations
            </Link>
          </li>
          <li className="navbar-list">
            <Link to="/stories" className="navbar-link">
              stories
            </Link>
          </li>
          <li className="navbar-list">
            <Link to="/" className="navbar-link">
              contacts
            </Link>
          </li>
        </ul>
      </div>
  );
}

export default Nav;

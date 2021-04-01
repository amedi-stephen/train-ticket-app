import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 90 ||
      document.documentElement.scrollTop > 90
    ) {
      document.querySelector("nav").style.padding = "10px 10%";
      document.querySelector("nav").style.background = "#f96332";
    } else {
      document.querySelector("nav").style.padding = "15px 10%";
      document.querySelector("nav").style.background = "transparent";

      document.querySelector(".navbar-brand").style.fontSize = "35px";
    }
  }

  return (
      <nav>
        <div className="navbar-brand">
          <Link to = "/" className="brand-title">
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
            <Link to ="/stations" className="navbar-link">
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
      </nav>
  );
}

export default Navbar;

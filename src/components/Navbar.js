import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    console.log("component unmounted");
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(e) {
    let scrollVertical = document.body.scrollTop || document.documentElement.scrollTop;

    if(scrollVertical > 90) {
      console.log("Hurray");
      document.querySelector("nav").style.background = "#f96332";
      document.querySelector("nav").style.padding = "10px 10%";
    } else {
      console.log("oops")
      document.querySelector("nav").style.background = "transparent";
      document.querySelector("nav").style.padding = "20px 10%";
    }
  }
  render() {
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
                {this.scrollTop}
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
}

export default Navbar;

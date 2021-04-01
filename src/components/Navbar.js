import React from "react";

function Navbar() {

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 90 ||
      document.documentElement.scrollTop > 90
    ) {
      document.querySelector("nav").style.padding = "15px 10%";

      // document.querySelector(".navbar-brand").style.fontSize = "24px";
    } else {
      document.querySelector("nav").style.padding = "20px 10%";

      document.querySelector(".navbar-brand").style.fontSize = "35px";
    }
  }

  return (
    <nav>
        <div className="navbar-brand">
            <a className="brand-title" href="/">
                <i className="fa fa-train"></i>
                <span style={{marginLeft: "5px"}}>train ticket app</span>
            </a>
        </div>
        <ul className="navbar-right">
            <li className="navbar-list"><a href="/" className="navbar-link">book a train</a></li>
            <li className="navbar-list"><a href="/stations" className="navbar-link">stations</a></li>
            <li className="navbar-list"><a href="/stories" className="navbar-link">stories</a></li>
            <li className="navbar-list"><a href="/" className="navbar-link">contacts</a></li>
        </ul>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="navbar">
          <div className="brand-section">
              <Link to ="/" className="brand-title"><i className="fa fa-train"></i> Train Ticket App</Link>
          </div>
          <ul className="navbar-list">
            <li className="list-item"><Link to="/" className="navbar-link">book a train</Link></li>
            <li className="list-item"><Link to="/stations" className="navbar-link">stations</Link></li>
            <li className="list-item"><Link to="/stories" className="navbar-link">stories</Link></li>
            <li className="list-item"><Link to="/contacts" className="navbar-link">contact us</Link></li>
          </ul>
      </div>
    </nav>
  );
}

export default Navbar;

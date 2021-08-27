import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Menu</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link">
              <Link to="/Home" className={window.location.pathname === "/Home" ? "nav-link active" : "nav-link"}>
                Home
              </Link>
            </a>

            <a className="nav-link">
              <Link to="/Bio" className={window.location.pathname === "/Bio" ? "nav-link active" : "nav-link"}>
                Bio
              </Link>
            </a>

            <a className="nav-link">
              <Link to="/Portfolio" className={window.location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}>
                Portfolio
              </Link>
            </a>

            <a className="nav-link">
              <Link to="/Contact" className={window.location.pathname === "/Contact" ? "nav-link active" : "nav-link"}>
                Contact
              </Link>
            </a>

          </div>
        </div>

      </div>
    </nav>

  );
}

export default Navbar;
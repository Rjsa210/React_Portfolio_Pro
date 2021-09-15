import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Collapse } from "bootstrap";
import "./style.css";

function Navbar() {

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    var myCollapse = document.getElementById("navbarNavAltMarkup")
        var bsCollapse = new Collapse(myCollapse, {toggle: false})
        toggle ? bsCollapse.show() : bsCollapse.hide()
  })



  return (
    <nav className="navbar navbar-expand-md navbar-dark transparent">
      <div className="container-fluid">
        <a className="navbar-brand" href="/Home">Reid Johnson Design</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setToggle(toggle => !toggle)}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {/* <a className="nav-link">
              <Link to="/Home" className={window.location.pathname === "/Home" ? "nav-link active" : "nav-link"}>
                Home
              </Link>
            </a> */}

            <Link to="/Home" className={window.location.pathname === "/Home" ? "nav-link active" : "nav-link"}>
              Home
            </Link>



            <Link to="/Bio" className={window.location.pathname === "/Bio" ? "nav-link active" : "nav-link"}>
              Bio
            </Link>



            <Link to="/Portfolio" className={window.location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}>
              Portfolio
            </Link>



            <Link to="/Contact" className={window.location.pathname === "/Contact" ? "nav-link active" : "nav-link"}>
              Contact
            </Link>


          </div>
        </div>

      </div>
    </nav>

  );
}

export default Navbar;
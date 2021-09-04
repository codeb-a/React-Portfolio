import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-1 fixed-top">
        <div className="container navbar-brand text-light">
          <Link to="/">BRANDON AKERS</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item nav-link text-light ">
                <Link to="/aboutme">ABOUT ME</Link>
              </li>
              <li className="nav-item nav-link text-light">
                <Link a="/mywork">MY WORK</Link>
              </li>
              <li className="nav-item nav-link text-light">
                <Link to="/contactme">CONTACT ME</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

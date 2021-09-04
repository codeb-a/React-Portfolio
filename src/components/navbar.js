import React from "react";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-1 fixed-top">
        <div className="container">
          <a href="/" className="navbar-brand text-light">
            BRANDON AKERS
          </a>
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
              <li className="nav-item">
                <a href="#aboutme" className="nav-link text-light">
                  ABOUT ME
                </a>
              </li>
              <li className="nav-item">
                <a href="#mywork" className="nav-link text-light">
                  MY WORK
                </a>
              </li>
              <li className="nav-item">
                <a href="#contactme" className="nav-link text-light">
                  CONTACT ME
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

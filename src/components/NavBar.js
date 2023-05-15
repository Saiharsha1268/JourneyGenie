import React from "react";
import About from "./About";
function NavBar() {
  return (
    <>
      <nav
        className="fixed-top navbar navbar-expand-lg bg-body-tertiary bg-opacity-50"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand fs-4" href="#">
            <strong>Journey Genie</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active fs-5"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;

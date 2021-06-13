import React from "react";

function Header() {
  return (
    <React.Fragment>
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="nav-links"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className="navbar-menu" id="nav-links">
            <div className="navbar-start">
              <a href="#backend-card" className="navbar-item">
                My Skills
              </a>
              <a href="#aboutMe" className="navbar-item">
                About Me
              </a>
              <a href="#social" className="navbar-item">
                Connect
              </a>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Header;

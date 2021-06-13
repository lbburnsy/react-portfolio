import React from "react";

function Footer() {
  return (
    <React.Fragment>
      <footer className="section has-text-centered" id="social">
        <div className="container">
          <div className="columns is-centered">
            <div className="column">
              <h1 className="title is-size-4-touch">Connect With Me:</h1>
            </div>
          </div>
          <div className="columns is-mobile is-centered">
            <div className="column is-2 is-4-mobile">
              <a
                href="https://www.linkedin.com/in/luc-burns/"
                target="_blank"
                rel="noopener"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <div className="column is-2">
              <a
                href="https://github.com/lbburnsy"
                target="_blank"
                rel="noopener"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
            <div className="column is-2">
              <a
                href="mailto:burnsluc2@gmail.com"
                target="_blank"
                rel="noopener"
              >
                <i className="far fa-envelope"></i>
              </a>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <a href="https://bulma.io/" target="_blank" rel="noopener">
                <img
                  src="/assets/images/made-with-bulma--white.png"
                  alt="Bulma Logo"
                  id="bulma-logo"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;

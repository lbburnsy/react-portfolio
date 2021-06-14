import React from "react";

function BackendCard() {
  return (
    <React.Fragment>
      <div className="column is-6 technology-card" id="backend-card">
        <i className="fas fa-sitemap"></i>
        <h2>Back-End</h2>
        <p className="tech-description">
          I value organized databases and succinct, elegant path structure.
        </p>
        <h2>Dev Tools</h2>
        <div
          className="
                  columns
                  is-multiline is-centered
                  has-text-centered
                  is-flex-mobile
                "
        >
          <div
            className="
                    column
                    is-4 is-4-fullhd is-4-desktop is-6-tablet is-6-mobile
                  "
          >
            <img
              src="/assets/images/javascript.svg"
              alt="JavaScript Logo"
              className="tech-logo"
            />
            <p>JavaScript</p>
          </div>
          <div
            className="
                    column
                    is-4 is-4-fullhd is-4-desktop is-6-tablet is-6-mobile
                  "
          >
            <img
              src="/assets/images/nodejs.svg"
              alt="nodeJS logo"
              className="tech-logo"
            />
            <p>Node.JS</p>
          </div>
          <div
            className="
                    column
                    is-4 is-4-fullhd is-4-desktop is-6-tablet is-6-mobile
                  "
          >
            <i className="fas fa-server"></i>
            <p>Express.JS</p>
          </div>
          <div
            className="
                    column
                    is-4 is-4-fullhd is-4-desktop is-6-tablet is-6-mobile
                  "
          >
            <img
              src="/assets/images/MongoDB_Leaf_FullColor_RGB.svg"
              alt="MongoDb Leaf"
              className="tech-logo"
            />
            <p>MongoDB</p>
          </div>
          <div
            className="
                    column
                    is-4 is-4-fullhd is-4-desktop is-6-tablet is-6-mobile
                  "
          >
            <img
              src="/assets/images/logo-mysql-170x115.png"
              alt="MySQL Logo"
              className="tech-logo"
            />
            <p>MySQL</p>
          </div>
          <div
            className="
                    column
                    is-4 is-4-fullhd is-4-desktop is-6-tablet is-6-mobile
                  "
          >
            <img
              src="/assets/images/sequelize-icon.svg"
              alt="Sequelize logo"
              className="tech-logo"
            />
            <p>Sequelize</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BackendCard;

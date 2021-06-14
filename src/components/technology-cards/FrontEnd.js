import React from "react";

function FrontendCard() {
  return (
    <React.Fragment>
      <div class="column is-6 technology-card">
        <i class="far fa-file-code"></i>
        <h2>Front-End</h2>
        <p class="tech-description">
          I enjoy bringing your ideas to fruition, using the latest technologies
          to make your life easier.
        </p>
        <h2>Dev Tools</h2>
        <div
          class="
                  columns
                  is-multiline is-centered
                  has-text-centered
                  is-flex-mobile
                "
        >
          <div
            class="
                    column
                    is-4 is-4-fullhd is-4-desktop is-6-tablet is-6-mobile
                  "
          >
            <i class="fab fa-html5" id="html-icon"></i>
            <p>HTML5</p>
          </div>
          <div
            class="
                    column
                    is-4 is-4-fullhd is-4-desktop is-6-tablet is-6-mobile
                  "
          >
            <i class="fab fa-css3" id="css-icon"></i>
            <p>CSS3</p>
          </div>
          <div
            class="
                    column
                    is-4 is-4-fullhd is-4-desktop is-6-tablet is-5-mobile
                  "
          >
            <img
              src="/assets/images/javascript.svg"
              alt="JavaScript Logo"
              class="tech-logo"
            />
            <p>JavaScript</p>
          </div>
          <div
            class="
                    column
                    is-4 is-4-fullhd is-4-desktop is-6-tablet is-5-mobile
                  "
          >
            <img
              src="/assets/images/bulma.svg"
              alt="Sequelize logo"
              class="tech-logo"
            />
            <p>Bulma</p>
          </div>

          <div
            class="
                    column
                    is-4 is-4-fullhd is-4-desktop is-6-tablet is-5-mobile
                  "
          >
            <i class="fab fa-bootstrap" id="bootstrap-icon"></i>
            <p>Bootstrap</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FrontendCard;

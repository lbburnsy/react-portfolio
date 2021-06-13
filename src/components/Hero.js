import React from "react";

function Hero() {
  return (
    <React.Fragment>
      <section className="hero is-halfheight has-text-centered">
        <div className="hero-body">
          <div className="columns is-centered has-centered-text">
            <div className="column is-6">
              <p className="title is-1 is-spaced">Hello, I'm Luc</p>
              <p className="subtitle">I'm so glad you are here!</p>
              <p className="pb-5">
                I am a full stack web developer, specializing in back end
                technologies. Building elegant solutions to complex problems is
                my passion. I am confident, curious, and driven. I cannot wait
                to work with you.
              </p>
              <a href="/assets/pdf/resume-burns.pdf" download="Resume-LucBurns">
                <button className="button is-link is-light is-rounded mb-2">
                  View My Resume
                </button>
              </a>
              <a href="mailto:burnsluc2@gmail.com" target="_blank">
                <button className="button is-link is-light is-rounded">
                  Send Me An Email
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Hero;

import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectCardContainer() {
  return (
    <React.Fragment>
      <section
        class="section recent-projects has-text-centered"
        id="recent-projects"
      >
        <h2 class="title is-2 is-spaced">My Recent Work</h2>
        <p class="subtitle">
          Here are a few of my recent projects. Want to see more?
          <a href="https://github.com/lbburnsy" target="_blank" rel="noopener">
            Visit my GitHub
          </a>
        </p>
        <div class="columns is-centered">
          <ProjectCard
            title="Remote Recruit"
            deployed="https://remote-recruit.herokuapp.com"
            image="/assets/images/desk.jpg"
            description="A full stack job hosting site focused on remote connections."
            tech="Built using JavaScript, Express, Express Handlebars, MySQL, Bootstrap, and more."
            github="https://github.com/lbburnsy/remoteRecruit"
          />
          <ProjectCard
            title="Weather Dashboard"
            deployed="https://lbburnsy.github.io/weather-dashboard/"
            image="/assets/images/rain.jpg"
            description="A front end weather dashboard - always know what is on the horizon."
            tech="Built using JavaScript, HTML, CSS, and Bootstrap."
            github="https://github.com/lbburnsy/weather-dashboard"
          />
        </div>
      </section>
    </React.Fragment>
  );
}

export default ProjectCardContainer;

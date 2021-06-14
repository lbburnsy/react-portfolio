import React from "react";

function ProjectCard(props) {
  return (
    <React.Fragment>
      <div className="column is-4">
        <div className="card">
          <div className="card-header">
            <p className="card-header-title">{props.title}</p>
          </div>
          <div className="card-image">
            <figure className="image is-3by2">
              <a href={props.deployed} target="_blank" rel="noreferrer">
                <img src={props.image} alt="Project Image" />
              </a>
            </figure>
          </div>
          <div className="card-content">
            <div className="content">{props.description}</div>
            <div className="content">{props.tech}</div>
          </div>
          <div className="card-footer">
            <div className="card-footer-item">
              <a href={props.deployed} target="_blank" rel="noreferrer">
                Visit the App
              </a>
            </div>
            <div className="card-footer-item">
              <a href={props.github} target="_blank" rel="noreferrer">
                View Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProjectCard;

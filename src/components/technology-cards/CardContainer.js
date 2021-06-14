import React from "react";
import BackendCard from "./BackEnd";
import FrontendCard from "./FrontEnd";

function CardContainer() {
  return (
    <React.Fragment>
      <section class="section has-text-centered">
        <div class="columns is-mobile is-centered">
          <div class="column is-8 technology-card-container">
            <div class="columns is-centered has-text-centered">
              <BackendCard />
              <div className="column"></div>
              <FrontendCard />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default CardContainer;

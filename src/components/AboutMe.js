import React from "react";

function AboutMe() {
  return (
    <React.Fragment>
      <section className="section" id="aboutMe">
        <div className="container">
          <h2 className="title">Get to know me:</h2>
          <div className="columns pt-5 mt-5">
            <div className="column is-4">
              <div className="image">
                <img
                  className="is-rounded"
                  src="/assets/images/round-headshot.png"
                  alt="headshot"
                  id="headshot"
                />
              </div>
            </div>
            <div className="column"></div>
            <div className="column is-7">
              <p className="pb-5">
                Originally hailing from Connecticut, my creative journey began
                in high school, when I first picked up a camera. Photography
                became an avid hobby. I always endeavored to become proficient
                in other creative avenues, but given my profound lack of ability
                in anything requiring manipulation of real world materials, that
                has been a struggle.
              </p>
              <p className="pb-5">
                Enter code. Upon the realization that (sometimes) simple
                commands could instruct a computer to create my visions for me,
                I was hooked. Through the learning process I have focused my
                skills primarily on the back-end, and deeply enjoy finding
                elegant solutions to complex problems.
              </p>
              <p className="pb-5">
                I am passionate about all things outdoors. In my free time, you
                can find me hiking, skiing, or working on my bus that I am
                converting into a mobile home to travel with.
              </p>
              <p>
                I am driven, curious, and incredibly hungry to succeed at any
                task I undertake.
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default AboutMe;

import React, { Component } from "react";
class About extends Component {
  state = {};
  render() {
    return (
      <div className="mainContent">
        <h2>About Me</h2>
        <hr className="headlineHr" />
        <div className="aboutContent">
          <div>
            <p>
              Hello my name is Olimjon. I am a student in the University of
              texas at Dallas class of 2023. <br />I am currently studying
              computer science and have a great passion to create projects using
              code and concepts I learn in school or by
            </p>
          </div>

          <div className="aboutSkillsContainer">
            <div className="skills">
              <h3>Languages</h3>
              <ul>
                <li>Java</li>
                <li>C++</li>
                <li>Dart</li>
                <li>Python</li>
                <li>Javascript</li>
              </ul>
            </div>
            <div id="middleSkills" className="skills">
              <h3>FrameWorks and Libraries</h3>
              <ul>
                <li>React</li>
                <li>Flutter</li>
                <li>JavaFX</li>
              </ul>
            </div>
            <div className="skills">
              <h3>Databases</h3>
              <ul>
                <li>Firebase/Firestore</li>
                <li>More to come soon!!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

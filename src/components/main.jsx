import React, { Component } from "react";
import Title from "./title";
import "./index.css";
import About from "./about";
import SortingAlgos from "./sortingAlgorithms";
import OtherProjects from "./otherProjects";

class Main extends Component {
  state = {
    showAbout: true,
    showAlgo: false,
    showOther: false,
    titleColor: "white",
  };

  render() {
    return (
      <div className="main">
        <div>
          <Title></Title>
          <hr className="titleHr" />
          {/* buttons */}
          <div className="Menu">
            <ul className="menuStyle">
              <li className="listItems">
                <button
                  className="menuButton"
                  onClick={() => {
                    this.setState({
                      showAbout: true,
                      showAlgo: false,
                      showOther: false,
                    });
                  }}
                >
                  ABOUT ME
                </button>
              </li>
              <li className="listItems">
                <button
                  className="menuButton"
                  onClick={() => {
                    this.setState({
                      showAbout: false,
                      showAlgo: true,
                      showOther: false,
                    });
                  }}
                >
                  SORTING ALGORITHMS
                </button>
              </li>
              <li className="listItems">
                <button
                  className="menuButton"
                  onClick={() => {
                    this.setState({
                      showAbout: false,
                      showAlgo: false,
                      showOther: true,
                    });
                  }}
                >
                  OTHER PROJECTS
                </button>
              </li>
            </ul>
          </div>
          <div>
            <div>{this.state.showAbout && <About></About>}</div>
            <div>{this.state.showAlgo && <SortingAlgos></SortingAlgos>}</div>
            <div>{this.state.showOther && <OtherProjects></OtherProjects>}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

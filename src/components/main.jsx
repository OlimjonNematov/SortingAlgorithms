import React, { Component } from "react";
import Menu from "./menu";
import Title from "./title";
import "./index.css";

class Main extends Component {
  state = {
    visible: true,
    gradient: "linear-gradient(#6B66AF,#C9775D)",
    img: "https://picsum.photos/1600/1000",
    titleColor: "white",
  };

  render() {
    return (
      <div className="main">
        {this.state.visible && (
          <div>
            <Title></Title>
            <hr className="hr" />
            <Menu></Menu>
          </div>
        )}
      </div>
    );
  }
}

export default Main;

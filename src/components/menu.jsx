import React, { Component } from "react";
import "./index.css";

class Menu extends Component {
  state = {
    list: ["ABOUT ME", "SORTING ALGORITHMS", "COOL PROJECTS"],
  };
  render() {
    return (
      <div className="Menu">
        <ul className="menuStyle">{this.renderTag()}</ul>
      </div>
    );
  }

  renderTag() {
    return this.state.list.map((tag) => (
      <li className="listItems" key={tag}>
        <button className="menuButton">{tag}</button>
      </li>
    ));
  }
}

export default Menu;

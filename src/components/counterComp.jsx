import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 10,
    img: 'URL("https://picsum.photos/200")',
    list: ["item1", "item2", "item3", "item4"],
  };
  constructor() {
    super();
    console.log("hi");
  }
  decideToRender() {
    if (this.state.list.length === 0) {
      return "please add an item to list";
    }
    return this.state.list;
  }

  render() {
    return (
      <React.Fragment>
        <img src={this.state.img} alt="" /> <br />
        <h1 className={this.interatorClass()}>{this.countVar()}</h1>
        <button onClick={this.buttonClicked()}>+</button> <br />
        <h2>{this.state.list.length === 0 && "Please add a value"}</h2>
        <ul>{this.renderTags()}</ul>
      </React.Fragment>
    );
  }
  renderTags() {
    return this.state.list.map((id) => <li>{id}</li>);
  }
  buttonClicked() {
    this.state.count++;
    console.log(this.state.count);
  }
  interatorClass() {
    let s = "badge m-2 badge-";
    s += this.state.count === 0 ? "warning" : "primary";
    return s;
  }
  countVar() {
    const count = this.state.count;

    return count === 0 ? "Zero" : <h1>{count}</h1>;
  }
}

export default Counter;

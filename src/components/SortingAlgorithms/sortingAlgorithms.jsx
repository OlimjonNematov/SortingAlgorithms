import React, { Component } from "react";
import "./bubble.js";
import { bubbleSort } from "./bubble.js";
const ANIMATION_SPEED = 0.05;
class SortingAlgos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arr: [],
      showBubble: false,
      showQuick: false,
      showInsertion: false,
      showMerge: false,
      showHeap: false,
      disableButtons: false,
    };
  }
  componentDidMount() {
    this.generateArray();
  }
  generateArray() {
    const tempArr = [];
    for (let i = 1; i < window.innerWidth / 6; i++) {
      tempArr.push(
        Math.floor(Math.random() * (window.innerHeight / 5 - 5 + 1) + 5)
      );
    }
    this.setState({ arr: tempArr });
  }
  enableButtons() {
    this.setState({});
  }
  bubble() {
    const [animationArray, sortedArray] = bubbleSort(this.state.arr);
    this.setState({ arr: sortedArray });
    console.log(animationArray.length);
    for (let i = 0; i < animationArray.length; i++) {
      const bars = document.getElementsByClassName("bar");
      const swapped = i % 4 === 1 || i % 4 === 0;
      if (!swapped) {
        const [barIndex, newHeight] = animationArray[i];
        if (barIndex === -1) {
          continue;
        }
        const barStyle = bars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED);
      }
    }
    setTimeout(() => {
      this.setState({ disableButtons: false });
    }, ANIMATION_SPEED * animationArray.length);
    console.log("hi");
  }

  render() {
    const { arr } = this.state;
    return (
      <div id="algoMain" className="mainContent">
        <ul className="algoList">
          <li className="algoListItem">
            <button
              disabled={this.state.disableButtons}
              onClick={() => {
                this.bubble(arr);
                this.setState({
                  showBubble: true,
                  showQuick: false,
                  showInsertion: false,
                  showMerge: false,
                  showHeap: false,
                  disableButtons: true,
                });
              }}
              className="algoListButtons"
            >
              Bubblesort
            </button>
          </li>
          <li className="algoListItem">
            <button
              disabled={this.state.disableButtons}
              onClick={() => {
                this.setState({
                  showBubble: false,
                  showQuick: true,
                  showInsertion: false,
                  showMerge: false,
                  showHeap: false,
                  disableButtons: true,
                });
              }}
              className="algoListButtons"
            >
              Quicksort
            </button>
          </li>
          <li className="algoListItem">
            <button
              disabled={this.state.disableButtons}
              onClick={() => {
                this.setState({
                  showBubble: false,
                  showQuick: false,
                  showInsertion: false,
                  showMerge: false,
                  showHeap: true,
                  disableButtons: true,
                });
              }}
              className="algoListButtons"
            >
              Heapsort
            </button>
          </li>
          <li className="algoListItem">
            <button
              disabled={this.state.disableButtons}
              onClick={() => {
                this.setState({
                  showBubble: false,
                  showQuick: false,
                  showInsertion: false,
                  showMerge: true,
                  showHeap: false,
                  disableButtons: true,
                });
              }}
              className="algoListButtons"
            >
              Mergesort
            </button>
          </li>
          <li className="algoListItem">
            <button
              disabled={this.state.disableButtons}
              onClick={() => {
                this.setState({
                  showBubble: false,
                  showQuick: false,
                  showInsertion: true,
                  showMerge: false,
                  showHeap: false,
                  disableButtons: true,
                });
              }}
              className="algoListButtons"
            >
              Insertionsort
            </button>
          </li>
        </ul>
        <div>
          {arr.map((val, tag) => (
            <div key={tag} className="bar" style={{ height: val + "px" }}></div>
          ))}
        </div>
        <button
          disabled={this.state.disableButtons}
          className="algoListButtons"
          onClick={() => this.generateArray()}
        >
          Generate new Array
        </button>
      </div>
    );
  }
}

export default SortingAlgos;

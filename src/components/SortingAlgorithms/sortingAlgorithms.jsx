import React, { Component } from "react";
import "./bubble.js";
import { bubbleSort } from "./bubble.js";
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
      stopCurrent: false,
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

  bubble() {
    const [animationArray, sortedArray] = bubbleSort(this.state.arr);
    console.log(animationArray.length);
    for (let i = 0; i < animationArray.length; i++) {
      if (this.state.stopCurrent || this.state.showBubble) {
        break;
      }
      const bars = document.getElementsByClassName("bar");
      const swapped = i % 4 === 1 || i % 4 === 0;
      if (swapped) {
        const color = i % 4 === 0 ? "red" : "white";
        const [firstBar, secondBar] = animationArray[i];
        const firstBarStyle = bars[firstBar].style;
        const secondBarStyle = bars[secondBar].style;

        setTimeout(() => {
          firstBarStyle.backgroundColor = color;
          secondBarStyle.backgroundColor = color;
        }, i * 0.05);
      } else {
        const [barIndex, newHeight] = animationArray[i];
        if (barIndex === -1) {
          continue;
        }
        const barStyle = bars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * 0.05);
      }
    }
    console.log("done");
  }

  render() {
    const { arr } = this.state;
    return (
      <div id="algoMain" className="mainContent">
        <ul className="algoList">
          <li className="algoListItem">
            <button
              onClick={() => {
                this.bubble(arr);
                this.setState({
                  showBubble: true,
                  showQuick: false,
                  showInsertion: false,
                  showMerge: false,
                  showHeap: false,
                });
              }}
              className="algoListButtons"
            >
              Bubblesort
            </button>
          </li>
          <li className="algoListItem">
            <button
              onClick={() => {
                this.setState({
                  showBubble: false,
                  showQuick: true,
                  showInsertion: false,
                  showMerge: false,
                  showHeap: false,
                });
              }}
              className="algoListButtons"
            >
              Quicksort
            </button>
          </li>
          <li className="algoListItem">
            <button
              onClick={() => {
                this.setState({
                  showBubble: false,
                  showQuick: false,
                  showInsertion: false,
                  showMerge: false,
                  showHeap: true,
                });
              }}
              className="algoListButtons"
            >
              Heapsort
            </button>
          </li>
          <li className="algoListItem">
            <button
              onClick={() => {
                this.setState({
                  showBubble: false,
                  showQuick: false,
                  showInsertion: false,
                  showMerge: true,
                  showHeap: false,
                });
              }}
              className="algoListButtons"
            >
              Mergesort
            </button>
          </li>
          <li className="algoListItem">
            <button
              onClick={() => {
                this.setState({
                  showBubble: false,
                  showQuick: false,
                  showInsertion: true,
                  showMerge: false,
                  showHeap: false,
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
          className="algoListButtons"
          onClick={() => this.generateArray()}
        >
          Generate new Array
        </button>
        <button
          className="algoListButtons"
          onClick={() => {
            console.log("stoped, " + this.state.stopCurrent);
            this.setState({
              stopCurrent: true,
            });
          }}
        >
          Stop
        </button>
      </div>
    );
  }
}

export default SortingAlgos;

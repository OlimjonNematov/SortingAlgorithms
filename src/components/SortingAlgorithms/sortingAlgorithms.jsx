import React, { Component } from "react";
import Bubble from "./bubble";
import Heap from "./heap";
import Insertion from "./insertion";
import Merge from "./merge";
import Quick from "./quick";
class SortingAlgos extends Component {
  state = {
    showBubble: false,
    showQuick: false,
    showInsertion: false,
    showMerge: false,
    showHeap: false,
  };
  render() {
    return (
      <div id="algoMain" className="mainContent">
        <ul className="algoList">
          <li className="algoListItem">
            <button
              onClick={() => {
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
        <div>{this.state.showBubble && <Bubble></Bubble>}</div>
        <div>{this.state.showHeap && <Heap></Heap>}</div>
        <div>{this.state.showInsertion && <Insertion></Insertion>}</div>
        <div>{this.state.showMerge && <Merge></Merge>}</div>
        <div>{this.state.showQuick && <Quick></Quick>}</div>
      </div>
    );
  }
}

export default SortingAlgos;

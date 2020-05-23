import React, { Component } from "react";
import "./bubble.js";
import { bubbleSort } from "./bubble.js";
import { quickSort, clearQuickAnimationsArray, quickAnimations } from "./quick";
import { mergeSort, clearMergeAnimationsArray, mergeAnimations } from "./merge";
import {
  selectionSort,
  clearSelectionAnimationsArray,
  selectionAnimations,
} from "./selection";
const ANIMATION_SPEED = 5;
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
  //------------------------------------testing sorting methods------------------------------------
  testSortingAlgorithm(sortNumber) {
    for (let j = 0; j < 50; j++) {
      let randomArray = [];
      let sortedTempArr = [];
      //populate the array
      for (let i = 1; i < window.innerWidth / 6; i++) {
        randomArray.push(
          Math.floor(Math.random() * (window.innerHeight / 5 - 5 + 1) + 5)
        );
      }
      if (sortNumber === 0) {
        sortedTempArr = bubbleSort(randomArray);
      } else if (sortNumber === 1) {
        sortedTempArr = quickSort(randomArray, 0);
      }
      let jsSortedArray = randomArray.sort(function (a, b) {
        return a - b;
      });

      //conpare every element

      for (let i = 0; i < sortedTempArr.length; ++i) {
        if (sortedTempArr[i] !== jsSortedArray[i]) return false;
      }
      // let int = clearAnimationsArray();
      // animations = [];
    }
    return true;
  }
  //------------------------------------bubble sort animation------------------------------------
  bubble() {
    let copyOfArr = this.state.arr;
    const animationArray = bubbleSort(copyOfArr);
    console.log();
    for (let i = 0; i < animationArray.length; i++) {
      const bars = document.getElementsByClassName("bar");
      const [barIndex, newHeight] = animationArray[i];
      const barStyle = bars[barIndex].style;
      setTimeout(() => {
        barStyle.height = `${newHeight}px`;
      }, (i * ANIMATION_SPEED) / 100);
    }
    setTimeout(() => {
      this.setState({ disableButtons: false });
    }, (ANIMATION_SPEED * animationArray.length) / 100);
  }

  //------------------------------------quick sort animation------------------------------------
  quick() {
    const copyOfArr = this.state.arr.slice();
    quickSort(copyOfArr, 0, copyOfArr.length - 1);
    const animationArray = quickAnimations;
    for (let i = 0; i < animationArray.length; i++) {
      const bars = document.getElementsByClassName("bar");
      const [barIndex, newHeight] = animationArray[i];
      const barStyle = bars[barIndex].style;
      setTimeout(() => {
        barStyle.height = `${newHeight}px`;
      }, i * ANIMATION_SPEED);
    }
    setTimeout(() => {
      clearQuickAnimationsArray();
      this.setState({ disableButtons: false });
    }, ANIMATION_SPEED * animationArray.length);
  }

  //------------------------------------merge sort animation------------------------------------
  merge() {
    let copyOfArr = this.state.arr.slice();
    const animationsArray = mergeAnimations;
    mergeSort(copyOfArr);

    for (let i = 0; i < animationsArray.length; i++) {
      const bars = document.getElementsByClassName("bar");
      const [barIndex, newHeight] = animationsArray[i];
      const barStyle = bars[barIndex].style;
      setTimeout(() => {
        barStyle.height = `${newHeight}px`;
      }, i * ANIMATION_SPEED);
    }

    setTimeout(() => {
      clearMergeAnimationsArray();
      this.setState({ disableButtons: false });
    }, ANIMATION_SPEED * animationsArray.length);
  }
  selection() {
    console.log("sorted:" + selectionSort(this.state.arr));
    const animations = selectionAnimations;
    console.log(selectionAnimations);
    for (let i = 0; i < animations.length; i++) {
      console.log(animations[i]);
    }
    for (let i = 0; i < animations.length; i++) {
      const bars = document.getElementsByClassName("bar");
      const [barIndex, newHeight] = animations[i];
      const barStyle = bars[barIndex].style;
      setTimeout(() => {
        barStyle.height = `${newHeight}px`;
      }, (i * ANIMATION_SPEED) / 100);
    }
    setTimeout(() => {
      clearSelectionAnimationsArray();
      this.setState({ disableButtons: false });
    }, (animations.length * ANIMATION_SPEED) / 100);
  }
  //------------------------------------render ------------------------------------
  render() {
    const { arr } = this.state;
    return (
      <div id="algoMain" className="mainContent">
        <ul className="algoList">
          <li className="algoListItem">
            <button
              disabled={this.state.disableButtons}
              onClick={() => {
                this.bubble();
                this.setState({
                  disableButtons: true,
                });
              }}
              className="algoListButtons"
            >
              Bubblesort (x500)
            </button>
          </li>
          <li className="algoListItem">
            <button
              disabled={this.state.disableButtons}
              onClick={() => {
                this.quick();
                this.setState({
                  disableButtons: true,
                });
              }}
              className="algoListButtons"
            >
              Quicksort(x5)
            </button>
          </li>
          <li className="algoListItem">
            <button
              disabled={this.state.disableButtons}
              onClick={() => {
                this.selection();
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
              Selectionsort (x500)
            </button>
          </li>
          <li className="algoListItem">
            <button
              disabled={this.state.disableButtons}
              onClick={() => {
                this.merge();
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

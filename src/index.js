import React from "react";
import ReactDOM from "react-dom";

const element = <h1>hi kids</h1>;

React.createContext(element);

ReactDOM.render(element, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Main from "./components/main";

const element = <h1>hi kids</h1>;

React.createContext(element);

ReactDOM.render(<Main />, document.getElementById("root"));

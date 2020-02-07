import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/searchBar/searchBar";
import "./styles/main.css";

const element = (
  <React.Fragment>
    <SearchBar></SearchBar>
  </React.Fragment>
);
ReactDOM.render(element, document.getElementById("root"));
console.log(element);

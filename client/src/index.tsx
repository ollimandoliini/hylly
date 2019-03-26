import React, { Component } from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";
import "./index.css";

const App = () => {
  return (
    <div className="mainWrap">
      <header className="header">
        <h1 className="title">Hylly</h1>
      </header>
      <div className="content">
        <Main />
      </div>
      <footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

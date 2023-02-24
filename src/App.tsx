import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/headerComponent";
import footerComp from "./components/footerComponent";
import mainComponent from "./components/mainComponent";

function App() {
  return (
    <div className="App">
      <Header />
      <mainComponent />
      <footerComp />
    </div>
  );
}

export default App;

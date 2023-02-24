import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/headerComponent";
import FooterComp from "./components/footerComponent";
import MainComponent from ".//components/mainComponent";

function App() {
  return (
    <div className="App">
      <Header />
      <MainComponent />
      <FooterComp />
    </div>
  );
}

export default App;

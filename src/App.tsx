import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/headerComponent";
import FooterComp from "./components/footerComponent";
import MainComponent from ".//components/mainComponent";

function App() {
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap"
    rel="stylesheet"
  />;
  return (
    <div className="App">
      <Header />
      <MainComponent />
      <FooterComp />
    </div>
  );
}

export default App;

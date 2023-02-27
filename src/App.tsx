import React, { useState } from "react";
import { createContext, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/headerComponent";
import FooterComp from "./components/footerComponent";
import MainComponent from ".//components/mainComponent";
import { MyGlobalContext } from "./components/mapHelpers";

function App() {
  const [lang, setLang] = useState<string>("RU");

  return (
    <MyGlobalContext.Provider value={{ lang, setLang }}>
      <div className="App">
        <Header />
        <MainComponent />
        <FooterComp />
      </div>
    </MyGlobalContext.Provider>
  );
}

export default App;

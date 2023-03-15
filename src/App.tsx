import React, { useState } from "react";
import { createContext, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/headerComponent";
import FooterComp from "./components/footerComponent";
import MainComponent from ".//components/mainComponent";
import { MyGlobalContext } from "./components/mapHelpers";
import { Route, Routes } from "react-router-dom";
import { Form1Component } from "./components/Form1Component";

function App() {
  const [lang, setLang] = useState<string>("RU");

  return (
    <MyGlobalContext.Provider value={{ lang, setLang }}>
      <div className="App">
        {/* <ul className="menu">
            <li>
              <a href="#">ГЛАВНАЯ</a>"
            </li>
            <li>
              <a href="./about">О НАС</a>"
            </li>
            <li>
              <a href="#">КОМАНДА</a>"
            </li>
            <li>
              <a href="#">РАБОТЫ</a>"
            </li>
            <li>
              <a href="#">КОНТАКТЫ</a>"
            </li>
          </ul> */}
        {/* <Header />
        <MainComponent />
        <FooterComp /> */}
        <Routes>
          {/* <Route path="/" element={<Header />} /> */}
          <Route path="./about" element={<Form1Component />} />
        </Routes>
      </div>
    </MyGlobalContext.Provider>
  );
}

export default App;

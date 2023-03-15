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
import { Form2Component } from "./components/Form2Component";
import { MainPage } from "./pages/mainPage";
import SinglePage from "./pages/singlePage";

function App() {
  const [lang, setLang] = useState<string>("RU");

  return (
    <MyGlobalContext.Provider value={{ lang, setLang }}>
      <div className="App">
        {/* <Header />
        <MainComponent />
        <FooterComp /> */}
        <Routes>
          <Route path="/" element={<MainPage />}>
            {/* <Route index element={<MainPage />} /> */}
            <Route path="/about" element={<Form1Component />} />
            <Route path="/contacts" element={<Form2Component />} />
            {/* <Route path="/about:id" element={<SinglePage  />} /> */}
          </Route>
        </Routes>
      </div>
    </MyGlobalContext.Provider>
  );
}

export default App;

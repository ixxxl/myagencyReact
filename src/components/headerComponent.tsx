import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useGlobalContext } from "./mapHelpers";
import { ELanguages } from "./models/lang";
import "../App.css";
import CustomLinkComponent from "./CustomLinkComponent";

export default function Header() {
  const { lang, setLang } = useGlobalContext();

  return (
    <div className="header-wrap">
      <header className="header">
        <div className="header-top">
          <a href="#">
            <img
              src="./logo.png"
              alt="Tajam - креативное агентсво"
              className="logo"
            ></img>
          </a>
          <ul className="menu">
            <li>
              <a href="#">ГЛАВНАЯ</a>"
            </li>
            <li>
              {/* <CustomLinkComponent to="/about">О НАС</CustomLinkComponent> */}
              <NavLink
                className={({ isActive }) => (isActive ? "active-link" : "")}
                to="/about"
              >
                О НАС
              </NavLink>
            </li>
            <li>
              <a href="#">КОМАНДА</a>"
            </li>
            <li>
              <a href="#">РАБОТЫ</a>"
            </li>
            <li>
              <NavLink to="/contacts">КОНТАКТЫ</NavLink>"
            </li>
          </ul>
          {/* <Outlet /> */}
          <div className="lang-buttons">
            <button
              onClick={() => setLang(ELanguages.ro)}
              style={{
                backgroundColor: lang === ELanguages.ro ? "yellow" : "white",
              }}
            >
              RO
            </button>
            <button
              onClick={() => setLang(ELanguages.ru)}
              style={{
                backgroundColor: lang === ELanguages.ru ? "yellow" : "white",
              }}
            >
              RU
            </button>
          </div>
        </div>
        <div className="header-main">
          <h1>Tajam - креативное агентсво</h1>
          <h2>
            Полное погружение в проект и подбор оптимального набора услуг и
            инструментов индивидуально для вас. Разработаем удобный для
            пользователя сайт, который решит задачи бизнеса и принесет прибыль.
            Разрабатываем маркетинговые стратегии, которые позволяют бизнесу
            устойчиво развиваться.
          </h2>
          <p>
            <a href="#" className="linkButton">
              Подробнее
            </a>
          </p>
        </div>
      </header>
    </div>
  );
}

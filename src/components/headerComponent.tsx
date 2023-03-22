import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useGlobalContext } from "./mapHelpers";
import { ELanguages } from "./models/lang";
import "../App.css";
import CustomLinkComponent from "./CustomLinkComponent";
import {
  ActiveLink,
  HeadeR,
  HeaderMain,
  HeaderMainH1,
  HeaderMainH2,
  HeaderTop,
  HeaderWrap,
  LangButtons,
  LinkButton,
  Logo,
  Menu,
  MenuLi,
  MenuLiA,
} from "./StyleComponent";

export default function Header() {
  const { lang, setLang } = useGlobalContext();

  return (
    <HeaderWrap>
      <HeadeR>
        <HeaderTop>
          <MenuLiA href="#">
            <Logo src="./logo.png" alt="Tajam - креативное агентсво"></Logo>
          </MenuLiA>
          <Menu>
            <MenuLi>
              <MenuLiA href="#">ГЛАВНАЯ</MenuLiA>"
            </MenuLi>
            <MenuLi>
              {/* <CustomLinkComponent to="/about">О НАС</CustomLinkComponent> */}
              <ActiveLink to="/about">О НАС</ActiveLink>
            </MenuLi>
            <MenuLi>
              <MenuLiA href="#">КОМАНДА</MenuLiA>"
            </MenuLi>
            <MenuLi>
              <MenuLiA href="#">РАБОТЫ</MenuLiA>"
            </MenuLi>
            <MenuLi>
              <ActiveLink to="/contacts">КОНТАКТЫ</ActiveLink>"
            </MenuLi>
          </Menu>
          {/* <Outlet /> */}
          <LangButtons>
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
          </LangButtons>
        </HeaderTop>
        <HeaderMain>
          <HeaderMainH1>Tajam - креативное агентсво</HeaderMainH1>
          <HeaderMainH2>
            Полное погружение в проект и подбор оптимального набора услуг и
            инструментов индивидуально для вас. Разработаем удобный для
            пользователя сайт, который решит задачи бизнеса и принесет прибыль.
            Разрабатываем маркетинговые стратегии, которые позволяют бизнесу
            устойчиво развиваться.
          </HeaderMainH2>
          <p>
            <LinkButton>Подробнее</LinkButton>
          </p>
        </HeaderMain>
      </HeadeR>
    </HeaderWrap>
  );
}

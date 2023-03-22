import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrap = styled.div`
  background: #402d70 url(/public/tajem_header75.jpg);
  background-size: cover;
`;

export const HeadeR = styled.div`
  width: 950px;
  margin: 0 auto;
  padding: 0 10px;
  box-sizing: border-box;
`;

export const HeaderTop = styled.div`
  overflow: hidden;
  padding: 15px;
  margin-bottom: 160px;
`;

export const Logo = styled.img`
  float: left;
`;

export const Menu = styled.ul`
  float: right;
  list-style: none;
`;

export const MenuLi = styled.li`
  float: left;
  margin-left: 25px;
  padding-top: 15px;
`;
export const MenuLiA = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  font-size: 13px;
  text-transform: uppercase;
`;

export const ActiveLink = styled(NavLink)`
  color: #fff;
  &:active {
    cursor: default;
    color: red;
  }
`;

export const HeaderMain = styled.div`
  color: #fff;
  text-align: center;
  width: 750px;
  margin: 0 auto;
  padding-bottom: 205px;
`;

export const HeaderMainH1 = styled.h1`
  font-size: 32px;
  margin-bottom: 50px;
`;

export const HeaderMainH2 = styled.h2`
  font-size: 14px;
  font-weight: 300px;
  margin-bottom: 50px;
  line-height: 24px;
`;
export const LinkButton = styled.button`
  display: inline-block;
  padding: 10px 15px;
  font-weight: 500;
  text-decoration:   
  border: 1px solid #00e0d0;
  color: #00e0d0;
    `;

export const Content = styled.main`
  width: 950px;
  margin: 0 auto;
  padding: 0 10px;
  box-sizing: border-box;
`;

export const HistoryArticle = styled.article`
  padding-top: 70px;
  margin-bottom: 70px;
`;

export const ImgLeft = styled.img`
  float: left;
  margin: 15px 100px;
`;

export const HistoryTextP = styled.div`
  font-size: 14px;
  margin-bottom: 24px;
  line-height: 22px;
`;
export const HistoryTextH2 = styled.h2`
  text-transform: uppercase;
  font-size: 22px;
  margin-bottom: 24px;
`;

export const Form = styled.div`
  width: 460px;
  margin: 0 auto 100px auto;
`;

export const FormH2 = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-size: 22px;
  margin-bottom: 24px;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 10px 15px;
  font-weight: 500;
  text-decoration: none;
  border: 1px solid #00e0d0;
  color: #00e0d0;
  background: none;
  font-size: 16px;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid #e5e5e5;
  font-size: 14px;
  color: #413d4b;
  outline: none;
  margin-bottom: 20px;
  padding: 25px 20px;
`;

export const FooterWrap = styled.div`
  background: #332954 url(/public/footer.png);
  background-size: cover;
`;

export const Footer = styled.footer`
  width: 950px;
  margin: 0 auto;
  padding: 70px 10px;
  box-sizing: border-box;
  overflow: hidden;
`;

export const FooterImg = styled.img`
  float: left;
`;

export const FooterP = styled.p`
  float: right;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  margin-top: 17px;
`;

export const LangButtons = styled.div`
  width: 750px;
  padding-left: 505px;
`;


//   .textarea__text {
//     width: 100%;
//     border: 1px solid #e5e5e5;
//     font-size: 14px;
//     color: #413d4b;
//     outline: none;
//     margin-bottom: 20px;
//     padding: 25px 20px;
//     height: 150px;
//   }


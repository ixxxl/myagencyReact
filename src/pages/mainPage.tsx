import { Outlet } from "react-router-dom";
import FooterComp from "../components/footerComponent";
import Header from "../components/headerComponent";
import MainComponent from "../components/mainComponent";

export const MainPage = () => {
  return (
    <>
      <Header />
      <MainComponent />
      <FooterComp />
    </>
  );
};

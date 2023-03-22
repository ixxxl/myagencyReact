import { Footer, FooterImg, FooterP, FooterWrap } from "./StyleComponent";

export default function FooterComp() {
  return (
    <FooterWrap>
      <Footer>
        <a href="#">
          <FooterImg src="./logo.png" alt=""  />
        </a>
        <FooterP>Copyright © 2021 - Tajem Creative</FooterP>
      </Footer>
    </FooterWrap>
  );
}

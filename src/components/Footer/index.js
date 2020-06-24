import React from "react";
import "./styles.js";
import { Container, FooterContent } from "./styles";

const Footer = () => {
  return (
    <Container>
      <FooterContent
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease"
        data-sal-duration="1000"
      >
        <p>
          © 2020 <span>Onix Mármores e Granitos</span> | Por{" "}
          <a href="https://impuls-e.works">Impuls-e</a>
        </p>
      </FooterContent>
    </Container>
  );
};
export default Footer;

import React from "react";
import { SocialProfileJsonLd } from "gatsby-plugin-next-seo";

import { Container, HeroContent } from "./styles";

export default function Hero() {
  return (
    <>
      <SocialProfileJsonLd
        type="Person"
        name="Impulse"
        url="https://onixmarmoresegranitos.com.br/"
        sameAs={[
          "https://www.facebook.com/onixmarmoresegranitos",
          "https://instagram.com/onixmarmoresegranitos",
        ]}
      />

      <Container>
        <HeroContent></HeroContent>
      </Container>
    </>
  );
}

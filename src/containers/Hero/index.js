import React from "react";
import { SocialProfileJsonLd } from "gatsby-plugin-next-seo";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import { Container, HeroContent } from "./styles";

export default function Hero() {
  const data = useStaticQuery(
    graphql`
      query Image {
        desktop: file(relativePath: { eq: "bazar-icon.png" }) {
          childImageSharp {
            fluid(maxWidth: 256) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );
  return (
    <>
      <SocialProfileJsonLd
        type="Person"
        name="Impulse"
        url="https://bazardaschaves.netlify.app/"
        sameAs={[
          "https://www.facebook.com/bazardaschaves",
          "https://instagram.com/bazardaschavesecarimbos",
        ]}
      />

      <Container>
        <HeroContent></HeroContent>
      </Container>
    </>
  );
}

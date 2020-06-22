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
        <HeroContent>
          <h1
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            Bazar das Chaves e Carimbos
          </h1>
          <div>
            <h2
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              Confiança e qualidade no centro de Florianópolis
            </h2>
            <Img
              fluid={data.desktop.childImageSharp.fluid}
              alt="An image apresentation from current project"
            />
          </div>
        </HeroContent>
      </Container>
    </>
  );
}

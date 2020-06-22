/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import BackgroundImage from "gatsby-background-image";
import { graphql, useStaticQuery } from "gatsby";

import "./styles.css";

export default function Layout({ children }) {
  const { mobileImage, desktopImage } = useStaticQuery(
    graphql`
      query BackgroungImage {
        mobileImage: file(relativePath: { eq: "background/mobile.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 765) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        desktopImage: file(relativePath: { eq: "background/desktop.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );
  const sources = [
    mobileImage.childImageSharp.fluid,
    {
      ...desktopImage.childImageSharp.fluid,
      media: `(min-width: 765px)`,
    },
  ];

  return (
    <>
      <main>
        <BackgroundImage
          Tag="section"
          className="background"
          fluid={sources}
          backgroundColor={`#040e18`}
        />
        {children}
      </main>
    </>
  );
}

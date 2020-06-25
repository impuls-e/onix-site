/* eslint-disable graphql/template-strings */
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import { Container, PortfolioContent, Wrapper } from "./styles";

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query Portfoliosquery {
      allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 9) {
        edges {
          node {
            id
            likes
            caption
            comments
            localFile {
              childImageSharp {
                fluid(quality: 70, maxWidth: 600, maxHeight: 600) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `);

  const portfolios = data.allInstaNode.edges;
  return (
    <>
      <Container id="portfolios">
        <PortfolioContent>
          <h3
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            Siga-nos no Instagram
          </h3>

          {portfolios.map((portfolio) => (
            <div
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease"
              data-sal-duration="1000"
              key={portfolio.node.id}
            >
              <a
                target="_blank"
                href={`https://www.instagram.com/p/${portfolio.node.id}/`}
              >
                <Img
                  fluid={portfolio.node.localFile.childImageSharp.fluid}
                  alt="An image apresentation from current portfolio"
                />
              </a>
            </div>
          ))}
        </PortfolioContent>
      </Container>
    </>
  );
};
export default Portfolio;

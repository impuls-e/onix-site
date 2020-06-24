/* eslint-disable graphql/template-strings */
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import { Container, PortfolioContent } from "./styles";

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query Portfoliosuery {
      allMdx(filter: { frontmatter: { tag: { eq: "portfolios" } } }) {
        edges {
          node {
            id
            frontmatter {
              title
              description
              imgUrl {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const portfolios = data.allMdx.edges;

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
              <Img
                fluid={portfolio.node.frontmatter.imgUrl.childImageSharp.fluid}
                alt="An image apresentation from current portfolio"
              />
              <h4>{portfolio.node.frontmatter.title}</h4>
              <p>{portfolio.node.frontmatter.description}</p>
            </div>
          ))}
        </PortfolioContent>
      </Container>
    </>
  );
};
export default Portfolio;

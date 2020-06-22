/* eslint-disable graphql/template-strings */
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import { Container, ServiceContent } from "./styles";

const Services = () => {
  const data = useStaticQuery(graphql`
    query ServicesQuery {
      allMdx(filter: { frontmatter: { tag: { eq: "services" } } }) {
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

  const services = data.allMdx.edges;

  return (
    <>
      <Container id="services">
        <ServiceContent>
          <h3
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            Nossos Serviços
          </h3>
          {services.map((service) => (
            <div
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease"
              data-sal-duration="1000"
              key={service.node.id}
            >
              <Img
                fluid={service.node.frontmatter.imgUrl.childImageSharp.fluid}
                alt="An image apresentation from current service"
              />
              <h4>{service.node.frontmatter.title}</h4>
              <p>{service.node.frontmatter.description}</p>
            </div>
          ))}
        </ServiceContent>
      </Container>
    </>
  );
};
export default Services;

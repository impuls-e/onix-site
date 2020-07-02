/* eslint-disable graphql/template-strings */
import React, { createRef, useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { IoMdHeart } from "react-icons/io";
import { FaComment } from "react-icons/fa";

import { Container, PortfolioContent, Insta } from "./styles";

const Portfolio = ({ limit }) => {
  const data = useStaticQuery(graphql`
    query Portfoliosquery {
      allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 12) {
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

  const [showVideo, setShowVideo] = useState(false);

  const container = createRef();

  let videoObserver;

  useEffect(() => {
    videoObserver = new IntersectionObserver(onVideoIntersection, {
      rootMargin: "100px 0px",
      threshold: 0.25,
    });
    if (window && "IntersectionObserver" in window) {
      if (container && container.current) {
        videoObserver.observe(container.current);
      }
    } else {
      setShowVideo(true);
    }
  }, [container]);
  function onVideoIntersection(entries) {
    if (!entries || entries.length <= 0) {
      return;
    }

    if (entries[0].isIntersecting) {
      setShowVideo(true);
      videoObserver.disconnect();
    }
  }

  return (
    <>
      <Container id="portfolios">
        <PortfolioContent ref={container}>
          <h3
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            Siga-nos no Instagram{" "}
            <a
              className="insta"
              href="https://www.instagram.com/bazardaschavesecarimbos/"
            >
              @onixmarmoresegranitos
            </a>
          </h3>
          {showVideo
            ? portfolios.slice(0, limit).map((portfolio) => (
                <div key={portfolio.node.id}>
                  <a
                    target="_blank"
                    href={`https://www.instagram.com/p/${portfolio.node.id}/`}
                  >
                    <Img
                      fluid={portfolio.node.localFile.childImageSharp.fluid}
                      alt="An image apresentation from current portfolio"
                    />
                    <Insta>
                      <span>
                        <IoMdHeart />
                        <strong>{portfolio.node.likes}</strong>
                      </span>

                      {portfolio.node.comments && (
                        <span>
                          <FaComment />
                          <strong>{portfolio.node.comments}</strong>
                        </span>
                      )}
                    </Insta>
                  </a>
                  <p>{portfolio.node.caption}</p>
                </div>
              ))
            : undefined}
        </PortfolioContent>
      </Container>
    </>
  );
};
export default Portfolio;

import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
const SEO = () => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          title,
          descriptionTemplate,
          description,
          siteUrl,
          siteImage,
          twitterUsername,
        },
      },
    }) => {
      const image = `${siteUrl}${siteImage}`;
      return (
        <>
          <Helmet title={title} descriptionTemplate={descriptionTemplate}>
            <meta name="description" content={description} />
            <meta name="image" content={image} />
            <meta charSet="utf-8" />
            {siteUrl && <meta property="og:url" content={siteUrl} />}

            <meta property="og:type" content="website" />

            {title && <meta property="og:title" content={title} />}
            {description && (
              <meta property="og:description" content={description} />
            )}
            {image && <meta property="og:image" content="image" />}

            {image && <meta property="og:image:url" content={image} />}

            {image && <meta property="og:image:type" content="image/jpeg" />}
            {image && (
              <meta name="twitter:site" content="@bazardaschaves"></meta>
            )}
            <meta name="twitter:card" content="summary_large_image" />
            {twitterUsername && (
              <meta name="twitter:creator" content={twitterUsername} />
            )}
            {title && <meta name="twitter:title" content={title} />}
            {description && (
              <meta name="twitter:description" content={description} />
            )}
            {image && <meta name="twitter:image" content={image} />}
          </Helmet>
        </>
      );
    }}
  />
);
export default SEO;
SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
};
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
};
const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        descriptionTemplate
        description
        siteUrl
        siteImage
        twitterUsername
      }
    }
  }
`;

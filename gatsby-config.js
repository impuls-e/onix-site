const config = require("./data/config");

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    descriptionTemplate: config.siteDescription,
    description: config.siteDescription,
    siteUrl: config.siteUrl, // No trailing slash allowed!
    siteImage: config.siteImage, // Path to your image you placed in the 'static' folder
    siteRss: config.siteRss,
    twitterUsername: config.siteTwitter,
    author: config.author,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalyticsID,
        // this option places the tracking script into the head of the DOM
        head: true,
        // other options
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    {
      // For development
      // resolve: `..`,
      resolve: `gatsby-source-instagram`,
      options: {
        username: `7855732803`,
      },
    },
    `gatsby-plugin-mdx`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: "/",
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "standalone",
        icon: config.siteImage, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "pt-BR",
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Open Sans:400,700"],
        },
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-background-image`,
    {
      resolve: "gatsby-plugin-extract-schema",
      options: {
        dest: `${__dirname}/path/to/schema.json`,
      },
    },
    `gatsby-plugin-next-seo`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: config.siteUrl,
        sitemap: `${config.siteUrl}/sitemap.xml`,
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
    // animation
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: "[data-sal]", // Selector of the elements to be animated
        animateClassName: "sal-animate", // Class name which triggers animation
        disabledClassName: "sal-disabled", // Class name which defines the disabled state
        rootMargin: "0% 50%", // Corresponds to root's bounding box margin
        enterEventName: "sal:in", // Enter event name
        exitEventName: "sal:out", // Exit event name
      },
    },
  ],
};

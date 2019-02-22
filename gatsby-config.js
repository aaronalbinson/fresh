module.exports = {
  siteMetadata: {
    title: "Environ Digital"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-transition-link",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads"
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048
            }
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static"
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`aBeeZee`, `muli`]
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/img/logo.png",

        // WebApp Manifest Configuration
        appName: "Fresh Awards", // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: "auto",
        lang: "en-US",
        background: "#000000",
        theme_color: "#000000",
        display: "standalone",
        orientation: "any",
        start_url: "/",
        version: "1.1",

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    // {
    //   resolve: "gatsby-plugin-collections",
    //   options: {
    //     collections: [
    //       {
    //         name: "basicpage",
    //         folder: "src/pages/basicpage",
    //         permalink: "/:title",
    //         template: "basicpage"
    //       }
    //     ]
    //   }
    // },
    "gatsby-plugin-netlify" // make sure to keep it last in the array
  ]
};

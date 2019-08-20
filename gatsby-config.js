module.exports = {
  siteMetadata: {
    title: 'Unbenched',
    author: 'Unbenched',
    url: 'https://unbenched.org',
    description:
      'Unbenched is an organization that provides purposeful activities and conversations to inspire, support and motivate young adults in all areas of their lives.',
  },
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // The top level query type, can be anything you want!
        typeName: 'GCMS',
        // The field you'll query against, can also be anything you want.
        fieldName: 'gcms',
        // Your API endpoint, available from the dashboard and settings window.
        // You can use this endpoint that features US mountains for now.
        url: 'https://api-euwest.graphcms.com/v1/cjm7tab4c04ro019omujh708u/master',
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        // Setting a color is optional.
        color: 'tomato',
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Unbenched',
        short_name: 'Unbenched',
        start_url: '/',
        // background_color: '#663399',
        // theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/bench.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App  Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

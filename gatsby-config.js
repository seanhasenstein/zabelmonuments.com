require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Zabel Monuments | Manitowoc, Sheboygan, & Green Bay Wisconsin',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-use-query-params',
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        prefix: `zabel-monuments/gallery`,
        maxResults: 1000,
        tags: true,
      },
    },
  ],
};

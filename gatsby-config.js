require('dotenv').config();

module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-use-query-params`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
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
        context: true,
      },
    },
  ],
};

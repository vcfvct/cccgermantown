module.exports = {
  siteMetadata: {
    siteName: `CCCG Site`,
  },
  plugins: [
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CF_SPACE || 'tbg4auozuvoq',
        accessToken: process.env.CF_TOKEN || 'dd3ef9de39a41909f87b9fea13a0d9a028b3667145adfa54e629a1ac8dcf21ae'
      }
    },
  ],
}
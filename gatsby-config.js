module.exports = {
  siteMetadata: {
    name: `Tomb: Lock it down!`,
    tagline: `Yoursource for hiding your perfectly legal activities!`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Livvic`,
            variants: [`400`, `600`],
          },
        ],
      },
    },
  ],
}

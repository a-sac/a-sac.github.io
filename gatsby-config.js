module.exports = {
  siteMetadata: {
    title: "Sérgio Costa",
    description: "Whoever is reading this: you are awesome!",
    author: "@sergio_alvesc",
    image: "img.jpg"
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/round_img.png"
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass"
  ],
};

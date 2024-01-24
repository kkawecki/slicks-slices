import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Slicks slices`,
    siteUrl: `https://gatsby.pizza`,
    description: `the best pizza!`,
    twitter: '@slicksSlices',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '9y67tkoc',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};

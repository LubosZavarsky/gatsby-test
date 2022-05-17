import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

const gallery = ({ data }) => {
  const images = data.allFile.edges.map(({ node }) => node.childImageSharp);
  return (
    <Layout pageTitle="Gallery">
      {images.map((img) => (
        <div key={img.id} style={{ margin: '1rem' }}>
          <GatsbyImage image={img.gatsbyImageData} alt=""></GatsbyImage>
        </div>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
      edges {
        node {
          childImageSharp {
            id
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default gallery;

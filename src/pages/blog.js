import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const blog = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const data = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default blog;

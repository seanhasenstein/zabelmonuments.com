import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Gallery from '../../components/Gallery';
import SEO from '../../components/Seo';

export default function IndividualMonuments() {
  const data = useStaticQuery(graphql`
    query IndividualMonumentsQuery {
      allCloudinaryMedia(
        filter: { tags: { eq: "individual" } }
        sort: { fields: public_id, order: ASC }
      ) {
        edges {
          node {
            id
            secure_url
          }
        }
      }
    }
  `);

  return (
    <>
      <SEO
        title="Individual Monuments Gallery | Zabel Monuments"
        urlPath="gallery/individual-monuments"
      />
      <Gallery
        images={data.allCloudinaryMedia.edges}
        title="Individual Monuments"
      />
    </>
  );
}

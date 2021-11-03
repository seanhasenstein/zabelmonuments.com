import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Gallery from '../../components/Gallery';

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
    <Gallery
      images={data.allCloudinaryMedia.edges}
      galleryName="Individual Monuments"
      title="Individual Monuments Gallery | Zabel Monuments"
      description="A photo gallery of individual monuments that we have made for our customers."
      urlPath="gallery/individual-monuments"
    />
  );
}

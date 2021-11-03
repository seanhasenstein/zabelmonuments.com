import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Gallery from '../../components/Gallery';

export default function Etchings() {
  const data = useStaticQuery(graphql`
    query EtchingsQuery {
      allCloudinaryMedia(
        filter: { tags: { eq: "etching" } }
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
      galleryName="Etchings"
      title="Etchings Gallery | Zabel Monuments"
      description="A photo gallery of etchings on monuments that we have made custom for our customers."
      urlPath="gallery/etchings"
    />
  );
}

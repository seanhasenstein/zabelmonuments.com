import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Gallery from '../../components/Gallery';

export default function CompanionMonuments() {
  const data = useStaticQuery(graphql`
    query CompanionMonumentsQuery {
      allCloudinaryMedia(
        filter: { tags: { eq: "companion" } }
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
      galleryName="Companion Monuments"
      title="Companion Monuments Gallery | Zabel Monuments"
      description="A photo gallery of companion monuments that we have made for our customers."
      urlPath="gallery/companion-monuments"
    />
  );
}

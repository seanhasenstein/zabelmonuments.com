import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Gallery from '../../components/Gallery';

export default function HmongMonuments() {
  const data = useStaticQuery(graphql`
    query HmongMonumentsQuery {
      allCloudinaryMedia(
        filter: { tags: { eq: "hmong" } }
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
      galleryName="Hmong Monuments"
      title="Hmong Monuments Gallery | Zabel Monuments"
      description="A photo gallery of Hmong monuments that we have made for our customers."
      urlPath="gallery/hmong-monuments"
    />
  );
}

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Gallery from '../../components/Gallery';

export default function GardenArt() {
  const data = useStaticQuery(graphql`
    query GardenArtGallery {
      allCloudinaryMedia(
        filter: { tags: { eq: "garden-art" } }
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
      galleryName="Garden Art"
      title="Garden Art Gallery | Zabel Monuments"
      description="A gallery of garden art that we have made for our customers."
      urlPath="gallery/garden-art"
    />
  );
}

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Gallery from '../../components/Gallery';
import SEO from '../../components/Seo';

export default function GardenArt() {
  const data = useStaticQuery(graphql`
    query GardenArtGallery {
      allCloudinaryMedia(filter: { tags: { eq: "garden-art" } }) {
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
        title="Garden Art Gallery | Zabel Monuments"
        urlPath="gallery/garden-art"
      />
      <Gallery images={data.allCloudinaryMedia.edges} title="Garden Art" />
    </>
  );
}

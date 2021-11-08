import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Gallery from '../../components/Gallery';

export default function JewishMonuments() {
  const data = useStaticQuery(graphql`
    query JewishMonumentsQuery {
      allCloudinaryMedia(
        filter: { tags: { eq: "jewish" } }
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
      galleryImages={data.allCloudinaryMedia.edges}
      galleryName="Jewish Monuments"
      title="Jewish Monuments Gallery | Zabel Monuments"
      description="A photo gallery of Jewish monuments that we have made for our customers."
      urlPath="gallery/jewish-monuments"
    />
  );
}

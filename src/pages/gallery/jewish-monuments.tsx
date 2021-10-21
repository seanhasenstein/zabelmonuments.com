import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Gallery from '../../components/Gallery';
import SEO from '../../components/Seo';

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
    <>
      <SEO
        title="Jewish Monuments Gallery | Zabel Monuments"
        urlPath="gallery/jewish-monuments"
      />
      <Gallery
        images={data.allCloudinaryMedia.edges}
        title="Jewish Monuments"
      />
    </>
  );
}

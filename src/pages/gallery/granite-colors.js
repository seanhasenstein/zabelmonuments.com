import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Gallery from '../../components/Gallery';
import SEO from '../../components/Seo';

export default function GraniteColors() {
  const data = useStaticQuery(graphql`
    query GraniteColorsQuery {
      allCloudinaryMedia(filter: { tags: { eq: "granite-color" } }) {
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
        title="Granite Colors Gallery | Zabel Monuments"
        urlPath="gallery/granite-colors"
      />
      <Gallery images={data.allCloudinaryMedia.edges} title="Granite Colors" />
    </>
  );
}

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Gallery from '../../components/Gallery';
import SEO from '../../components/Seo';

export default function Etchings() {
  const data = useStaticQuery(graphql`
    query EtchingsQuery {
      allCloudinaryMedia(filter: { tags: { eq: "etching" } }) {
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
        title="Etchings Gallery | Zabel Monuments"
        urlPath="gallery/etchings"
      />
      <Gallery images={data.allCloudinaryMedia.edges} title="Etchings" />
    </>
  );
}

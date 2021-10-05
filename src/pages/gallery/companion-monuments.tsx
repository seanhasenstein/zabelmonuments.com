import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Gallery from '../../components/Gallery';
import SEO from '../../components/Seo';

export default function CompanionMonuments() {
  const data = useStaticQuery(graphql`
    query CompanionMonumentsQuery {
      allCloudinaryMedia(filter: { tags: { eq: "companion" } }) {
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
        title="Companion Monuments Gallery | Zabel Monuments"
        urlPath="gallery/companion-monuments"
      />
      <Gallery
        images={data.allCloudinaryMedia.edges}
        title="Companion Monuments"
      />
    </>
  );
}

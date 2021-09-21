import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Gallery from '../../components/Gallery';
import SEO from '../../components/Seo';

export default function HmongMonuments() {
  const data = useStaticQuery(graphql`
    query HmongMonumentsQuery {
      allCloudinaryMedia(filter: { tags: { eq: "hmong" } }) {
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
        title="Hmong Monuments Gallery | Zabel Monuments"
        urlPath="gallery/hmong-monuments"
      />
      <Gallery images={data.allCloudinaryMedia.edges} title="Hmong Monuments" />
    </>
  );
}

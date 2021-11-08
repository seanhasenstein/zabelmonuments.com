import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import PageShell from '../components/PageShell';

interface Edge {
  node: {
    id: string;
    secure_url: string;
    context: {
      custom: {
        caption: string;
      };
    };
  };
}

export default function GraniteColors() {
  const data = useStaticQuery(graphql`
    query GraniteColorsQuery {
      allCloudinaryMedia(filter: { tags: { eq: "granite-color" } }) {
        edges {
          node {
            id
            secure_url
            context {
              custom {
                caption
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout
      title="Granite Colors | Zabel Monuments"
      description="A list of the granite colors that we have to offer."
      urlPath="granite-colors"
    >
      <PageShell>
        <GraniteColorsStyles>
          <h2>Granite Colors</h2>
          <p>
            The following are the granite colors that we typically have to
            offer.
          </p>
          <div className="grid">
            {data.allCloudinaryMedia.edges.map((e: Edge) => (
              <div key={e.node.id} className="grid-item">
                <img
                  src={e.node.secure_url}
                  alt={e.node.context.custom.caption}
                  title={e.node.context.custom.caption}
                />
                <div className="caption">{e.node.context.custom.caption}</div>
              </div>
            ))}
          </div>
        </GraniteColorsStyles>
      </PageShell>
    </Layout>
  );
}

const GraniteColorsStyles = styled.div`
  .grid {
    margin: 2.5rem 0 0;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .grid-item {
    margin: 0 0 1rem;
    width: calc(16.6666666667% - 0.8333333333rem);
  }

  .caption {
    font-size: 0.75rem;
    line-height: 1.25;
    text-align: center;
    color: #1e293b;
  }

  @media (max-width: 900px) {
    .grid-item {
      width: calc(25% - 0.75rem);
    }
  }

  @media (max-width: 415px) {
    .grid-item {
      width: calc(33.3333% - 0.6666666667rem);
    }
  }
`;

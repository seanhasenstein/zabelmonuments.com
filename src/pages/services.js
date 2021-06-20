import React from 'react';
import Layout from '../components/Layout';
import PageShell from '../components/PageShell';

export default function Services() {
  return (
    <Layout>
      <PageShell>
        <h2>Our Services</h2>
        <p>
          Our main focus is to provide the best quality and workmanship for each
          and every one of our customers. And in addition to designing and
          installing custom cemetery memorials, we also provide various other
          services.
        </p>

        <div>
          <ul>
            <li>Designing and installing of custom cemetery memorials</li>
            <li>
              Engraving of the final date of death on-site on existing stones
            </li>
            <li>Leveling of existing memorials</li>
            <li>Cleaning of older monuments</li>
            <li>
              House address stone engravements (wholesale and retail accounts)
            </li>
            <li>Garden Art and Engraved Rocks</li>
            <li>Rusted metal sandblasting</li>
            <li>
              Selling, installing, and servicing of flagpoles (both residential
              and commercial)
            </li>
          </ul>
        </div>
      </PageShell>
    </Layout>
  );
}

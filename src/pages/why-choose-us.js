import React from 'react';
import Layout from '../components/Layout';
import PageShell from '../components/PageShell';
import SEO from '../components/Seo';

export default function WhyChooseUs() {
  return (
    <Layout>
      <SEO title="Why Choose Us? | Zabel Monuments" urlPath="why-choose-us" />
      <PageShell>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>
            We are a family business that cares about our customers and our
            reputation.
          </li>
          <li>
            We've been in business since 1970 and are in our third generation of
            ownership.
          </li>
          <li>We do all of our own work and quality is our main focus.</li>
          <li>
            We have a Certified Memorialist (CM) on staff (one of only three in
            the state of Wisconsin).
          </li>
          <li>
            We are well respected in the industry. We have had three generations
            serve as President of the{' '}
            <a href="http://wambonline.org/" className="external-link">
              Wisconsin Association of Monument Builders
            </a>
            .
          </li>
          <li>
            We are members and active participants of our national association -{' '}
            <a href="https://monumentbuilders.org/" className="external-link">
              Monument Builders of North America
            </a>
            .
          </li>
          <li>
            We are proud members of the{' '}
            <a href="https://www.monuments-aica.com/" className="external-link">
              American Institute of Commemorative Art (AICA)
            </a>
            . An Institute consisting of 55 of the top memorial designers in
            North America. Membership is by invitation only and we are the only
            member in the state of Wisconsin.
          </li>
          <li>
            We were selected to construct the Manitowoc County Veterans
            Memorial.
          </li>
          <li>
            We were selected to construct the Sheboygan County Veterans
            Memorial.
          </li>
          <li>
            We have award winning designs through the American Institute of
            Commemorative Art.
          </li>
          <li>
            We've been featured in several trade publications including Stone in
            America.
          </li>
        </ul>
      </PageShell>
    </Layout>
  );
}

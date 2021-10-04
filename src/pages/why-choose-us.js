import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from '../components/Layout';
import PageShell from '../components/PageShell';
import SEO from '../components/Seo';

export default function WhyChooseUs() {
  return (
    <Layout>
      <SEO title="Why Choose Us? | Zabel Monuments" urlPath="why-choose-us" />
      <PageShell>
        <h2>Why Choose Us?</h2>
        <p>
          At Zabel Monuments, a memorial or headstone isn’t just chosen out of a
          catalog. It's designed to tell a story and reflect the spirit of those
          being memorialized. As a society we memorialize our loved ones because
          they have lived not because they have died.
        </p>
        <p>
          A memorial is one of the most personal purchases a family can make.
          Our family also understands and respects that this is an important
          part of the grieving and healing process after a death. We are here to
          help you through this process and create lasting tributes to your
          loved ones.
        </p>
        <WhyChooseUsListStyles>
          <WhyChooseUsItem>
            We are a family business that cares about our customers and our
            reputation.
          </WhyChooseUsItem>
          <WhyChooseUsItem>
            We've been in business since 1970 and are in our third generation of
            ownership.
          </WhyChooseUsItem>
          <WhyChooseUsItem>
            We have a Certified Memorialist (CM) on staff (one of only three in
            the state of Wisconsin).
          </WhyChooseUsItem>
          <WhyChooseUsItem>
            We are well respected in the industry. We have had three generations
            serve as President of the{' '}
            <a href="http://wambonline.org/">
              Wisconsin Association of Monument Builders
            </a>
            .
          </WhyChooseUsItem>
          <WhyChooseUsItem>
            We are members and active participants of our national association -{' '}
            <a href="https://monumentbuilders.org/">
              Monument Builders of North America
            </a>
            .
          </WhyChooseUsItem>
          <WhyChooseUsItem>
            <>
              We are proud members of the
              <a href="https://www.monuments-aica.com/">
                American Institute of Commemorative Art
              </a>
              (AICA). An Institute consisting of 55 of the top memorial
              designers in North America. Membership is by invitation only and
              we are the only member in the state of Wisconsin.
            </>
          </WhyChooseUsItem>
          <WhyChooseUsItem>
            We were selected to construct the Manitowoc County Veterans
            Memorial.
          </WhyChooseUsItem>
          <WhyChooseUsItem>
            We were selected to construct the Sheboygan County Veterans
            Memorial.
          </WhyChooseUsItem>
          <WhyChooseUsItem>
            We have award winning designs through the American Institute of
            Commemorative Art.
          </WhyChooseUsItem>
          <WhyChooseUsItem>
            We've been featured in several trade publications including Stone in
            America.
          </WhyChooseUsItem>
        </WhyChooseUsListStyles>
      </PageShell>
    </Layout>
  );
}

function WhyChooseUsItem({ children }) {
  return (
    <li>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
          clipRule="evenodd"
        />
      </svg>
      <span>{children}</span>
    </li>
  );
}

const WhyChooseUsListStyles = styled.ul`
  padding: 0 !important;

  li {
    display: flex;
    list-style-type: none !important;

    svg {
      margin: 0.25rem 0.75rem 0 0;
      flex-shrink: 0;
      height: 1.125rem;
      width: 1.125rem;
      color: #6ea546;
    }

    a {
      text-decoration: underline;
    }
  }
`;

WhyChooseUsItem.propTypes = {
  children: PropTypes.node.isRequired,
};

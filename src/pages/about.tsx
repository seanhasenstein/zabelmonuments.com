import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import PageShell from '../components/PageShell';
import SEO from '../components/Seo';

export default function About() {
  return (
    <Layout>
      <SEO title="About Us | Zabel Monuments" urlPath="about" />
      <PageShell>
        <AboutPageStyles>
          <h2>About Us</h2>
          <p>
            Zabel Monuments respectfully serves the Sheboygan, Manitowoc, and
            Green Bay areas and the surrounding communities of East Central
            Wisconsin with a selection of beautifully crafted memorials.
          </p>
          <p>
            We believe that a memorial tells a story that will continue long
            after we are gone, and families entrust us to create an
            appropriately designed memorial that commemorates their loved ones.
          </p>
          <div className="item">
            <h3>What is a memorialist?</h3>
            <p>
              A memorialist is both an artist and a craftsman, we create our own
              work and quality is our primary focus. We are one of three
              businesses in Wisconsin with a Certified Memorialist (CM) on
              staff.
            </p>
          </div>
          <div className="item certification">
            <div className="logo">
              <StaticImage
                src="../assets/images/aioca.png"
                alt="American Institute of Commemorative Art"
                placeholder="none"
                width={48}
                quality={100}
              />
            </div>
            <div className="text">
              <h3>American Institute of Commemorative Art</h3>
              <p>
                We are proud members of the American Institute of Commemorative
                Art (AICA). This is an Institute consisting of 55 of the top
                memorial designers in North America. Membership is by invitation
                only, and Eric (Zabel Monuments) is the only member in
                Wisconsin.
              </p>
              <a
                href="https://www.monuments-aica.com/"
                className="external-link-button"
              >
                Visit their website
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="item certification">
            <div className="logo">
              <StaticImage
                src="../assets/images/waomb.png"
                alt="Wisconsin Association of Monument Builders"
                placeholder="none"
                width={48}
                quality={100}
              />
            </div>
            <div className="text">
              <h3>Wisconsin Association of Monument Builders</h3>
              <p>
                We are well respected in the industry. We have had three
                generations serve as the President of the Wisconsin Association
                of Monument Builders.
              </p>
              <a href="http://wambonline.org/" className="external-link-button">
                Visit their website
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="item certification">
            <div className="logo">
              <StaticImage
                src="../assets/images/mb.png"
                alt="Monument Builders of North America"
                placeholder="none"
                width={48}
                quality={100}
              />
            </div>
            <div className="text">
              <h3>Monument Builders of North America</h3>
              <p>
                We are members and active participants of our national
                association - Monument Builders of North America.
              </p>
              <a
                href="https://monumentbuilders.org/"
                className="external-link-button"
              >
                Visit their website
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </AboutPageStyles>
      </PageShell>
    </Layout>
  );
}

const AboutPageStyles = styled.div`
  h3 {
    margin: 0 0 1rem;
  }

  .item {
    padding: 2.25rem 0;
    border-top: 1px solid #e2e8f0;

    p {
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  .certification {
    display: flex;
    gap: 2rem;
  }

  .logo {
    flex-shrink: 0;
    width: 3rem;
  }

  .external-link-button {
    margin: 1rem 0 0;
    padding: 0.625rem 1rem;
    display: inline-flex;
    align-items: flex-end;
    font-size: 0.75rem;
    font-weight: 400;
    color: #64748b;
    line-height: 1;
    background-color: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 0.25rem;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

    svg {
      margin: 0 0 0 0.25rem;
      height: 0.75rem;
      width: 0.75rem;
      color: #cbd5e1;
    }

    &:hover {
      border-color: #d5dee9;
      color: #546174;
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 2px 2px 0px;
    }
  }
`;

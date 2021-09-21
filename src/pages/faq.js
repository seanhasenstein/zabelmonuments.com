import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from '../components/Layout';
import PageShell from '../components/PageShell';
import SEO from '../components/Seo';
import { faqData } from '../data';

export default function Faq() {
  const [activeItem, setActiveItem] = React.useState(undefined);

  const handleClick = item => {
    setActiveItem(item);

    if (item === activeItem) {
      setActiveItem(undefined);
    }
  };

  return (
    <Layout>
      <SEO title="FAQ | Zabel Monuments" urlPath="faq" />
      <PageShell>
        <FaqStyles>
          <h2>Frequently Asked Questions</h2>
          <dl>
            {faqData.map(f => (
              <div key={f.id} className="item">
                <dt>
                  <button
                    aria-expanded={activeItem === f.id}
                    aria-controls={`accordion-panel-${f.id}`}
                    id={`accordion-panel-${f.id}`}
                    onClick={() => handleClick(f.id)}
                  >
                    <span className="question">{f.q}</span>
                    <span className="icon">
                      <svg
                        className={`${activeItem === f.id ? 'rotate' : ''}`}
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  className={activeItem === f.id ? 'active' : null}
                  id={`accordion-panel-${f.id}`}
                  aria-labelledby={`accordion-item-${f.id}`}
                  role="region"
                  hidden={activeItem !== f.id}
                >
                  <p>
                    {f.isLink ? (
                      <a href={f.url} target="_blank" rel="noreferrer">
                        See this link
                        <svg
                          className="external-link-icon"
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
                    ) : (
                      f.a
                    )}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </FaqStyles>
      </PageShell>
    </Layout>
  );
}

Faq.propTypes = {
  location: PropTypes.object,
};

const FaqStyles = styled.div`
  padding: 0 1.5rem;

  .item {
    margin: 1.25rem 0 0;
    padding: 1.5rem 0 0;
    border-top: 1px solid #dfe1e6;

    &:first-of-type {
      margin: 0;
      padding: 0;
      border: none;
    }
  }

  dt {
    button {
      padding: 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      color: #8d95a3;
      text-align: left;
      font-family: 'Merriweather';
      font-size: 1rem;
      line-height: 1.75rem;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }

  dd {
    margin: 0.5rem 0 0;
    padding: 0 3rem 0 0;
  }

  .question {
    font-family: 'Poppins', sans-serif;
    font-size: 0.9375rem;
    font-weight: 500;
    color: #475569;
  }

  .icon {
    margin: 0 0 0 1.25rem;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;

    svg {
      padding: 0.25rem;
      height: 2rem;
      width: 2rem;
      display: flex;
      align-items: center;
      border: 2px solid transparent;
      border-radius: 9999px;

      &.rotate {
        transform: rotate(180deg);
      }
    }
  }

  h2 {
    margin: 0 0 1.5rem;
    padding: 0 0 1.875rem;
  }

  p {
    margin: 0 0 2rem;
    font-size: 0.9375rem;
  }

  a {
    display: flex;
    align-items: center;
    color: #0369a1;
    text-decoration: underline;
  }

  .external-link-icon {
    margin: 0 0 0 0.3125rem;
    height: 0.8125rem;
    width: 0.8125rem;
    color: #94a3b8;
  }

  @media (min-width: 768px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

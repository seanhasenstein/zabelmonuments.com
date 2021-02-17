import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import { faqData } from '../data';
import { FaqStyles } from '../styles/FaqStyles';

export default function Faq() {
  const [activeItem, setActiveItem] = useState(undefined);

  const handleClick = item => {
    setActiveItem(item);

    if (item === activeItem) {
      setActiveItem(undefined);
    }
  };

  return (
    <Layout>
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
                      className={`${activeItem === 1 ? 'rotate' : ''}`}
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
    </Layout>
  );
}

Faq.propTypes = {
  location: PropTypes.object,
};

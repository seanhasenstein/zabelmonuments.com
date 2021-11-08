import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import PageShell from '../components/PageShell';

const frequentlyAskedQuestions = [
  {
    id: 1,
    q: 'Can we purchase a memorial while we are living? Does it go into the cemetery?',
    a: 'It is always a good idea to pre-plan your memorial. By doing so, all of your thoughts and wishes can be conveyed. It also takes the burden off of your survivors wondering what you would have wanted. The consultation is often more light hearted also. Upon the purchase, the memorial is engraved and placed into the cemetery or location of your choosing. When a death occurs, we go out to the memorial and engrave the date on site.',
    isLink: false,
  },
  {
    id: 2,
    q: 'When should I purchase a memorial after a death has occurred?',
    a: 'Only you will know when it is time to stop in and talk to us. Some families choose to come in just a short time after while others take a year or two to finally feel they are emotionally ready to discuss this purchase.',
    isLink: false,
  },
  {
    id: 3,
    q: 'Does my cemetery have specific restrictions regarding the memorial?',
    a: 'About half of the cemeteries that we service have restrictions regarding the size of memorial that is installed. It is best to discuss this with the cemetery manager before you buy the property. We hear quite often, “I didn’t know I could not have a bigger stone. Why didn’t someone tell me about that?” Even though we might have restrictions to work within, rest assured we can still design a special individualized memorial.',
    isLink: false,
  },
  {
    id: 4,
    q: 'Do I need a marker if the deceased is not going to a cemetery?',
    a: 'Yes, survivors still should have somewhere tangible to go and reflect. There are many creative options available. Consider placing a memorial bench in your backyard, a city park or the favorite golf course. Another option is planting a tree in memory of the person and placing a memorial rock by the bottom of the tree.',
    isLink: false,
  },
  {
    id: 5,
    q: 'How are monuments made?',
    a: 'See this article from monumentbuilders.org',
    isLink: true,
    url: 'http://www.monumentbuilders.org/consumers_how_monuments_are_made.php',
  },
  {
    id: 6,
    q: 'How long will it take to complete my memorial?',
    a: 'This depends on a lot of things. If you select a piece that we have in stock, the normal delivery time is about 3 weeks. If we have to special order the granite, it could take 2-3 months for us to receive it from the quarry. We then have to do the engraving and schedule the delivery.',
    isLink: false,
  },
  {
    id: 7,
    q: 'If I order a monument I found on-line, will you set it for us?',
    a: 'No and there are two key reasons why. First, in order for us to take on the risk we would have to charge a fee for this and once you add that to the price you purchased on-line our retail price is almost always lower. Second, our insurance will not cover a monument that was not purchased from us so if it would come in damaged or is damaged during transit you are taking on all the risk.',
    isLink: false,
  },
];

export default function Faq() {
  const [activeItem, setActiveItem] = React.useState<number | undefined>(
    undefined
  );

  const handleClick = (index: number) => {
    setActiveItem(index);

    if (index === activeItem) {
      setActiveItem(undefined);
    }
  };

  return (
    <Layout
      title="FAQ | Zabel Monuments"
      description="Do you have a question? See our FAQ's page or send us a message. We are here to help you with anything that you may need."
      urlPath="faq"
    >
      <PageShell>
        <FaqStyles>
          <h2>Frequently Asked Questions</h2>
          <dl>
            {frequentlyAskedQuestions.map(f => (
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
                  className={activeItem === f.id ? 'active' : ''}
                  id={`accordion-panel-${f.id}`}
                  aria-labelledby={`accordion-item-${f.id}`}
                  role="region"
                  hidden={activeItem !== f.id}
                >
                  <p>
                    {f.isLink ? (
                      <a href={f.url} target="_blank" rel="noreferrer">
                        {f.a}
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

      &:focus {
        outline: 2px solid transparent;
        outline-offset: 2px;
      }

      &:focus-visible {
        .icon {
          border-color: #4e46a5;
          color: #4e46a5;
        }
      }
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
    padding: 0.125rem;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    border: 2px solid transparent;
    border-radius: 9999px;

    svg {
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
    font-size: 0.9375rem;
  }

  a {
    display: flex;
    align-items: center;
    color: #4f46e5;

    &:hover {
      text-decoration: underline;
    }
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

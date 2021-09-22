import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { removeNonDigits, slugify } from '../utils';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import LinkButton from '../components/common/LinkButton';
import Testimonials from '../components/Testimonials';
import heroImage from '../images/hero.jpg';
import greenbay from '../images/greenbay.jpg';
import manitowoc from '../images/manitowoc.jpg';
import sheboygan from '../images/sheboygan.jpg';
import featured from '../images/featured.jpg';

const stores = [
  {
    id: 1,
    name: 'Sheboygan',
    image: sheboygan,
    address: {
      street: '1432 N 13th Street',
      city: 'Sheboygan',
      state: 'WI',
      zipcode: '53081',
    },
    addressUrl: 'https://goo.gl/maps/BeAmegDE9v9FEk7A9',
    phone: '(920) 452-2271',
    hours: 'Mon-Fri 9:00am-4:30pm',
  },
  {
    id: 2,
    name: 'Manitowoc',
    image: manitowoc,
    address: {
      street: '1232 N 8th Street',
      city: 'Manitowoc',
      state: 'WI',
      zipcode: '54220',
    },
    addressUrl: 'https://goo.gl/maps/anYiPUzFSf1rEFku5',
    phone: '(920) 684-3829',
    hours: 'Mon-Fri 8:00am-4:30pm',
  },
  {
    id: 3,
    name: 'Green Bay',
    image: greenbay,
    address: {
      street: '910 Lime Kiln Road',
      city: 'Green Bay',
      state: 'WI',
      zipcode: '54302',
    },
    addressUrl: 'https://goo.gl/maps/CSX8jPqZfH4CY2xU9',
    phone: '(920) 432-7995',
    hours: 'Mon-Fri 9:00am-4:30pm',
  },
];

export default function Index() {
  return (
    <Layout>
      <HomeStyles>
        <SEO />
        <div className="hero">
          <div className="row">
            <div className="welcome-text">
              <h3>Welcome to Zabel Monuments</h3>
              <p>
                We're here to help tell a story that will reflect the spirit of
                your loved ones. Bringing comfort and personalized memorials to
                generations of caring families in East Central Wisconsin since
                1970.
              </p>
              <div className="links">
                <LinkButton slug="/contact?store=manitowoc">
                  Schedule an appointment
                </LinkButton>
                <Link to="/faq" className="secondary-link">
                  Frequently asked questions
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="store-locations">
          <div className="row">
            {stores.map(store => (
              <div key={store.id} className="location">
                <div className="img">
                  <img src={store.image} alt={`${store.name} store building`} />
                </div>
                <div className="details">
                  <div className="hours">
                    <div className="title">{store.name} Store</div>
                    <div className="data">
                      Open {store.hours}
                      <span>(or by appointment)</span>
                    </div>
                  </div>
                  <div className="address">
                    <div className="icon">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="data">
                      <a href={store.addressUrl}>
                        {store.address.street}
                        <br />
                        {store.address.city}, {store.address.state}{' '}
                        {store.address.zipcode}
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
                    <span className="left-border" />
                  </div>
                  <div className="phone">
                    <div className="icon">
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
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="data">
                      <a href={`tel:+1${removeNonDigits(store.phone)}`}>
                        {store.phone}
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
                  <Link
                    to={`/contact?store=${slugify(store.address.city)}`}
                    state={{ store: slugify(store.address.city) }}
                    className="contact-link"
                  >
                    Contact us
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="every-life-section">
          <div className="inner">
            <div className="row">
              <div className="featured-image">
                <img
                  src={featured}
                  alt="Headstone with pink flowers laying on top."
                />
              </div>
              <div className="written-copy">
                <h3>Every Life is Worth Remembering</h3>
                <p>
                  At Zabel Monuments, a memorial or headstone isn’t just chosen
                  out of a catalog. It's designed to tell a story and reflect
                  the spirit of those being memorialized. As a society we
                  memorialize our loved ones because they have lived not because
                  they have died.
                </p>
                <p>
                  A memorial is one of the most personal purchases a family can
                  make. Our family also understands and respects that this is an
                  important part of the grieving and healing process after a
                  death. We are here to help you through this process and create
                  lasting tributes to your loved ones.
                </p>
                <div className="links">
                  <LinkButton slug="/why-choose-us">
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
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                    Why choose us?
                  </LinkButton>
                  <LinkButton slug="/services">
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
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Our services
                  </LinkButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Testimonials />
      </HomeStyles>
    </Layout>
  );
}

const HomeStyles = styled.div`
  .hero {
    padding: 0 1.5rem;
    background-color: #2a2721;
    background-image: url(${heroImage});
    background-size: cover;

    h3 {
      margin: 0 0 1.5rem;
      font-size: 1.625rem;
      color: #fff;
      letter-spacing: 0.025em;
    }

    p {
      color: rgba(255, 255, 255, 0.6);
    }

    .row {
      margin: 0 auto;
      padding: 4rem 0 12rem;
      max-width: 1000px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      border-top: 1px solid rgba(255, 255, 255, 0.15);
    }

    .welcome-text {
      margin: 0;
      max-width: 40rem;
      width: 100%;
    }

    .links {
      margin: 2rem 0 0;

      a:first-of-type {
        margin: 0 1.5rem 0 0;
      }
    }

    .secondary-link {
      padding: 0.6875rem 1.5rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-family: 'Poppins', sans-serif;
      font-size: 0.875rem;
      font-weight: 500;
      letter-spacing: 0.025rem;
      color: rgba(255, 255, 255, 0.9);
      background-color: rgba(255, 255, 255, 0);
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 0.3125rem;

      &:hover {
        color: rgba(255, 255, 255, 1);
        background-color: rgba(255, 255, 255, 0.05);
        border-color: rgba(255, 255, 255, 0.75);
      }
    }
  }

  .store-locations {
    width: 100%;
    background-color: #f8fafc;

    .row {
      margin: 0 auto;
      padding: 0 0 6rem;
      display: flex;
      gap: 2rem;
      max-width: 1000px;
      width: 100%;
    }

    .location {
      margin: -5rem 0 0;
      position: relative;
      display: flex;
      flex-direction: column;
      background-color: #fff;
      border-radius: 0.25rem;
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.06) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

      .img {
        width: 100%;
        position: relative;
        display: flex;
        border-width: 5px 5px 0 5px;
        border-style: solid;
        border-color: #fff;
        border-radius: 0.5rem 0.5rem 0 0;

        img {
          width: 100%;
        }

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          box-shadow: inset 0 30px 40px rgba(0, 0, 0, 0.7);
        }
      }
    }

    .details {
      margin: 0 auto;
      padding: 1.25rem 1.5rem;
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    .address,
    .phone {
      padding: 0.25rem 0 0.875rem;
      display: flex;
      gap: 1.125rem;

      .icon {
        height: 2rem;
        width: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f8fafc;
        border: 2px solid #f1f5f9;
        border-radius: 9999px;

        svg {
          width: 1.125rem;
          height: 1.125rem;
          color: #64748b;
        }
      }

      .data {
        font-size: 0.875rem;
        color: #0f172a;

        a {
          color: #0f172a;

          &:hover {
            text-decoration: underline;
          }
        }

        svg {
          margin-bottom: -0.125rem;
          margin-left: 0.3125rem;
          height: 0.875rem;
          width: 0.875rem;
          color: #cbd5e1;
        }
      }
    }

    .address {
      position: relative;

      .data {
        margin-top: 3px;
        line-height: 1.4;
      }

      .left-border {
        position: absolute;
        top: 2.5625rem;
        left: 0.9375rem;
        height: 1.125rem;
        width: 1px;
        background-color: #cbd5e1;
      }
    }

    .phone {
      align-items: center;
    }

    .hours {
      margin: 0 0 0.75rem;
      padding: 0.125rem 0 1.125rem;
      text-align: center;
      border-bottom: 1px solid #f1f5f9;

      .title {
        margin: 0 0 0.5625rem;
        font-size: 0.8125rem;
        font-weight: 600;
        color: #0369a1;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        text-align: center;
      }

      .data {
        font-size: 0.875rem;
        color: #0f172a;

        span {
          margin-top: 0.125rem;
          display: block;
          font-size: 0.75rem;
        }
      }
    }

    .contact-link {
      margin: 0.5rem 0 0;
      padding: 0.4375rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Poppins', sans-serif;
      font-size: 0.8125rem;
      font-weight: 500;
      color: #334155;
      background-color: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 0.1875rem;
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

      &:hover {
        border-color: #cbd5e1;

        svg {
          transform: translateX(2px);
        }
      }

      svg {
        margin-left: 0.375rem;
        height: 0.875rem;
        width: 0.875rem;
        color: #94a3b8;
      }
    }
  }

  .every-life-section {
    padding: 4rem 0;
    width: 100%;
    background-color: #f8fafc;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='13' height='13' fill-opacity='0.2' fill='%23BBBBBB'/%3E%3C/svg%3E");

    .inner {
      margin: 0;
      max-width: 80rem;
      width: 100%;
    }

    .row {
      position: relative;
      display: flex;
      justify-content: flex-end;
    }

    .featured-image {
      width: 55%;
      z-index: 10;

      img {
        width: 100%;
      }
    }

    .written-copy {
      margin: 4rem 0 0 -8rem;
      padding: 3.5rem 5rem;
      width: 60%;
      background-color: #fff;
      border: 1px solid #f1f5f9;
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
        rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
      z-index: 100;
    }

    h3 {
      margin: 0 0 1.875rem;
      font-size: 1.5rem;
      font-style: italic;
      color: #323842;
    }

    p {
      margin: 0 0 1.875rem;

      &:last-of-type {
        margin-bottom: 0;
      }
    }

    .links {
      margin: 1.5rem 0 0;
      display: flex;
      gap: 1rem;
    }
  }
`;

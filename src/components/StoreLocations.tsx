import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { removeNonDigits, slugify } from '../utils';
import greenbay from '../assets/images/greenbay.jpg';
import manitowoc from '../assets/images/manitowoc.jpg';
import sheboygan from '../assets/images/sheboygan.jpg';

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

export default function StoreLocations() {
  return (
    <StoreLocationStyles>
      <div className="row">
        {stores.map(store => (
          <div key={store.id} className="location">
            <div className="img">
              <img src={store.image} alt={`${store.name} store building`} />
            </div>
            <div className="details">
              <div className="hours">
                <div className="title">{store.name} Store</div>
                <div className="data">Open {store.hours}</div>
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
              <div className="actions">
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
          </div>
        ))}
      </div>
    </StoreLocationStyles>
  );
}

const StoreLocationStyles = styled.div`
  padding: 0 1.5rem;
  width: 100%;
  background-color: #f8fafc;

  .row {
    margin: 0 auto;
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
    border-radius: 0.125rem;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.06) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

    .img {
      width: 100%;
      position: relative;
      display: flex;
      border-width: 5px 5px 0 5px;
      border-style: solid;
      background-color: #fff;
      border-color: #fff;
      border-radius: 0.125rem 0.125rem 0 0;

      img {
        width: 100%;
        background-color: #fff;
        border-radius: 0.125rem 0.125rem 0 0;
      }

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 0.125rem 0.125rem 0 0;
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

        &:focus {
          outline: 2px solid transparent;
          outline-offset: 2px;
        }

        &:focus-visible {
          color: #1967d2;
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
    }
  }

  .actions {
    padding: 0.25rem;
    display: flex;
    background-color: #f1f5f9;
    border-radius: 0.5rem;
  }

  .contact-link {
    padding: 0.4375rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    font-size: 0.8125rem;
    font-weight: 500;
    color: #0369a1;
    background-color: #fff;
    border-radius: 0.25rem;
    border: 1px solid transparent;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

    svg {
      margin-left: 0.375rem;
      height: 0.875rem;
      width: 0.875rem;
      color: #cbd5e1;
    }

    &:hover {
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.15) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
      border-color: #f8fafc;

      svg {
        transform: translateX(2px);
      }
    }

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }

    &:focus-visible {
      border: 1px solid #f1f5f9;
      box-shadow: #fff 0px 0px 0px 2px, #1967d2 0px 0px 0px 4px,
        rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }
  }

  @media (max-width: 991px) {
    .row {
      flex-direction: column-reverse;
      gap: 2.5rem;
    }

    .location {
      margin: 0 auto;
      max-width: 25rem;
      width: 100%;

      &:last-of-type {
        margin-top: -5rem;
      }
    }
  }
`;

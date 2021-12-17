import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import FeaturedImage from '../assets/images/featured.jpg';

export default function Featured() {
  return (
    <FeaturedStyles>
      <div className="grid">
        <div className="grid-image">
          <img src={FeaturedImage} alt="Pink flowers on top of a gravestone" />
        </div>
        <div className="grid-content">
          <div className="content-container">
            <h3>Every Life is Worth Remembering</h3>
            <p>
              A memorial is one of the most personal purchases a family can
              make. Our family also understands and respects that this is an
              important part of the grieving and healing process after a death.
              We are here to help you through this process and create lasting
              tributes to your loved ones.
            </p>
            <div className="links">
              <Link to="/services" className="primary-link">
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
              </Link>
              <Link to="/gallery/individual-monuments" className="primary-link">
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
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
                Product Galleries
              </Link>
            </div>
          </div>
        </div>
      </div>
    </FeaturedStyles>
  );
}

const FeaturedStyles = styled.div`
  padding: 8rem 0 6rem;

  h3 {
    font-size: 1.5rem;
  }

  .grid {
    margin: 0 auto;
    position: relative;
    max-width: 92rem;
    width: 100%;
    display: flex;
    align-items: center;
  }

  .grid-image {
    width: 54%;
    height: 580px;
    flex-shrink: 0;
    z-index: 300;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
        rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    }
  }

  .grid-content {
    position: relative;
    padding: 4rem 6.5rem 6rem;
    width: 46%;
    flex-shrink: 0;
    background-color: #fff;
    border: 1px solid #f1f5f9;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  }

  .content-container {
    position: relative;
    z-index: 200;
  }

  .links {
    margin: 1.5rem 0 0;
    display: flex;
    gap: 1rem;
  }

  .primary-link {
    padding: 0.6875rem 1.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.025rem;
    color: rgba(255, 255, 255, 0.9);
    border-radius: 0.3125rem;

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
      box-shadow: #fff 0px 0px 0px 2px, #0369a1 0px 0px 0px 4px,
        rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }
  }

  .primary-link {
    background-color: #6ea546;
    border: 1px solid #569740;
    box-shadow: inset 0 1px 1px #89c475;
    transition: background-color 150ms ease-in-out;

    &:hover {
      background-color: #77b34c;
    }

    svg {
      margin: 0 0.5rem 0 0;
      color: #a1ca83;
      height: 1rem;
      width: 1rem;
    }
  }

  .secondary-link {
    background-color: transparent;
    border: 1px solid #6ea546;
    color: #77b34c;

    &:hover {
      color: rgba(255, 255, 255, 1);
      background-color: rgba(255, 255, 255, 0.05);
      border-color: rgba(255, 255, 255, 0.75);
    }
  }

  @media (max-width: 1280px) {
    .grid-image {
      width: 44%;
      flex-shrink: initial;
    }

    .grid-content {
      padding: 4rem 5rem 6rem;
      width: 56%;
    }
  }

  @media (max-width: 991px) {
    padding: 4rem 3rem;

    .grid {
      flex-direction: column;
    }

    .grid-image {
      height: unset;
      width: 85%;

      img {
        width: 100%;
        height: unset;
        object-fit: unset;
      }
    }

    .grid-content {
      padding: 2.5rem 5rem 4.5rem;
      margin-top: -10rem;
      width: 100%;
      z-index: 300;
    }

    .content-container {
      text-align: center;
    }

    .links {
      justify-content: center;
    }
  }

  @media (max-width: 650px) {
    .links {
      flex-direction: column;
    }
  }

  @media (max-width: 500px) {
    padding-right: 1.5rem;
    padding-left: 1.5rem;

    .grid-content {
      padding: 1rem 1.5rem 3rem;
      margin-top: -4rem;
    }
  }
`;

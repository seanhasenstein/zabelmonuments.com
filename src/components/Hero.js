import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from '../images/hero.jpg';

export default function Hero() {
  return (
    <HeroStyles>
      <div className="row">
        <div className="welcome-text">
          <h3>Welcome to Zabel Monuments</h3>
          <p>
            Bringing comfort and personalized memorials to generations of
            families in East Central Wisconsin since 1970. We're here to help
            tell a story that will reflect the spirit of your loved ones.
          </p>
          <div className="links">
            <Link to="/contact?store=manitowoc" className="primary-link">
              Schedule an appointment
            </Link>
            <Link to="/faq" className="secondary-link">
              Frequently asked questions
            </Link>
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}

const HeroStyles = styled.div`
  padding: 0 1.5rem;
  background-color: #2a2721;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: right;

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

  .primary-link,
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
    border-radius: 0.3125rem;

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
      box-shadow: #2a2721 0px 0px 0px 2px, #4f46e5 0px 0px 0px 4px,
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
  }

  .secondary-link {
    background-color: rgba(255, 255, 255, 0);
    border: 1px solid rgba(255, 255, 255, 0.5);

    &:hover {
      color: rgba(255, 255, 255, 1);
      background-color: rgba(255, 255, 255, 0.05);
      border-color: rgba(255, 255, 255, 0.75);
    }
  }

  @media (max-width: 991px) {
    .row {
      justify-content: center;
      text-align: center;
    }
  }

  @media (max-width: 600px) {
    .links {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      a:first-of-type {
        margin: 0;
      }
    }
  }
`;

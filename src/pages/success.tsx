import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
//@ts-ignore
import logo from '../assets/images/logo-small.png';

export default function Success() {
  return (
    <Layout>
      <SuccessMessageStyles>
        <div className="content">
          <img src={logo} alt="ZM basic logo with headstone border" />
          <h4>Thank you for contacting Zabel Monuments</h4>
          <p>
            We received your message and will be with you as soon as we can.
          </p>
          <Link to="/contact" className="link-button">
            Send another message
          </Link>
        </div>
        <div aria-hidden="true" className="background">
          <svg
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 1463 360"
          >
            <path
              className="path1"
              fill="currentColor"
              d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
            ></path>
            <path
              className="path2"
              fill="currentColor"
              d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
            ></path>
          </svg>
        </div>
      </SuccessMessageStyles>
    </Layout>
  );
}

const SuccessMessageStyles = styled.div`
  margin: 6rem auto 8rem;
  padding: 3rem 2rem 4rem;
  position: relative;
  max-width: 1000px;
  width: 100%;
  text-align: center;
  background-color: #fff;
  border: 1px solid #f1f5f9;
  border-radius: 0.125rem;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.075) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

  .content {
    position: relative;
    z-index: 200;
  }

  .background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;

    svg {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;

      .path1 {
        opacity: 0.04;
        color: #94a3b8;
      }

      .path2 {
        opacity: 0.04;
        color: #475569;
      }
    }
  }

  img {
    margin: 0 0 1rem;
    width: 2.5rem;
  }

  h4 {
    margin: 0 0 1rem;
    font-size: 1.25rem;
  }

  p {
    margin: 0 auto 1.5rem;
    max-width: 24rem;
    width: 100%;
  }

  .link-button {
    padding: 0.6875rem 1.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #6ea546;
    font-family: 'Poppins', sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.025rem;
    color: rgba(255, 255, 255, 1);
    border: 1px solid #569740;
    border-radius: 0.3125rem;
    box-shadow: inset 0 1px 1px #89c475;
    transition: background-color 150ms ease-in-out;

    &:hover {
      background-color: #77b34c;
    }

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
      box-shadow: #fff 0px 0px 0px 2px, #6ea546 0px 0px 0px 4px,
        rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }
  }

  @media (max-width: 1048px) {
    margin: 4rem 1.5rem;
    width: calc(100% - 3rem);
  }

  @media (max-width: 767px) {
    margin: 1.5rem;
  }

  @media (max-width: 350px) {
    padding: 2.5rem 1rem 3rem;
  }
`;

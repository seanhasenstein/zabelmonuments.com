import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import LinkButton from '../components/common/LinkButton';
import logo from '../images/logo-small.png';

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
          <LinkButton slug="/contact">Send another message</LinkButton>
        </div>
        <div
          aria-hidden="true"
          className="background absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
        >
          <svg
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 1463 360"
          >
            <path
              className="path1 text-rose-400 text-opacity-40"
              fill="currentColor"
              d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
            ></path>
            <path
              className="path2 text-rose-600 text-opacity-40"
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
`;

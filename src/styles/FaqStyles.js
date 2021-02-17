import styled from 'styled-components';

export const FaqStyles = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 5rem 1.5rem;

  .item {
    margin: 1.5rem 0 0;
    padding: 1.75rem 0 0;
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
        outline: none;
        color: #0284c7;

        svg {
          border-color: #0284c7;
        }
      }
    }
  }

  dd {
    margin: 0.75rem 0 0;
    padding: 0 3rem 0 0;
  }

  .question {
    font-weight: 500;
    color: #111623;
  }

  .icon {
    margin: 0 0 0 1.5rem;
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

  /* TYPOGRAPHY */
  h2 {
    margin: 0 0 4rem;
    text-align: center;
  }

  h4 {
    display: inline-flex;
    margin: 1.75rem 0 1.25rem;
    padding: 0.25rem 1rem;
    font-size: 1.4rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    letter-spacing: 0.35px;
    text-transform: uppercase;
    color: #5850ec;
    background-color: #e0e7ff;
    border-radius: 9999px;
  }

  ul {
    margin: 1.5rem 0;
    padding: 0 0 0 1.25rem;
  }

  li {
    margin: 8px 0;
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    color: #585e6d;
    list-style-type: disc;
  }

  p {
    margin: 0 0 1.75rem;
    line-height: 1.75;
  }

  a {
    color: #0284c7;
    display: flex;
    align-items: center;

    &:hover {
      text-decoration: underline;
    }
  }

  .external-link-icon {
    margin: 0 0 0 0.3125rem;
    height: 0.8125rem;
    width: 0.8125rem;
    color: rgba(2, 132, 199, 0.7);
  }

  @media (min-width: 768px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

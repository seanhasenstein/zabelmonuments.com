import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 0 1.5rem;
  width: 100%;

  h4 {
    margin: 0 0 0.875rem;
    font-family: 'Poppins', sans-serif;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.0625em;
    color: #4b5563;
  }

  .inner {
    margin: 0 auto;
    padding: 2.75rem 0 0;
    max-width: 1000px;
    width: 100%;
    border-top: 1px solid #e5e7eb;
  }

  .brand {
    img {
      width: 36px;
    }

    h3 {
      margin: 1.75rem 0 0;
      font-size: 1.125rem;
      font-style: italic;
    }
  }

  .nav {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    a {
      font-family: 'Poppins', sans-serif;
      font-size: 0.9375rem;
      color: #6b7280;
      transition: color 200ms ease-in-out;

      &:hover {
        color: #1f2937;
      }
    }
  }

  ul {
    margin: 1rem 0;
    padding: 0;
    list-style-type: none;
  }

  li {
    margin: 0.25rem 0;
  }

  .certifications {
    margin: 2rem 0 2.5rem;

    img {
      margin: 0 0.875rem 0 0;
      width: 40px;
      transition: transform 200ms ease-in-out;
    }

    a:hover img {
      transform: scale(1.05);
    }
  }

  .copyright {
    margin: 1.75rem 0 0;
    padding: 1.5rem 0;
    border-top: 1px solid #e5e7eb;
    font-family: 'Poppins', sans-serif;
    font-size: 0.875rem;
    color: #6b7280;
  }

  @media (max-width: 900px) {
    .section {
      width: 50%;
    }

    .section:nth-of-type(3),
    .section:nth-of-type(4) {
      margin: 2rem 0 0;
    }
  }

  @media (max-width: 600px) {
    .nav {
      flex-direction: column;
    }

    .section {
      margin: 2rem 0 0;

      &:first-of-type {
        margin: 0;
      }
    }
  }
`;

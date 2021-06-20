import styled from 'styled-components';

export const HeaderContainer = styled.header`
  margin: 0;
`;

export const SecondaryNav = styled.div`
  padding: 0.5rem 1rem;
  width: 100%;
  background-color: #1a1915;
  display: flex;
  justify-content: flex-end;

  a {
    margin: 0 0 0 2.25rem;
    font-family: 'Poppins', sans-serif;
    font-size: 0.75rem;
    letter-spacing: 0.025em;
    color: rgba(255, 255, 255, 0.9);

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Main = styled.div`
  padding: 0.75rem 0;
  width: 100%;
  background-color: #2a2721;

  .inner {
    margin: 0 auto;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Brand = styled.div`
  width: 200px;

  img {
    width: 100%;
  }
`;

export const PrimaryNav = styled.nav`
  a {
    margin: 0 1.5rem;
    padding: 0 0.25rem;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    letter-spacing: 0.025em;
    color: rgba(255, 255, 255, 0.85);
    transition: color 150ms ease-in-out;

    &:hover {
      color: rgba(255, 255, 255, 1);
    }

    &:first-of-type {
      margin-left: 0;
      padding-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
      padding-right: 0;
    }
  }
`;

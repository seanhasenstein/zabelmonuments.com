import styled from 'styled-components';

export const StoreLocationDetails = styled.div`
  padding: 0 0 6rem;
  width: 100%;

  .inner {
    margin: -11rem auto 0;
    padding: 4rem 6.25rem;
    max-width: 1000px;
    background: #fff;
    border-radius: 0.25rem;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  }

  h3 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: 'Libre Baskerville', serif;
  }

  .tab-nav {
    margin: 2.5rem 0 0;
    max-width: 600px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #b47d27;
    border-bottom: 1px solid #b47d27;
  }

  .tab-btn {
    padding: 0.5rem 0;
    width: 33.33%;
    background-color: transparent;
    border: none;
    box-shadow: none;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #b47d27;
    letter-spacing: 0.05em;

    &.active {
      background-color: #b47d27;
      color: #fff;
    }
  }

  .store-name {
    margin: 0 0 1rem;
  }

  .tab {
    display: none;

    &.active {
      display: block;
    }

    ul {
      padding: 0;
      max-width: 600px;
      width: 100%;
      list-style-type: none;
    }

    li {
      padding: 0.875rem 0;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;

      :last-of-type,
      &:nth-last-child(2) {
        border-bottom: none;
      }

      div:first-of-type {
        width: 40%;
      }

      div:last-of-type {
        width: 60%;
      }
    }
  }
`;

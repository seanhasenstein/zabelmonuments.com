import styled from 'styled-components';

export const StoreTabsDiv = styled.div`
  width: 100%;

  .inner {
    border-radius: 0.25rem;
    background-color: #2a2720;
  }

  .nav {
    margin: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #090807;

    button {
      margin: 0;
      padding: 0.625rem 0;
      width: 100%;
      border-radius: 0;
      border: none;
      font-family: 'Poppins', serif;
      font-size: 0.8125rem;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.75);
      color: #e4e1db;
      background-color: #4b4639;
      cursor: pointer;

      &:hover {
        background-color: #403c31;
        color: #f5f4f1;
      }

      &:nth-of-type(1) {
        border-radius: 0.25rem 0 0 0;
      }

      &:nth-of-type(3) {
        border-radius: 0 0.25rem 0 0;
      }

      &:nth-of-type(even) {
        border-left: 1px solid #353128;
        border-right: 1px solid #353128;
      }

      &.active {
        margin-top: -6px;
        color: rgba(255, 255, 255, 1);
        background-color: #2a2720;
        border-radius: 0.25rem 0.25rem 0 0;
      }
    }
  }

  .store {
    padding: 2.25rem 2.5rem 3rem;
  }

  .item {
    margin: 1.25rem 0;
    position: relative;
    display: flex;
    font-family: 'Poppins', sans-serif;
    font-size: 0.875rem;
    line-height: 1.5;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  .content {
    margin: 0.375rem 0 0 0;
  }

  .extra {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.7);
  }

  .item,
  .content a {
    color: rgba(255, 255, 255, 1);
  }

  .content a:hover {
    text-decoration: underline;
  }

  .left-border {
    margin-left: -5px;
    position: absolute;
    top: 2rem;
    left: 1.1875rem;
    height: 100%;
    width: 0.125rem;
    background-color: #575042;
  }

  .icon {
    margin: 0 1.25rem 0 0;

    .inner {
      height: 2rem;
      width: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #14120f;
      border: 2px solid #090807;
      border-radius: 50%;
    }

    svg {
      height: 1rem;
      width: 1rem;
      color: rgba(255, 255, 255, 0.4);
    }
  }

  .external-link {
    margin: 0 0 0 0.375rem;
    display: inline-flex;
    justify-content: flex-end;
    align-items: flex-end;

    svg {
      width: 0.875rem;
      height: 0.875rem;
      color: rgba(255, 255, 255, 0.25);
    }
  }

  .store-information {
    margin: 0 0 0.375rem;
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    display: inline-flex;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: #fff;
    background-color: #090807;
    border-radius: 9999px;

    .name {
      padding: 0.125rem 0.75rem;
      background-color: #d79e32;
      font-size: 0.6875rem;
      font-weight: 600;
      line-height: 1.25rem;
      text-transform: uppercase;
      letter-spacing: 0.025em;
      border-radius: 9999px;
    }

    .action {
      margin: 0 0 0 1rem;
      font-size: 0.8125rem;
    }

    svg {
      margin: 0 0 0 0.3125rem;
      height: 1.25rem;
      width: 1.25rem;
    }

    &:hover {
      svg {
        transform: translateX(0.125rem);
      }
    }
  }
`;

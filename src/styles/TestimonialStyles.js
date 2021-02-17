import styled from 'styled-components';

export const TestimonialsSection = styled.div`
  padding: 5rem 0 2rem;
  width: 100%;
  display: flex;
  align-items: center;

  .inner {
    margin: 0 auto;
    padding: 3rem;
    position: relative;
    max-width: 800px;
    width: 100%;
    /* height: 418px; */
    background-color: #f7f6f3;
  }

  h3 {
    margin: 0 0 2rem;
    font-family: 'Poppins', sans-serif;
    color: #b8ac95;
    color: #a89a7e;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.25em;
  }

  li {
    display: none;
    text-align: center;

    &.active {
      display: flex;
      flex-direction: column;
    }
  }

  blockquote {
    padding: 0;
    margin: 0 0 1.5rem;
    line-height: 2;
    color: #38342d;
  }

  .from {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  .count {
    margin: 2rem 0 0;
    font-size: 0.75rem;
    color: #9ca3af;
  }

  .prev-btn,
  .next-btn {
    padding: 0.625rem;
    position: absolute;
    top: 80px;
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #d1d5db;
    cursor: pointer;
    border-radius: 9999px;
    border: 2px solid transparent;

    &:hover {
      color: #9ca3af;
    }

    &:focus {
      outline: 2px solid transparent;
      border: 2px solid #0284c7;
      color: #0284c7;
    }

    svg {
      height: 1.75rem;
      width: 1.75rem;
    }
  }

  .prev-btn {
    left: -125px;
  }

  .next-btn {
    right: -125px;
  }
`;

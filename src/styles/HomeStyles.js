import styled from 'styled-components';
import image from '../images/hero.jpg';

export const Hero = styled.div`
  padding: 7rem 0;
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;

  .inner {
    margin: 0 auto;
    max-width: 1000px;
  }

  h2 {
    margin: 0;
    font-family: 'Merriweather', serif;
    font-size: 1.625rem;
    font-weight: 600;
    color: #fff;
  }

  p {
    margin: 2.5rem 0 2.75rem;
    max-width: 450px;
    font-size: 1.25rem;
    color: #fafafd;
    line-height: 1.25;
  }

  a:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: rgb(13, 11, 9) 0px 0px 0px 2px, #cee7bd 0px 0px 0px 4px,
      rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }
`;

export const Welcome = styled.div`
  padding: 6rem 0;
  background-color: #f5f4f1;

  h3 {
    margin: 0 0 1.5rem;
    font-size: 1.375rem;
    color: #323842;
  }

  .row {
    margin: 0 auto;
    max-width: 1000px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .welcome-text {
    padding: 0 2rem 0 0;
    max-width: 500px;
    width: 55%;
    align-self: center;
  }

  .stores {
    width: 45%;
  }

  .links {
    display: flex;
    margin: 2rem 0 0;

    a:first-of-type {
      margin: 0 1rem 0 0;
    }
  }
`;

export const FamiliesDiv = styled.div`
  width: 100%;
  /* background-color: #f5f4f1; */

  .inner {
    padding: 4rem 0;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
  }

  .img {
    width: 40%;
    height: 100%;
    position: relative;

    img {
      /* margin-top: -3.75rem; */
      /* position: absolute; */
      width: 100%;
      border-radius: 0.125rem;
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    }
  }

  .text {
    padding: 0 0 0 5rem;
    width: 65%;
  }

  h3 {
    margin: 0;
    font-size: 1.25rem;
    color: #323842;
  }

  p {
    margin: 1.5rem 0 0;
  }
`;

export const EveryLife = styled.div`
  padding: 5rem 0;
  width: 100%;

  .inner {
    margin: 0 auto;
    /* padding: 0 0 4rem; */
    max-width: 1000px;
    width: 100%;
    /* border-bottom: 1px solid #e5e7eb; */
  }

  .row {
    display: flex;
    justify-content: space-between;

    > div {
      width: 46%;
    }
  }

  h3 {
    margin: 0 0 2.5rem;
    font-size: 1.5rem;
    font-style: italic;
    color: #323842;
    text-align: center;
  }

  p {
    margin: 0 0 1.5rem;
  }
`;

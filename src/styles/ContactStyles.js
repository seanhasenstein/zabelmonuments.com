import styled from 'styled-components';

export const ContactStyles = styled.div`
  padding: 3rem 0;
  width: 100%;

  .inner {
    margin: 0 auto;
    padding: 0 1.25rem;
    max-width: 1040px;
    width: 100%;
  }

  div.header {
    padding: 0 0 3.5rem 0;

    p {
      margin: 0;
      line-height: 1.75;
    }
  }

  .row {
    max-width: 620px;
    width: 100%;
  }

  .text-inputs {
    max-width: 400px;
  }

  form {
    margin: 0;
    width: 100%;
  }

  .field {
    margin: 0 0 1.125rem;
    display: flex;
    flex-direction: column;

    &.choose-store {
      margin: 0 0 3.5rem;
    }
  }

  .radio-group {
    margin: 0.75rem 0 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    li {
      margin: 0.5rem 0;
      width: 48.5%;
      border-radius: 0.375rem;
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

      label {
        margin: 0;
        position: relative;
        display: flex;
        align-items: center;
        font-size: 0.875rem;
        color: #4b5563;
        cursor: pointer;
        padding: 0.875rem 1rem;
        border: 1px solid #e5e7eb;
        border-radius: 0.375rem;
        z-index: 100;

        &.active {
          background-color: rgb(240, 249, 255);
          border-color: rgb(186, 230, 253);
          z-index: 200;
        }
      }

      input {
        margin: 0 0.75rem 0 0;
        border-color: rgb(209, 213, 219);
        background-color: #fff;
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
        width: 1rem;
        height: 1rem;
        cursor: pointer;
        border-radius: 100%;
        padding: 0;
        color-adjust: exact;
        display: inline-block;
        vertical-align: middle;
        background-origin: border-box;
        user-select: none;
        flex-shrink: 0;
        color: color rgb(2, 132, 199);
        border-width: 1px;

        &:checked {
          background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
          border-color: transparent;
          background-color: rgb(2, 132, 199);
          background-size: 100% 100%;
          background-position: center;
          background-repeat: no-repeat;
        }

        &:focus {
          outline: 2px solid transparent;
          outline-offset: 2px;
          box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px,
            rgb(14, 165, 233) 0px 0px 0px 4px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
        }
      }
    }
  }

  .radio-title {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
  }

  label {
    margin: 0 0 0.25rem;
    font-family: 'Poppins', sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
  }

  input,
  textarea {
    margin: 0;
    padding: 0.625rem 0.75rem;
    font-family: 'Poppins', sans-serif;
    font-size: 0.8125rem;
    line-height: 1.25rem;
    border-radius: 0.375rem;
    border: 1px solid #d1d5db;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    appearance: none;

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
      border-color: #1cb0ff;
      box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px, #1cb0ff 0px 0px 0px 1px,
        rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }
  }

  textarea {
    resize: vertical;
    min-height: 110px;
  }

  #honeypot {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap;
  }

  .error {
    margin: 0.125rem 0 0;
    font-family: 'Poppins', sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
    color: #e61e2b;
  }

  @media (max-width: 600px) {
    .radio-group li {
      max-width: 350px;
      width: 100%;
    }
  }
`;

import styled from 'styled-components';

export const ContactStyles = styled.div`
  padding: 3rem 0;
  width: 100%;

  .inner {
    margin: 0 auto;
    max-width: 1000px;
    width: 100%;
  }

  .row {
    display: flex;
  }

  .column:first-of-type {
    padding: 0 4rem 0 0;
    width: 55%;
  }

  .column:last-of-type {
    padding: 4rem 0 0 0;
    width: 45%;
  }

  div.header {
    padding: 0 0 0.25rem 0;

    p {
      margin: 0;
    }
  }

  form {
    margin: 3rem 0 0;
    max-width: 400px;
    width: 100%;
  }

  .field {
    margin: 0 0 1.125rem;
    display: flex;
    flex-direction: column;
  }

  .radio-group {
    margin-bottom: 1.75rem;

    li {
      margin: 0 0 0.75rem;

      &:last-of-type {
        margin: 0;
      }

      label {
        display: flex;
        align-items: center;
        font-size: 0.875rem;
        color: #4b5563;
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
    margin: 0 0 0.25rem;
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.025em;
    text-transform: uppercase;
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
    padding: 0.5rem 0.75rem;
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
    /* color: #e02424; */
    color: #e61e2b;
  }
`;

import React from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';
import { Contact } from '../types';
import { formatContactTerm, removeNonDigits } from '../utils';

type Props = {
  activeContact: Contact;
};

export default function ContactForm({ activeContact }: Props) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const elements = e.currentTarget;

    // honeypot triggered
    if (elements.honey.value) return;

    const newMessage = {
      store: activeContact,
      name: elements.customer.value.trim(),
      email: elements.email.value.trim().toLowerCase(),
      phone: removeNonDigits(elements.phone.value),
      message: elements.message.value.trim(),
    };

    const response = await fetch('/.netlify/functions/send-message', {
      method: 'post',
      body: JSON.stringify(newMessage),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // server error
    if (!response.ok) {
      setError(true);
      setIsLoading(false);
      return;
    }

    //success
    navigate('/success');
  };

  return (
    <ContactFormStyles>
      <form method="post" onSubmit={handleSubmit}>
        <h4>Please fill out this form</h4>
        <div className="form-item">
          <label htmlFor="customer">Your name</label>
          <input id="customer" required />
        </div>
        <div className="grid-col-2">
          <div className="form-item">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-item">
            <label htmlFor="phone">Phone number</label>
            <input id="phone" required />
          </div>
        </div>
        <div className="form-item">
          <label htmlFor="message">How can we help you?</label>
          <textarea id="message" required />
        </div>
        <div className="form-item sr-only">
          <label htmlFor="honey">Please leave this field empty</label>
          <input id="honey" tabIndex={-1} />
        </div>
        <div className="actions">
          <div className="selected-contact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            Set to contact our {formatContactTerm(activeContact)}
          </div>
          <button type="submit" className="submit-button" disabled={isLoading}>
            {isLoading ? <span className="spinner" /> : 'Send your message'}
          </button>
        </div>
        {error && (
          <div className="error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            An error occurred on the server. Please try again.
          </div>
        )}
      </form>
    </ContactFormStyles>
  );
}

const ContactFormStyles = styled.div`
  form {
    margin: 0;
    width: 100%;
  }

  .grid-col-2 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
    gap: 0 1rem;
  }

  .form-item {
    margin: 0 0 1.5rem;
    display: flex;
    flex-direction: column;
  }

  label {
    margin: 0 0 0.25rem;
    font-family: 'Poppins', sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
    color: #6b7280;
  }

  input,
  textarea {
    margin: 0;
    padding: 0.625rem 0.75rem;
    font-family: 'Poppins', sans-serif;
    font-size: 0.8125rem;
    line-height: 1.25rem;
    border-radius: 0.25rem;
    border: 1px solid #d1d5db;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    appearance: none;

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
      border-color: #4338ca;
      box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px, #4338ca 0px 0px 0px 1px,
        rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }
  }

  textarea {
    resize: vertical;
    min-height: 8rem;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
  }

  .submit-button {
    padding: 0 1.25rem;
    position: relative;
    height: 42px;
    min-width: 13rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #6ea546;
    font-family: 'Poppins', sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.025rem;
    color: rgba(255, 255, 255, 1);
    border: 1px solid #569740;
    border-radius: 0.3125rem;
    box-shadow: inset 0 1px 1px #89c475;
    cursor: pointer;
    transition: background-color 150ms ease-in-out;

    &:hover {
      background-color: #77b34c;
    }

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }

    &:focus-visible {
      outline: 2px solid transparent;
      outline-offset: 2px;
      box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px, #1967d2 0px 0px 0px 4px,
        rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }
  }

  .selected-contact {
    display: none;
    align-items: center;
    font-size: 0.75rem;
    font-weight: 500;
    color: #111827;
    text-align: center;
    line-height: 1;

    svg {
      margin: 0 0.375rem 0 0;
      height: 0.875rem;
      width: 0.875rem;
      color: #9ca3af;
    }
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .spinner:before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    margin-left: -10px;
    border-radius: 50%;
    border-top: 2px solid #fff;
    border-right: 2px solid transparent;
    animation: spinner 0.6s linear infinite;
  }

  .error {
    margin: 1.5rem 0 0;
    padding: 0.875rem 1.25rem;
    display: flex;
    align-items: center;
    font-size: 0.8125rem;
    font-weight: 500;
    line-height: 1;
    color: #991b1b;
    background-color: #fee2e2;
    border: 1px solid #fecaca;
    border-radius: 0.1875rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

    svg {
      flex-shrink: 0;
      margin: 0 0.4375rem 0 0;
      height: 0.8125rem;
      width: 0.8125rem;
      color: #b91c1c;
    }
  }

  @media (max-width: 767px) {
    .actions {
      justify-content: space-between;
      align-items: center;
    }

    .selected-contact {
      display: flex;
    }
  }

  @media (max-width: 550px) {
    input,
    textarea {
      font-size: 1rem;
    }

    .actions {
      flex-direction: column-reverse;
    }

    .selected-contact {
      margin: 1.5rem 0 0;
    }

    .submit-button {
      width: 100%;
    }

    .error {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      line-height: 1.35;

      svg {
        margin: 0 0 0.5rem;
      }
    }
  }
`;

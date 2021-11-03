import React from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';
import { useQueryParam, StringParam } from 'use-query-params';
import axios from 'axios';
import Layout from '../components/Layout';

const stores = {
  greenBay: 'green-bay',
  manitowoc: 'manitowoc',
  sheboygan: 'sheboygan',
  askOurCM: 'ask-our-cm',
};

export default function Contact() {
  const [store, setStore] = useQueryParam('store', StringParam);
  const [activeClass, setActiveClass] = React.useState<string>();
  const [loading, setLoading] = React.useState(false);
  const [serverError, setServerError] = React.useState(false);

  React.useEffect(() => {
    if (!store) {
      setActiveClass(stores.manitowoc);
      setStore('manitowoc');
      return;
    }

    setActiveClass(store);
  }, [store]);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const { name, email, phone, message, honey } = e.target.elements;

    if (honey.value) {
      // honeypot triggered
      setLoading(false);
      return;
    }

    const newMessage = {
      store,
      name: name.value.trim(),
      email: email.value.toLowerCase().trim(),
      phone: phone.value.trim(),
      message: message.value.trim(),
    };

    axios
      .post('/.netlify/functions/send-message', newMessage)
      .then(() => {
        navigate('/success');
      })
      .catch(() => {
        setServerError(true);
        setLoading(false);
      });
  }

  return (
    <Layout
      title="Contact Us | Zabel Monuments"
      description="Contact our Manitowoc, Green Bay, or Sheboygan store. Or send a message to our Certified Memorialist. We are here to help with anything that you may need."
      urlPath="contact"
    >
      <ContactStyles>
        <div className="inner">
          <div className="row">
            <div>
              <h2>Contact Us</h2>
              <p>
                How can we help you? Use this form for any questions that you
                have or to schedule an appointment.
              </p>
            </div>
            <form method="post" onSubmit={handleSubmit}>
              <div className="section">
                <h3>Who would you like to contact?</h3>
                <ul className="radio-group">
                  <li>
                    <label
                      className={
                        activeClass === stores.manitowoc ? 'active' : ''
                      }
                    >
                      <input
                        type="radio"
                        value={stores.manitowoc}
                        checked={store === stores.manitowoc}
                        onChange={() => setStore(stores.manitowoc)}
                        name="store"
                      />
                      Manitowoc Store
                    </label>
                  </li>
                  <li>
                    <label
                      className={
                        activeClass === stores.greenBay ? 'active' : ''
                      }
                    >
                      <input
                        type="radio"
                        value={stores.greenBay}
                        checked={store === stores.greenBay}
                        onChange={() => setStore(stores.greenBay)}
                        name="store"
                      />
                      Green Bay Store
                    </label>
                  </li>
                  <li>
                    <label
                      className={
                        activeClass === stores.sheboygan ? 'active' : ''
                      }
                    >
                      <input
                        type="radio"
                        value={stores.sheboygan}
                        checked={store === stores.sheboygan}
                        onChange={() => setStore(stores.sheboygan)}
                        name="store"
                      />
                      Sheboygan Store
                    </label>
                  </li>
                  <li>
                    <label
                      className={
                        activeClass === stores.askOurCM ? 'active' : ''
                      }
                    >
                      <input
                        type="radio"
                        value={stores.askOurCM}
                        checked={store === stores.askOurCM}
                        onChange={() => setStore(stores.askOurCM)}
                        name="store"
                      />
                      Ask our Certified Memorialist
                    </label>
                  </li>
                </ul>
              </div>
              <div className="section">
                <h3>Please fill out this form:</h3>
                <div className="form-item">
                  <label htmlFor="name">Your name</label>
                  <input id="name" required />
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
              </div>
              <button
                type="submit"
                className="submit-button"
                disabled={loading}
              >
                {loading ? (
                  <span className="spinner" />
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Send your message
                  </>
                )}
              </button>
              {serverError && (
                <div className="server-error">
                  Server error: Please try sending your message again.
                </div>
              )}
            </form>
          </div>
        </div>
      </ContactStyles>
    </Layout>
  );
}

const ContactStyles = styled.div`
  padding: 3.5rem 0;
  width: 100%;

  .inner {
    margin: 0 auto;
    padding: 0 1.25rem;
    max-width: 1040px;
    width: 100%;
  }

  p {
    margin: 0;
  }

  .row {
    max-width: 34rem;
    width: 100%;
  }

  form {
    margin: 0 0 1rem;
    width: 100%;
  }

  .section {
    margin: 2.5rem 0 0;
    padding: 2.5rem 0 0;
    border-top: 1px solid #e2e8f0;
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

  .radio-group {
    margin: 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;

    li {
      margin: 0;
      width: calc(50% - 0.5rem);
      border-radius: 0.375rem;
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

      label {
        margin: 0;
        padding: 0.875rem 1rem;
        position: relative;
        display: flex;
        align-items: center;
        font-size: 0.8125rem;
        color: #4b5563;
        background-color: #fff;
        border: 1px solid #e2e8f0;
        border-radius: 0.3125rem;
        cursor: pointer;
        z-index: 100;

        &.active {
          background-color: #eef2ff;
          border-color: #c7d2fe;
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
          background-color: #4f46e5;
          background-size: 100% 100%;
          background-position: center;
          background-repeat: no-repeat;
        }

        &:focus {
          outline: 2px solid transparent;
          outline-offset: 2px;
          box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px,
            #6366f1 0px 0px 0px 4px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
        }
      }
    }
  }

  h3 {
    margin: 0 0 1.5rem;
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    color: #475569;
  }

  label {
    margin: 0 0 0.25rem;
    font-family: 'Poppins', sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
    color: #64748b;
  }

  input,
  textarea {
    margin: 0;
    padding: 0.625rem 0.75rem;
    font-family: 'Poppins', sans-serif;
    font-size: 0.8125rem;
    line-height: 1.25rem;
    border-radius: 0.25rem;
    border: 1px solid #e2e8f0;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    appearance: none;

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
      border-color: #2563eb;
      box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px, #2563eb 0px 0px 0px 1px,
        rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }
  }

  textarea {
    resize: vertical;
    min-height: 8rem;
  }

  .submit-button {
    margin: 0.5rem 0 0;
    padding: 0 1.5rem;
    position: relative;
    height: 42px;
    min-width: 14rem;
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

    svg {
      margin: 0 0.5rem 0 0;
      color: #a1ca83;
      height: 1rem;
      width: 1rem;
    }

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
      box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px, #6ea546 0px 0px 0px 4px,
        rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
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
    margin: 0.125rem 0 0;
    font-family: 'Poppins', sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
    color: #e61e2b;
  }

  .validation-error {
    margin: 0.25rem 0 0;
    font-size: 0.75rem;
    font-weight: 500;
    color: #e40764;
  }

  .server-error {
    margin: 1rem 0 0;
    font-size: 0.8125rem;
    font-weight: 500;
    color: #e40764;
  }

  @media (max-width: 600px) {
    background-size: 225%;

    .radio-group li {
      width: 100%;
    }

    .submit-button {
      width: 100%;
    }
  }
`;

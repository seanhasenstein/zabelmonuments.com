import React from 'react';
import PropTypes from 'prop-types';
import { useQueryParam, StringParam } from 'use-query-params';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import axios from 'axios';
import styled from 'styled-components';
import { removeNonDigits } from '../utils';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const stores = {
  greenBay: 'green-bay',
  manitowoc: 'manitowoc',
  sheboygan: 'sheboygan',
  askOurCM: 'ask-our-cm',
};

export default function Contact() {
  const [store, setStore] = useQueryParam('store', StringParam);
  const [activeClass, setActiveClass] = React.useState();

  React.useEffect(() => {
    if (!store) {
      setActiveClass(stores.manitowoc);
      setStore('manitowoc', StringParam);
      return;
    }

    setActiveClass(store);
  }, [store]);

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
    honeypot: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Your name is required'),
    email: Yup.string()
      .email('Please provide a valid email address')
      .required('Email address is required'),
    phone: Yup.string()
      .transform(value => removeNonDigits(value))
      .matches(new RegExp(/^\d{10}$/), 'Phone number must 10 digits')
      .required('Phone number is required'),
    message: Yup.string().required('A message is required'),
  });

  return (
    <Layout>
      <SEO title="Contact Us | Zabel Monuments" urlPath="contact" />
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
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={values => {
                console.log('form submitted...');
                console.log(values);
                // check for honeypot
                // todo: add axios call to serverless fn
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="field choose-store">
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
                  <div>
                    <h3>Please fill out this form:</h3>
                    <div className="field">
                      <label htmlFor="name">Your Name</label>
                      <Field name="name" id="name" />
                      <ErrorMessage
                        component="div"
                        name="name"
                        className="validation-error"
                      />
                    </div>
                    <div className="grid-col-2">
                      <div className="field">
                        <label htmlFor="email">Email Address</label>
                        <Field name="email" id="email" />
                        <ErrorMessage
                          component="div"
                          name="email"
                          className="validation-error"
                        />
                      </div>
                      <div className="field">
                        <label htmlFor="phone">Phone Number</label>
                        <Field name="phone" id="phone" />
                        <ErrorMessage
                          component="div"
                          name="phone"
                          className="validation-error"
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label htmlFor="message">Your Message</label>
                      <Field as="textarea" name="message" id="message" />
                      <ErrorMessage
                        component="div"
                        name="message"
                        className="validation-error"
                      />
                    </div>
                    <div className="field" id="honeypot">
                      <label htmlFor="honeypot">
                        Please leave this field blank.
                      </label>
                      <Field name="honeypot" id="honeypot" tabIndex="-1" />
                    </div>
                  </div>
                  <button className="submit-button" disabled={isSubmitting}>
                    {isSubmitting ? (
                      'Loading...'
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
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </ContactStyles>
    </Layout>
  );
}

Contact.propTypes = {
  location: PropTypes.object,
};

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

  .grid-col-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .field {
    margin: 0 0 1.5rem;
    display: flex;
    flex-direction: column;

    &.choose-store {
      margin: 3rem 0 3.5rem;
    }
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
    padding: 2.125rem 0 0;
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    color: #475569;
    border-top: 1px solid #e2e8f0;
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

  #honeypot {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap;
  }

  button {
    margin: 0.5rem 0 0;
  }

  .submit-button {
    padding: 0.6875rem 1.5rem;
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
      box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px, #6ea546 0px 0px 0px 4px,
        rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }
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

  @media (max-width: 600px) {
    .radio-group li {
      max-width: 350px;
      width: 100%;
    }
  }
`;

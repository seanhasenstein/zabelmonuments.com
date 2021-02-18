import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Layout from '../components/Layout';
import StoreTabs from '../components/StoreTabs';
import Button from '../components/common/Button';
import { emailIsValid } from '../utils';
import { ContactStyles } from '../styles/ContactStyles';

const stores = {
  greenBay: 'green-bay',
  manitowoc: 'manitowoc',
  sheboygan: 'sheboygan',
  askOurCM: 'ask-our-cm',
};

export default function Contact({ location }) {
  const initialState = {
    name: '',
    email: '',
    phone: '',
    message: '',
    nameError: '',
    emailError: '',
    phoneError: '',
    messageError: '',
    selectedStore:
      location.state && location.state.store
        ? location.state.store
        : stores.greenBay,
    status: 'IDLE',
    honeypot: '',
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'updateField':
        return { ...state, [action.field]: action.value };
      case 'updateStatus':
        return { ...state, status: action.value };
      case 'reset':
      default:
        return initialState;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const updateField = field => event => {
    dispatch({
      type: 'updateField',
      field,
      value: event.target.value,
    });
  };

  const updateStatus = value => {
    dispatch({
      type: 'updateStatus',
      value: value,
    });
  };

  const updateError = (field, value) => {
    dispatch({
      type: 'updateField',
      field,
      value,
    });
  };

  const validateForm = () => {
    let nameError, emailError, phoneError, messageError;

    if (!state.name) nameError = 'Name is required.';
    if (!state.email) emailError = 'Email is required.';
    if (state.email && !emailIsValid(state.email)) {
      emailError = 'Invalid email address.';
    }
    if (!state.phone) phoneError = 'Phone is required.';
    if (
      (state.phone && state.phone.replace(/\D/g, '').length < 10) ||
      state.phone.replace(/\D/g, '').length > 10
    ) {
      phoneError = 'Phone number must have 10 digits.';
    }
    if (!state.message) messageError = 'A message is required.';

    if (nameError || emailError || phoneError || messageError) {
      updateError('nameError', nameError);
      updateError('emailError', emailError);
      updateError('phoneError', phoneError);
      updateError('messageError', messageError);

      return false;
    }

    return true;
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (state.honeypot) return;

    const isValid = validateForm();

    if (isValid) {
      updateStatus('PENDING');

      axios
        .post('/.netlify/functions/send-message', {
          store: state.selectedStore,
          name: state.name,
          email: state.email,
          phone: state.phone,
          message: state.message,
          honeypot: state.honeypot,
        })
        .then(res => {
          console.log(res.data);
          updateStatus('SUCCESS');
        })
        .catch(error => {
          console.log(error.response);
          updateStatus('ERROR');
        });
    }
  };

  return (
    <Layout>
      <ContactStyles>
        <div className="inner">
          <div className="row">
            <div className="header">
              <h2>Contact Us</h2>
              <p>
                How can we help you? Use this form for any questions that you
                have or if you would like to schedule an appointment.
              </p>
            </div>
            <form action="POST" onSubmit={handleSubmit}>
              <div className="field choose-store">
                <div className="radio-title">
                  Who would you like to contact?
                </div>
                <ul className="radio-group">
                  <li>
                    <label
                      className={
                        state.selectedStore === stores.greenBay ? 'active' : ''
                      }
                    >
                      <input
                        type="radio"
                        value={stores.greenBay}
                        checked={state.selectedStore === stores.greenBay}
                        onChange={updateField('selectedStore')}
                        name="store"
                      />
                      Green Bay Store
                    </label>
                  </li>
                  <li>
                    <label
                      className={
                        state.selectedStore === stores.manitowoc ? 'active' : ''
                      }
                    >
                      <input
                        type="radio"
                        value={stores.manitowoc}
                        checked={state.selectedStore === stores.manitowoc}
                        onChange={updateField('selectedStore')}
                        name="store"
                      />
                      Manitowoc Store
                    </label>
                  </li>
                  <li>
                    <label
                      className={
                        state.selectedStore === stores.sheboygan ? 'active' : ''
                      }
                    >
                      <input
                        type="radio"
                        value={stores.sheboygan}
                        checked={state.selectedStore === stores.sheboygan}
                        onChange={updateField('selectedStore')}
                        name="store"
                      />
                      Sheboygan Store
                    </label>
                  </li>
                  <li>
                    <label
                      className={
                        state.selectedStore === stores.askOurCM ? 'active' : ''
                      }
                    >
                      <input
                        type="radio"
                        value={stores.askOurCM}
                        checked={state.selectedStore === stores.askOurCM}
                        onChange={updateField('selectedStore')}
                        name="store"
                      />
                      Ask our Certified Memorialist
                    </label>
                  </li>
                </ul>
              </div>
              <div className="text-inputs">
                <div className="field">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={state.name}
                    onChange={updateField('name')}
                  />
                  {state.nameError ? (
                    <div className="error">{state.nameError}</div>
                  ) : null}
                </div>
                <div className="field">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={state.email}
                    onChange={updateField('email')}
                  />
                  {state.emailError ? (
                    <div className="error">{state.emailError}</div>
                  ) : null}
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={state.phone}
                    onChange={updateField('phone')}
                  />
                  {state.phoneError ? (
                    <div className="error">{state.phoneError}</div>
                  ) : null}
                </div>
                <div className="field">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    name="message"
                    id="message"
                    value={state.message}
                    onChange={updateField('message')}
                  />
                  {state.messageError ? (
                    <div className="error">{state.messageError}</div>
                  ) : null}
                </div>
                <div className="field" id="honeypot">
                  <label htmlFor="honeypot">
                    Please leave this field blank.
                  </label>
                  <input
                    type="text"
                    name="honeypot"
                    id="honeypot"
                    value={state.honeypot}
                    onChange={updateField('honeypot')}
                    tabIndex="-1"
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="submit"
                disabled={state.status === 'PENDING'}
              >
                {state.status === 'PENDING' ? (
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
              </Button>
            </form>
          </div>
        </div>
      </ContactStyles>
    </Layout>
  );
}

Contact.propTypes = {
  location: PropTypes.object,
};

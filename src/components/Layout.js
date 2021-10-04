import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import { GlobalStyles } from '../styles/GlobalStyles';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Helmet>
        <html lang="en" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Footer from './Footer';
import { GlobalStyles } from '../styles/GlobalStyles';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
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

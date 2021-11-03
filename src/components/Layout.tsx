import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Footer from './Footer';
import { GlobalStyles } from '../styles/GlobalStyles';

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  urlPath?: string;
};

export default function Layout({
  children,
  title = 'Zabel Monuments | Manitowoc, Green Bay, Sheboygan, WI',
  description = 'Bringing comfort and personalized memorials to generations of families in East Central Wisconsin since 1970.',
  urlPath = '',
}: Props) {
  return (
    <>
      <GlobalStyles />
      <Helmet>
        <html lang="en" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <title>{title}</title>
        <link rel="canonical" href={`https://zabelmonuments.com/${urlPath}`} />
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </>
  );
}

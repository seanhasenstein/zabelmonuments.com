import React from 'react';
import { Helmet } from 'react-helmet';
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';
import '@reach/skip-nav/styles.css';
import styled from 'styled-components';
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
      <LayoutStyles>
        <SkipNavLink>Skip to main content</SkipNavLink>
        <Header />
        <SkipNavContent />
        {children}
        <Footer />
      </LayoutStyles>
    </>
  );
}

const LayoutStyles = styled.div`
  [data-reach-skip-link] {
    position: absolute;
    top: -100%;
    left: 3rem;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 500;
    color: #fff;
    background-color: #1967d2;
    border-radius: 0.25rem;
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px,
      rgba(17, 24, 39, 0.05) 0px 0px 0px 1px,
      rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    z-index: 9999;
  }

  [data-reach-skip-link]:focus {
    top: 2rem;
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: #2a2721 0px 0px 0px 2px, #1967d2 0px 0px 0px 4px,
      rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }
`;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SidebarNav from './SidebarNav';
import pageBackground from '../images/page-background.jpg';

export default function PageShell({ children }) {
  return (
    <PageContainer>
      <div className="page-container">
        <SidebarNav />
        <main>{children}</main>
      </div>
    </PageContainer>
  );
}

PageShell.propTypes = {
  children: PropTypes.any.isRequired,
};

const PageContainer = styled.div`
  padding: 5rem 1.5rem;
  background-image: url(${pageBackground});
  background-size: 100%;
  background-position: center top;
  background-repeat: no-repeat;

  .page-container {
    margin: 0 auto;
    max-width: 65rem;
    display: flex;
  }

  main {
    width: 100%;
  }

  h2 {
    margin: 0 0 1.5rem;
    padding: 0 0 0.875rem;
    font-size: 1.5rem;
    border-bottom: 1px solid #e2e8f0;
  }

  p {
    margin: 0 0 2rem;
  }

  ul {
    padding: 0 0 0 1.25rem;
  }

  li {
    list-style-type: disc;
    padding: 0.75rem 0;
    font-size: 0.9375rem;
    color: #475569;
  }

  .external-link {
    color: #111827;
    text-decoration: underline;
  }

  @media (max-width: 767px) {
    padding: 3.5rem 1.5rem;

    h2 {
      margin: 0 0 2.5rem;
      padding: 0;
      border: none;
    }
  }
`;

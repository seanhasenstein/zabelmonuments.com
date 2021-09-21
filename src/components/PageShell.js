import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SidebarNav from './SidebarNav';

export default function PageShell({ children }) {
  return (
    <PageContainer>
      <SidebarNav />
      <main>{children}</main>
    </PageContainer>
  );
}

PageShell.propTypes = {
  children: PropTypes.any.isRequired,
};

const PageContainer = styled.div`
  margin: 0 auto;
  padding: 5rem 1.25rem;
  max-width: 65rem;
  display: flex;

  h2 {
    margin: 0 0 1.5rem;
    padding: 0 0 0.875rem;
    font-size: 1.5rem;
    border-bottom: 1px solid #e2e8f0;
  }

  main {
    max-width: calc(100% - 235px);
    width: 100%;
  }
`;

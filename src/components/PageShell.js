import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SidebarNav from './SidebarNav';

const PageContainer = styled.div`
  margin: 0 auto;
  padding: 4rem 1.25rem;
  max-width: 1040px;
  display: flex;

  h2 {
    margin: 0 0 1.5rem;
  }

  main {
    width: calc(100% - 235px);
  }
`;

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

import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatbyLink } from 'gatsby';
import styled from 'styled-components';

const StyledLink = styled(GatbyLink)`
  padding: 0.625rem 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #6ea546;
  /* background: #026aa0; */
  font-family: 'Poppins', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.025rem;
  color: rgba(255, 255, 255, 0.95);
  border-radius: 0.25rem;

  svg {
    margin: 0 0.75rem 0 0;
    color: rgba(255, 255, 255, 0.6);
    height: 1rem;
    width: 1rem;
  }

  &:hover {
    background-color: #77b34c;
    color: rgba(255, 255, 255, 1);

    svg {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px, #6ea546 0px 0px 0px 4px,
      rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }
`;

export default function LinkButton({ slug, children }) {
  return <StyledLink to={slug}>{children}</StyledLink>;
}

LinkButton.propTypes = {
  slug: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

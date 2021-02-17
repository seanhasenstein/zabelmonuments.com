import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export default function NavLinkItem({ slug, text, state }) {
  return (
    <Link to={`${slug}`} state={state ? { store: state.store } : null}>
      {text}
    </Link>
  );
}

NavLinkItem.propTypes = {
  slug: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  state: PropTypes.object,
};

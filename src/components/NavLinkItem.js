import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export default function NavLinkItem({ slug, text }) {
  return <Link to={`${slug}`}>{text}</Link>;
}

NavLinkItem.propTypes = {
  slug: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

export default function SEO({
  title = 'Zabel Monuments | Manitowoc, Green Bay, Sheboygan, WI',
  description = '',
  urlPath = '',
}) {
  return (
    <Helmet defer={false}>
      <title>{title}</title>
      <link rel="canonical" href={`https://zabelmonuments.com/${urlPath}`} />
      <meta name="description" content={description} />
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  urlPath: PropTypes.string,
};

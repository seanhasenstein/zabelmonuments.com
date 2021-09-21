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
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Poppins:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  urlPath: PropTypes.string,
};

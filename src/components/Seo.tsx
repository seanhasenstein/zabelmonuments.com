import React from 'react';
import { Helmet } from 'react-helmet';

type Props = {
  title?: string;
  description?: string;
  urlPath?: string;
};

export default function SEO({
  title = 'Zabel Monuments | Manitowoc, Green Bay, Sheboygan, WI',
  description = '',
  urlPath = '',
}: Props) {
  return (
    <Helmet defer={false}>
      <title>{title}</title>
      <link rel="canonical" href={`https://zabelmonuments.com/${urlPath}`} />
      <meta name="description" content={description} />
    </Helmet>
  );
}

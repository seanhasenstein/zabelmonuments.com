import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';

export default function Guarantee({ location }) {
  return (
    <Layout>
      <h2>100% Guarantee</h2>
      <pre>{JSON.stringify(location, null, 2)}</pre>
    </Layout>
  );
}

Guarantee.propTypes = {
  location: PropTypes.object,
};

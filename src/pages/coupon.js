import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';

export default function Coupon({ location }) {
  return (
    <Layout>
      <h2>Coupon page:</h2>
      <pre>{JSON.stringify(location.state)}</pre>
    </Layout>
  );
}

Coupon.propTypes = {
  location: PropTypes.object,
};

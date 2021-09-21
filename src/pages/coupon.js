import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from '../components/Layout';
import PageShell from '../components/PageShell';
import coupon from '../images/coupon.jpg';

export default function Coupon() {
  return (
    <Layout>
      <PageShell>
        <CouponStyles>
          <h2>Website Coupon</h2>
          <p>
            Please print this page and present with your purchase to receive
            this discount.
          </p>
          <img src={coupon} alt="Website coupon graphic" />
        </CouponStyles>
      </PageShell>
    </Layout>
  );
}

Coupon.propTypes = {
  location: PropTypes.object,
};

const CouponStyles = styled.div`
  p {
    margin: 0 0 2rem;
  }

  img {
    max-width: 24rem;
    width: 100%;
  }

  @media print {
    h2,
    p {
      display: none;
    }
  }
`;

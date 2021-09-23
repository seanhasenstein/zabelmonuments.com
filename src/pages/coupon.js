import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import PageShell from '../components/PageShell';
import CouponImage from '../images/coupon.jpg';

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
          <img src={CouponImage} alt="Website coupon graphic" />
        </CouponStyles>
      </PageShell>
    </Layout>
  );
}

const CouponStyles = styled.div`
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

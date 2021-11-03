import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import StoreLocations from '../components/StoreLocations';
import Featured from '../components/Featured';
import Testimonials from '../components/Testimonials';

export default function Index() {
  return (
    <Layout>
      <Hero />
      <StoreLocations />
      <Featured />
      <Testimonials />
    </Layout>
  );
}

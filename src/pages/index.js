import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Hero from '../components/Hero';
import StoreLocations from '../components/StoreLocations';
import Testimonials from '../components/Testimonials';

export default function Index() {
  return (
    <Layout>
      <SEO />
      <Hero />
      <StoreLocations />
      <Testimonials />
    </Layout>
  );
}

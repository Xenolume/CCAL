import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Sections from '../components/Sections';
import ContentBlocks from '../components/ContentBlocks';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Sections />
      <ContentBlocks />
    </Layout>
  );
}

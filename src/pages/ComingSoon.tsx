import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function ComingSoon() {
  return (
    <Layout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-ivory">
        <div className="w-24 h-24 mb-8 mx-auto rounded-full bg-maroon-900/10 flex items-center justify-center">
          <span className="text-4xl">🚧</span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
          Coming Soon
        </h1>
        <p className="text-xl text-charcoal/70 mb-10 max-w-2xl">
          We are currently working on this section. Please check back later for updates.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center px-8 py-4 bg-gold-600 hover:bg-gold-500 text-maroon-900 font-bold rounded shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Return Home
        </Link>
      </div>
    </Layout>
  );
}

import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative bg-maroon-900 text-ivory pt-24 pb-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold-500 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-maroon-800 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-gold-600/40 bg-maroon-800/50 mb-8">
          <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
          <span className="text-xs uppercase tracking-widest text-gold-500 font-semibold">Institutional Excellence</span>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 max-w-5xl text-ivory drop-shadow-sm">
          CENTRE FOR COMPETITION <br className="hidden md:block"/>AND ANTITRUST LAWS
        </h1>
        
        <h2 className="text-lg md:text-xl lg:text-2xl text-ivory/90 mb-8 max-w-3xl font-light">
          Damodaram Sanjivayya National Law University, Visakhapatnam
        </h2>
        
        <div className="w-24 h-1 bg-gold-600 mb-8"></div>
        
        <p className="text-xl md:text-2xl font-serif italic text-gold-500 mb-12 max-w-2xl">
          Advancing Research. Shaping Competition Policy.
        </p>
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          <Link to="/coming-soon" className="inline-flex justify-center items-center px-8 py-4 bg-gold-600 hover:bg-gold-500 text-maroon-900 font-bold rounded shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            Explore Research
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link to="/coming-soon" className="inline-flex justify-center items-center px-8 py-4 bg-transparent border-2 border-gold-600 text-gold-500 hover:bg-gold-600/10 font-bold rounded transition-all duration-300">
            Upcoming Events
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link to="/coming-soon" className="text-gold-500/70 hover:text-gold-500 transition-colors">
          <ChevronDown className="w-8 h-8" />
        </Link>
      </div>
    </section>
  );
}

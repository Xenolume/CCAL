import React from 'react';
import { Menu, X, BookOpen, ChevronRight, Instagram, Linkedin, Twitter, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/coming-soon' },
    { name: 'Research', href: '/coming-soon' },
    { name: 'Publications', href: '/coming-soon' },
    { name: 'Events', href: '/coming-soon' },
    { name: 'People', href: '/coming-soon' },
    { name: 'Initiatives', href: '/coming-soon' },
    { name: 'Contact', href: '/coming-soon' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-maroon-900 text-ivory sticky top-0 z-50 border-b border-gold-600/30 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo area */}
            <Link to="/" className="flex items-center space-x-3 cursor-pointer group">
              <div className="flex items-center space-x-2">
                <div className="w-11 h-11 rounded-full border border-gold-500 bg-white overflow-hidden flex items-center justify-center p-0.5">
                  <img src="/DSNLU_Logo.png" alt="DSNLU Logo" className="w-full h-full object-contain" />
                </div>
                <div className="w-11 h-11 rounded-full border border-gold-500 bg-black overflow-hidden flex items-center justify-center">
                  <img src="/20953.png" alt="CCAL Logo" className="w-full h-full object-contain scale-[1.15]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl tracking-wide text-gold-500 leading-tight group-hover:text-gold-400 transition-colors">CCAL</span>
                <span className="text-xs uppercase tracking-widest text-ivory/80">DSNLU</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium hover:text-gold-500 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-ivory hover:text-gold-500 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-maroon-800 border-b border-gold-600/30">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium hover:bg-maroon-900 hover:text-gold-500 rounded-md transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-maroon-900 text-ivory border-t border-gold-600/50 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-16 rounded-full border border-gold-500 bg-white overflow-hidden flex items-center justify-center p-1">
                    <img src="/DSNLU_Logo.png" alt="DSNLU Logo" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-16 h-16 rounded-full border border-gold-500 bg-black overflow-hidden flex items-center justify-center">
                    <img src="/20953.png" alt="CCAL Logo" className="w-full h-full object-contain scale-[1.15]" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-2xl text-gold-500">CCAL</span>
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Centre for Competition and Antitrust Laws</h3>
              <p className="text-ivory/70 text-sm max-w-md mb-6 leading-relaxed">
                Damodaram Sanjivayya National Law University<br/>
                Sabbavaram, Visakhapatnam, Andhra Pradesh - 531035
              </p>
            </div>
            
            <div>
              <h4 className="font-serif text-lg font-semibold text-gold-500 mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-3">
                {['Research', 'Publications', 'Events', 'Initiatives'].map((item) => (
                  <li key={item}>
                    <Link to="/coming-soon" className="text-ivory/80 hover:text-gold-500 text-sm flex items-center transition-colors">
                      <ChevronRight className="w-4 h-4 mr-1 text-gold-600" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif text-lg font-semibold text-gold-500 mb-4 uppercase tracking-wider text-sm">Connect</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/coming-soon" className="text-ivory/80 hover:text-gold-500 text-sm flex items-center transition-colors">
                    <Mail className="w-4 h-4 mr-2 text-gold-600" />
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a href="https://www.instagram.com/ccal_dsnlu/" target="_blank" rel="noopener noreferrer" className="text-ivory/80 hover:text-gold-500 text-sm flex items-center transition-colors">
                    <Instagram className="w-4 h-4 mr-2 text-gold-600" />
                    Instagram
                  </a>
                </li>
                <li>
                  <Link to="/coming-soon" className="text-ivory/80 hover:text-gold-500 text-sm flex items-center transition-colors">
                    <Linkedin className="w-4 h-4 mr-2 text-gold-600" />
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link to="/coming-soon" className="text-ivory/80 hover:text-gold-500 text-sm flex items-center transition-colors">
                    <Twitter className="w-4 h-4 mr-2 text-gold-600" />
                    Twitter / X
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gold-600/30 flex flex-col md:flex-row justify-between items-center text-xs text-ivory/60">
            <p>&copy; {new Date().getFullYear()} Centre for Competition and Antitrust Laws, DSNLU. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed for prestigious legal research.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

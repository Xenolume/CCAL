import React from 'react';
import { FileText, Calendar, ExternalLink, ChevronRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContentBlocks() {
  return (
    <div className="bg-ivory">
      
      {/* Publications & Insights */}
      <section id="publications" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Publications */}
          <div>
            <div className="flex items-center space-x-4 mb-8">
              <div className="h-px bg-gold-600 w-8"></div>
              <span className="text-maroon-800 uppercase tracking-widest text-sm font-bold">Featured Publications</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-10">Academic Output</h2>
            
            <div className="space-y-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="group border-b border-charcoal/10 pb-8 last:border-0 last:pb-0">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 bg-maroon-900/5 p-2 rounded text-maroon-800">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-charcoal group-hover:text-maroon-800 transition-colors mb-2 cursor-pointer">
                        Re-evaluating Thresholds in Digital Mergers: The Indian Context
                      </h3>
                      <p className="text-charcoal/70 text-sm mb-3">
                        Published in Competition Law Review • Vol 4, Issue 2
                      </p>
                      <Link to="/coming-soon" className="inline-flex items-center text-sm font-bold text-gold-600 hover:text-maroon-800 transition-colors">
                        Read Paper <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Link to="/coming-soon" className="inline-block mt-10 px-6 py-3 border border-maroon-800 text-maroon-800 font-semibold hover:bg-maroon-800 hover:text-ivory transition-colors rounded text-sm tracking-wide text-center">
              View All Publications
            </Link>
          </div>

          {/* Latest Insights */}
          <div className="bg-cream p-8 md:p-12 rounded">
            <div className="flex items-center space-x-4 mb-8">
              <div className="h-px bg-gold-600 w-8"></div>
              <span className="text-maroon-800 uppercase tracking-widest text-sm font-bold">Editorial</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-10">Latest Insights</h2>
            
            <div className="space-y-6">
              {[1, 2].map((item) => (
                <Link to="/coming-soon" key={item} className="block bg-ivory p-6 rounded shadow-sm border border-transparent hover:border-gold-500/30 hover:shadow-md transition-all group">
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-600 mb-2 block">Case Comment • Oct 12, 2026</span>
                  <h3 className="font-serif text-lg font-semibold text-charcoal group-hover:text-maroon-800 transition-colors mb-3">
                    Analyzing the CCI's recent ruling on app store billing policies and market dominance.
                  </h3>
                  <span className="text-sm text-charcoal/60 flex items-center">
                    <User className="w-3 h-3 mr-1" /> By CCAL Research Team
                  </span>
                </Link>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* Events */}
      <section id="events" className="py-20 md:py-28 bg-maroon-900 text-ivory px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500 opacity-5 rounded-full blur-[80px]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="h-px bg-gold-600 w-8"></div>
                <span className="text-gold-500 uppercase tracking-widest text-sm font-bold">Calendar</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl">Upcoming Events</h2>
            </div>
            <Link to="/coming-soon" className="hidden md:inline-flex mt-6 md:mt-0 px-6 py-3 border border-gold-600 text-gold-500 font-semibold hover:bg-gold-600 hover:text-maroon-900 transition-colors rounded text-sm tracking-wide">
              View Event Archive
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { type: 'Conference', title: 'Annual Summit on Digital Markets & Antitrust', date: 'Nov 15-16, 2026' },
              { type: 'Guest Lecture', title: 'Intersection of IP and Competition Law', date: 'Oct 28, 2026' },
              { type: 'Workshop', title: 'Merger Control Thresholds: Practical Challenges', date: 'Oct 05, 2026' }
            ].map((event, index) => (
              <div key={index} className="bg-maroon-800 p-8 rounded border border-gold-600/20 hover:border-gold-500/60 transition-colors group">
                <span className="inline-block px-3 py-1 bg-maroon-900 text-gold-500 text-xs font-bold uppercase tracking-wider rounded mb-6">
                  {event.type}
                </span>
                <h3 className="font-serif text-xl font-semibold mb-6 group-hover:text-gold-500 transition-colors">
                  {event.title}
                </h3>
                <div className="flex items-center text-ivory/70 text-sm mb-6">
                  <Calendar className="w-4 h-4 mr-2 text-gold-600" />
                  {event.date}
                </div>
                <Link to="/coming-soon" className="inline-flex items-center text-sm font-bold text-gold-500 hover:text-ivory transition-colors">
                  Details & Registration <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
          
          <Link to="/coming-soon" className="md:hidden mt-10 w-full px-6 py-3 border border-gold-600 text-gold-500 font-semibold hover:bg-gold-600 hover:text-maroon-900 transition-colors rounded text-sm tracking-wide block text-center">
            View Event Archive
          </Link>
        </div>
      </section>
      
      {/* People */}
      <section id="people" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="h-px bg-gold-600 w-8"></div>
            <span className="text-maroon-800 uppercase tracking-widest text-sm font-bold">Leadership & Teams</span>
            <div className="h-px bg-gold-600 w-8"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal">Our People</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {['Faculty', 'Advisors', 'Research Team', 'Student Team'].map((category) => (
            <div key={category} className="bg-cream p-8 rounded text-center hover:shadow-md transition-shadow">
               <div className="w-16 h-16 mx-auto bg-maroon-900 text-gold-500 rounded-full flex items-center justify-center mb-6">
                 <User className="w-8 h-8" />
               </div>
               <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">{category}</h3>
               <p className="text-charcoal/60 text-sm mb-6">Meet the dedicated individuals driving our research and initiatives.</p>
               <Link to="/coming-soon" className="inline-block text-maroon-800 font-bold text-sm hover:text-gold-600 transition-colors">
                 View Profiles &rarr;
               </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Initiatives & Collaboration */}
      <section id="initiatives" className="py-20 md:py-28 bg-cream border-t border-maroon-900/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <div className="h-px bg-gold-600 w-8"></div>
              <span className="text-maroon-800 uppercase tracking-widest text-sm font-bold">Engagement</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">Key Initiatives</h2>
            <p className="text-charcoal/70 text-lg mb-8 leading-relaxed">
              CCAL actively conducts academic courses, outreach programs, and student-led initiatives designed to foster a deeper understanding of market regulation among the next generation of lawyers and policymakers.
            </p>
            <ul className="space-y-4">
              {[
                'Certificate Courses on Competition Law',
                'National Antitrust Moot Court Competitions',
                'Essay Writing & Call for Papers',
                'Student Discussion Forums & Policy Roundtables'
              ].map((item, idx) => (
                <li key={idx}>
                  <Link to="/coming-soon" className="flex items-start group hover:bg-gold-500/5 p-2 -ml-2 rounded transition-colors">
                    <div className="mt-1 bg-gold-500/20 group-hover:bg-gold-500/40 p-1 rounded-full mr-3 transition-colors">
                      <ChevronRight className="w-4 h-4 text-maroon-800" />
                    </div>
                    <span className="text-charcoal font-medium group-hover:text-maroon-800 transition-colors">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div id="contact" className="bg-maroon-900 p-10 md:p-12 rounded text-ivory shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500 opacity-10 rounded-bl-full"></div>
            <h2 className="font-serif text-3xl text-gold-500 mb-6">Collaborate With Us</h2>
            <p className="text-ivory/80 mb-8 leading-relaxed">
              We welcome partnerships with academics, practitioners, researchers, and institutions globally to advance competition law scholarship.
            </p>
            <div className="space-y-4 mb-10 text-sm">
              <p><strong className="text-gold-500 font-serif">Email:</strong> ccal@dsnlu.ac.in</p>
              <p><strong className="text-gold-500 font-serif">Location:</strong> DSNLU Campus, Visakhapatnam, Andhra Pradesh, India</p>
            </div>
            <Link to="/coming-soon" className="block w-full py-4 bg-gold-600 hover:bg-gold-500 text-maroon-900 font-bold rounded transition-colors text-center">
              Send a Message
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

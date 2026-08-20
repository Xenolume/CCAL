import React from 'react';
import { Scale, BookText, Globe2, TrendingUp, Users, Shield, Lightbulb, Landmark, Target, Eye, PenTool, Share2, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const researchAreas = [
  { title: "Competition Law", icon: Scale, description: "Foundational and advanced aspects of Indian and global competition law regimes." },
  { title: "Antitrust & Enforcement", icon: Shield, description: "Examining enforcement actions, compliance frameworks, and regulatory strategies." },
  { title: "Merger Control", icon: TrendingUp, description: "Analysis of M&A regulatory frameworks, thresholds, and market impact assessments." },
  { title: "Abuse of Dominance", icon: Landmark, description: "Investigating monopolistic practices, pricing strategies, and market power abuse." },
  { title: "Cartels", icon: Users, description: "Studying anti-competitive agreements, leniency programs, and cartel detection." },
  { title: "Digital Markets", icon: Globe2, description: "Emerging challenges in platform economics, data dominance, and tech regulation." },
  { title: "Competition Policy", icon: Lightbulb, description: "Interface between competition policy, IP rights, consumer protection, and economic growth." },
  { title: "International Competition Law", icon: BookText, description: "Comparative studies of major antitrust jurisdictions and international cooperation." }
];

export default function Sections() {
  return (
    <div className="bg-ivory">
      
      {/* About Section */}
      <section id="about" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] bg-maroon-800 rounded shadow-xl relative overflow-hidden">
               <div className="absolute inset-0 border-4 border-gold-600/30 m-4 rounded"></div>
               <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                 <h3 className="font-serif text-3xl md:text-4xl text-gold-500 leading-tight">Excellence in <br/>Legal Scholarship</h3>
               </div>
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cream -z-10 rounded"></div>
          </div>
          
          <div className="lg:col-span-7 lg:pl-10">
            <div className="flex items-center space-x-4 mb-4">
              <div className="h-px bg-gold-600 w-12"></div>
              <span className="text-maroon-800 uppercase tracking-widest text-sm font-bold">About CCAL</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-8 leading-tight">
              A premier institution dedicated to <span className="text-maroon-800 italic">antitrust scholarship</span> and policy.
            </h2>
            <div className="space-y-6 text-charcoal/80 text-lg leading-relaxed">
              <p>
                The Centre for Competition and Antitrust Laws (CCAL) at Damodaram Sanjivayya National Law University (DSNLU), Visakhapatnam, established in 2025, is dedicated to deepening academic and policy engagement with competition law, antitrust regulation, and the broader question of market fairness.
              </p>
              <p>
                The Centre serves as a platform for students, academicians, and practitioners to critically examine the evolving intersection of law, markets, technology, and trade through research, dialogue, and action-oriented scholarship.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-16">
          <div className="bg-cream p-8 md:p-10 rounded shadow-sm border border-maroon-900/5">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-gold-600 mr-4" />
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal">Our Objectives</h3>
            </div>
            <p className="text-charcoal/80 leading-relaxed text-base">
              Our primary objective is to promote high-quality legal scholarship and critical thinking on contemporary issues in competition and antitrust law, including cartels, abuse of dominance, merger control, and the regulation of digital markets. We achieve this by fostering doctrinal and policy-oriented research, organising academic initiatives such as writing competitions, seminars, and collaborative programs, and creating platforms that connect emerging voices in legal academia with practitioners in the field. The Centre also aims to build a pipeline of talented young researchers and writers equipped to engage meaningfully with this dynamic and evolving domain of law.
            </p>
          </div>
          <div className="bg-maroon-900 p-8 md:p-10 rounded shadow-sm text-ivory relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500 opacity-10 rounded-bl-full"></div>
            <div className="flex items-center mb-6 relative z-10">
              <Eye className="w-8 h-8 text-gold-500 mr-4" />
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-gold-500">Our Vision</h3>
            </div>
            <p className="text-ivory/80 leading-relaxed text-base relative z-10">
              Our vision is to create a space where doctrinal rigour meets policy relevance, empowering students and young scholars to explore, research, and produce work that shapes thought and practice in competition law and antitrust regulation. Under the guidance of Deepthi Ma’am along with the active participation of all its members, the Centre contributes to the growing field of competition law scholarship in India and promotes legal education that is responsive to the realities of modern markets. Through its research, competitions, and outreach, CCAL aims to make competition law a tool for fostering fair markets, informed policy, and lasting legal thought leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Structure Section */}
      <section id="structure" className="py-20 md:py-28 bg-ivory border-t border-maroon-900/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="h-px bg-gold-600 w-8"></div>
              <span className="text-maroon-800 uppercase tracking-widest text-sm font-bold">Organization</span>
              <div className="h-px bg-gold-600 w-8"></div>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">Our Structure</h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto text-lg">
              CCAL functions through three wings, each focusing on a specific area of contribution and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/coming-soon" className="block bg-cream p-8 rounded hover:shadow-md transition-shadow border border-maroon-900/5 group">
              <div className="w-14 h-14 bg-maroon-900 text-gold-500 rounded flex items-center justify-center mb-6 group-hover:bg-gold-600 group-hover:text-maroon-900 transition-colors">
                <PenTool className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-4">Research &amp; Publication Wing</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                Dedicated to producing quality scholarship on competition law and antitrust regulation through research projects, case notes, policy briefs, and editorial activities. Oversees the Centre's Blog and its academic publications, including the Article Writing Competition.
              </p>
            </Link>
            
            <Link to="/coming-soon" className="block bg-cream p-8 rounded hover:shadow-md transition-shadow border border-maroon-900/5 group">
              <div className="w-14 h-14 bg-maroon-900 text-gold-500 rounded flex items-center justify-center mb-6 group-hover:bg-gold-600 group-hover:text-maroon-900 transition-colors">
                <Share2 className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-4">Social Media &amp; Marketing Wing</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                Handles the Centre's online presence across Instagram, LinkedIn, Twitter, and Facebook. Designs promotional content and markets CCAL's events, competitions, and publications to reach a wider student, academic, and professional audience.
              </p>
            </Link>

            <Link to="/coming-soon" className="block bg-cream p-8 rounded hover:shadow-md transition-shadow border border-maroon-900/5 group">
              <div className="w-14 h-14 bg-maroon-900 text-gold-500 rounded flex items-center justify-center mb-6 group-hover:bg-gold-600 group-hover:text-maroon-900 transition-colors">
                <Handshake className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-4">Events &amp; Corporate Relations Wing</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                Oversees external communication, manages correspondence with sponsoring firms, regulators, and industry experts, and leads outreach and partnership initiatives. Conceptualizes and organizes workshops, seminars, and conferences on competition and antitrust law.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section id="research" className="py-20 md:py-28 bg-cream px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="h-px bg-gold-600 w-8"></div>
              <span className="text-maroon-800 uppercase tracking-widest text-sm font-bold">Focus</span>
              <div className="h-px bg-gold-600 w-8"></div>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">Research Areas</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {researchAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Link to="/coming-soon" key={index} className="block bg-ivory p-8 rounded shadow-sm border border-maroon-900/5 hover:border-gold-500/50 hover:shadow-md transition-all duration-300 group">
                  <div className="w-12 h-12 rounded bg-maroon-900/5 flex items-center justify-center mb-6 group-hover:bg-maroon-900 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-maroon-800 group-hover:text-gold-500 transition-colors duration-300" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-charcoal mb-3 group-hover:text-maroon-800 transition-colors">{area.title}</h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

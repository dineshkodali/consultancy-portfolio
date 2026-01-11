
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ShareButton from './ShareButton';
import { Mail, Globe, Shield, Users, Briefcase, Menu, X } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Client Project', path: '/client-project' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-[#0a192f] rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
                <span className="text-white font-black text-xl">CR</span>
              </div>
              <div>
                <span className="text-lg font-bold text-slate-900 block leading-none">CR Consultancy</span>
                <span className="text-[10px] text-blue-600 font-bold uppercase tracking-widest">ITSM & Transformation</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-xs font-bold uppercase tracking-wider transition-all px-2 py-1 ${
                    location.pathname === item.path
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-slate-500 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="h-6 w-px bg-slate-200 mx-2"></div>
              <ShareButton className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors" />
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Nav */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-slate-100 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm font-bold text-slate-600 px-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-[#0a192f] text-slate-400 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CR</span>
                </div>
                <span className="text-white font-bold text-lg">CR Consultancy</span>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Highest levels of ethics and research-based IT consulting practices focusing on service quality and governance.
              </p>
              <div className="flex items-center space-x-3 text-white">
                <Mail className="w-4 h-4 text-blue-500" />
                <a href="mailto:rd25abb@herts.ac.uk" className="text-sm hover:text-blue-400 transition-colors underline decoration-blue-500/30">rd25abb@herts.ac.uk</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h4>
              <ul className="space-y-4 text-sm">
                <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
                <li><Link to="/client-project" className="hover:text-white transition-colors">ITIL Transformation</Link></li>
                <li><Link to="/sustainability" className="hover:text-white transition-colors">Sustainability & Ethics</Link></li>
                <li><Link to="/portfolio" className="hover:text-white transition-colors">Research Logs</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Core Principles</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center"><Shield className="w-4 h-4 mr-3 text-blue-500" /> Ethical Practice</li>
                <li className="flex items-center"><Globe className="w-4 h-4 mr-3 text-blue-500" /> Sustainability (TBL)</li>
                <li className="flex items-center"><Users className="w-4 h-4 mr-3 text-blue-500" /> Diversity & Inclusion</li>
              </ul>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h4 className="text-white font-bold mb-4 text-sm">Professional Enquiry</h4>
              <p className="text-xs mb-4 text-slate-400">Partner with us for effective, person-focused IT solutions.</p>
              <Link to="/contact" className="block w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold text-center transition-colors">
                Get in Touch
              </Link>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold tracking-[0.2em] text-slate-500">
             <span>© 2024 CR CONSULTANCY. ALL RIGHTS RESERVED.</span>
             <div className="flex space-x-6">
                <span>UH ETHICS COMPLIANT</span>
                <span>ITIL® V4 ALIGNED</span>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

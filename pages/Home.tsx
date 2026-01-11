
import * as React from 'react';
import {
  ShieldCheck,
  RefreshCw,
  ArrowRight,
  CheckCircle,
  Users,
  Target,
  BarChart3,
  Search,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative py-32 bg-[#0a192f] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500 rounded-full mix-blend-screen filter blur-[150px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-500 rounded-full mix-blend-screen filter blur-[150px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 text-center lg:text-left grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Bridging Theory and Practice</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight tracking-tight">
              CR Consultancy <br />
              <span className="text-blue-400 text-3xl md:text-5xl block mt-2">IT Service Management & Transformation</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
              We operate with the highest levels of ethics and research-based IT consulting practices that help our clients enhance service quality, governance, and the efficiency of business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/client-project" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all flex items-center justify-center space-x-2 shadow-xl shadow-blue-600/20">
                <span>View Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="px-8 py-4 bg-white/5 text-white font-bold rounded-xl border border-slate-700 hover:bg-slate-800 transition-all text-center">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Description Section */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-4xl font-black text-slate-900 leading-tight">Expertise in Transformation</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Our expertise lies in IT Service Management (ITSM), business analysis, and ITIL transformation activities that focus on the alignment of technology services with the demands of the business.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The kind of consultancy we do is based on professional ethics, sound data management, and inclusive decision-making, with a clear emphasis on sustainability.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-blue-600 w-5 h-5" />
                <span className="font-bold text-slate-800">Professional Ethics</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-blue-600 w-5 h-5" />
                <span className="font-bold text-slate-800">Data Management</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-blue-600 w-5 h-5" />
                <span className="font-bold text-slate-800">Inclusive Decisions</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-blue-600 w-5 h-5" />
                <span className="font-bold text-slate-800">Sustainability Focused</span>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-12 rounded-xl border border-slate-100 relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/5 rounded-full group-hover:scale-110 transition-transform"></div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">The CR Unique Feature</h3>
            <p className="text-slate-800 italic text-xl leading-relaxed relative z-10">
              "Our unique feature is our capacity to apply the best of theoretical knowledge from academia and ITIL, among other frameworks, to develop effective, person-focused solutions."
            </p>
            <p className="mt-8 text-slate-600 leading-relaxed">
              We partner our clients to develop clearer, more practical, and empirical solutions that drive improvement in services and business.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are & How We Do It */}
      <section className="bg-slate-50 py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <h2 className="text-4xl font-black text-slate-900">Who We Are</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              We are an IT Service Management consultancy that focuses on service transformation in line with <strong>ITIL best practices</strong>. We help customers enhance service quality and delivery control as a means to improve satisfaction through business-aligned services.
            </p>
            <div className="p-8 bg-white rounded-xl border border-slate-200 shadow-sm">
              <h4 className="text-sm font-black uppercase tracking-[0.2em] text-blue-600 mb-3">How we do it</h4>
              <p className="text-slate-700 leading-relaxed text-lg">
                We integrate operational frameworks, stakeholder engagement, and outcome-based delivery so ITSM efforts provide value rather than mere theoretical compliance.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: <Search className="w-8 h-8" />, title: 'Assessment', text: 'Service gap analysis and quality audits.' },
              { icon: <RefreshCw className="w-8 h-8" />, title: 'Implementation', text: 'Service Support and Delivery rollout.' },
              { icon: <ShieldCheck className="w-8 h-8" />, title: 'Governance', text: 'Operating model and roles design.' },
              { icon: <Users className="w-8 h-8" />, title: 'Engagement', text: 'Stakeholder communication and alignment.' }
            ].map((item, idx) => (
              <div key={idx} className="p-10 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-blue-600 mb-6">{item.icon}</div>
                <h4 className="font-bold text-slate-900 mb-3 text-lg">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Summary */}
      <section className="py-24 max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-16">Our Consultancy Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {[
            { title: 'Service Assessment', icon: <BarChart3 /> },
            { title: 'Process Implementation', icon: <RefreshCw /> },
            { title: 'IT Governance', icon: <Target /> },
            { icon: <Users />, title: 'Stakeholder Engagement' },
            { icon: <CheckCircle />, title: 'Continuous Improvement' },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                {item.icon}
              </div>
              <span className="text-sm font-bold text-slate-700">{item.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#0a192f] py-24 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black tracking-tight">Why Choose Us</h2>
            <p className="text-slate-400">Delivering value through excellence and integrity.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Proven Experience', text: 'With complex, multi-stakeholder IT environments.' },
              { title: 'Quality Focus', text: 'Strong emphasis on service quality and customer perception.' },
              { title: 'Practical ITIL', text: 'Implementation-focused solutions, not “paper-heavy” reports.' },
              { title: 'People-Centred', text: 'Ethical, human-focused consulting approach throughout.' }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-blue-400 font-black text-3xl mb-6 opacity-50">0{idx + 1}</div>
                <h4 className="font-bold text-xl mb-4">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

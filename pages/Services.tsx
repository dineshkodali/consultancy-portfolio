
import * as React from 'react';
import { 
  BarChart3, 
  Settings, 
  ShieldCheck, 
  Leaf, 
  Search, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Business Analysis & IT Needs Assessment',
      icon: <Search className="w-10 h-10" />,
      desc: 'We assess current IT services, processes, and stakeholder expectations to identify gaps and improvement opportunities.',
      color: 'bg-blue-500'
    },
    {
      title: 'IT Service Management (ITIL) Consulting',
      icon: <Settings className="w-10 h-10" />,
      desc: 'We support organisations in adopting ITIL-aligned processes to standardise service delivery and improve reliability.',
      color: 'bg-indigo-500'
    },
    {
      title: 'Project Scoping & Governance',
      icon: <BarChart3 className="w-10 h-10" />,
      desc: 'We define project scope, roles, responsibilities, and constraints to ensure realistic and achievable IT initiatives.',
      color: 'bg-cyan-500'
    },
    {
      title: 'Risk, Ethics & Compliance Advisory',
      icon: <ShieldCheck className="w-10 h-10" />,
      desc: 'We identify operational, ethical, and governance risks and ensure responsible handling of data and people.',
      color: 'bg-slate-700'
    },
    {
      title: 'Sustainability & Continuous Improvement',
      icon: <Leaf className="w-10 h-10" />,
      desc: 'We integrate sustainability and continuous improvement into IT operations using frameworks such as the Triple Bottom Line.',
      color: 'bg-emerald-500'
    }
  ];

  return (
    <div className="pb-32">
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">Our Services</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Professional IT offerings tailored to organizational maturity and business demands, delivered with technical precision and ethical integrity.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="group relative bg-white p-12 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all overflow-hidden">
              <div className={`absolute top-0 right-0 w-32 h-32 ${s.color} opacity-5 rounded-bl-[100px] transition-transform group-hover:scale-110`}></div>
              <div className="text-blue-600 mb-8">{s.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight leading-snug">{s.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-8">{s.desc}</p>
              <div className="flex items-center text-blue-600 font-bold text-xs uppercase tracking-widest">
                <span>Core Offering</span>
                <CheckCircle2 className="ml-2 w-4 h-4" />
              </div>
            </div>
          ))}
          
          <div className="bg-[#0a192f] p-12 rounded-[40px] text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ready for Transformation?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Contact us today to discuss your specific ITSM requirements and how we can bridge the gap between theory and excellence.
              </p>
            </div>
            <Link to="/contact" className="mt-8 inline-flex items-center justify-center px-6 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-all">
              <span>Contact Professional Enquiry</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

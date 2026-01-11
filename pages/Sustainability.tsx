
import * as React from 'react';
import { Shield, Globe, Users, Heart, Leaf, Scale } from 'lucide-react';

const Sustainability: React.FC = () => {
  return (
    <div className="pb-32">
      <header className="bg-slate-900 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_120%,#3b82f6,transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 text-[10px] font-black tracking-widest uppercase rounded-full mb-6 border border-emerald-500/30">
            Social Responsibility
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8">Sustainability, Ethics <br/> & Diversity</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Integrating responsible practices into every facet of our IT Service Management transformations.
          </p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-8 p-10 bg-white rounded-[40px] border border-slate-100 shadow-sm text-center">
          <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto">
            <Shield className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Ethical Practice</h2>
          <p className="text-slate-600 leading-relaxed">
            Operating with transparent governance and consultant neutrality. We strictly adhere to the University of Hertfordshire Ethics Protocol in all client engagements and research activities.
          </p>
          <div className="pt-6 border-t border-slate-50">
             <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Neutrality & Integrity</span>
          </div>
        </div>

        <div className="space-y-8 p-10 bg-white rounded-[40px] border border-slate-100 shadow-sm text-center">
          <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto">
            <Globe className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Sustainability</h2>
          <p className="text-slate-600 leading-relaxed">
            Applying the Triple Bottom Line (TBL) framework—People, Planet, Profit—to ensure IT operations are environmentally sound, socially equitable, and economically viable over the long term.
          </p>
          <div className="pt-6 border-t border-slate-50">
             <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Triple Bottom Line</span>
          </div>
        </div>

        <div className="space-y-8 p-10 bg-white rounded-[40px] border border-slate-100 shadow-sm text-center">
          <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-3xl flex items-center justify-center mx-auto">
            <Users className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Diversity & Inclusion</h2>
          <p className="text-slate-600 leading-relaxed">
            Fostering inclusive decision-making that values diverse perspectives from all levels of the organization. Ensuring technology solutions empower all users regardless of background.
          </p>
          <div className="pt-6 border-t border-slate-50">
             <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Inclusive Governance</span>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-24">
        <div className="bg-[#0a192f] rounded-[48px] p-12 lg:p-20 text-white grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Our Commitment</h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              At CR Consultancy, we believe that effective IT Service Management is inherently ethical. By prioritizing people and the environment, we create more resilient and valuable business outcomes.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Heart className="text-rose-500 w-5 h-5" />
                <span className="text-sm font-bold">Empowerment of workforce</span>
              </li>
              <li className="flex items-center space-x-3">
                <Leaf className="text-emerald-500 w-5 h-5" />
                <span className="text-sm font-bold">Reduction of digital carbon footprint</span>
              </li>
              <li className="flex items-center space-x-3">
                <Scale className="text-blue-500 w-5 h-5" />
                <span className="text-sm font-bold">Transparent reporting & auditing</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-square bg-blue-600/20 rounded-full flex items-center justify-center p-12 animate-pulse">
               <div className="w-full h-full bg-blue-600/40 rounded-full flex items-center justify-center">
                  <Globe className="w-24 h-24 text-white" />
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;

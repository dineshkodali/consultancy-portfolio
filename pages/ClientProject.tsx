
import * as React from 'react';
import { RISKS, RACI_DATA } from '../constants';
import { 
  AlertTriangle, 
  CheckCircle2, 
  Target, 
  Briefcase,
  Activity,
  ArrowRight,
  ClipboardCheck,
  Zap,
  ShieldAlert,
  BarChart3,
  MessageSquare,
  Search
} from 'lucide-react';

const ClientProject: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 space-y-32">
      {/* Intro Header */}
      <section className="text-center space-y-6 max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1.5 text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase bg-blue-50 rounded-full">
          Main Assessment: Case Study Analysis
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-none">
          ITIL as an Agent <br className="hidden md:block"/> for Change
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          IT Service Management Transformation: A comprehensive analysis of standardisation and governance in complex industrial environments.
        </p>
      </section>

      {/* Client Profiles & Needs Analysis */}
      <section className="space-y-16">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-px bg-slate-200"></div>
          <h2 className="text-sm font-black uppercase tracking-widest text-slate-400">01. Needs Analysis</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-slate-900 rounded-[40px] p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
               <Briefcase className="w-32 h-32" />
            </div>
            <h2 className="text-3xl font-bold mb-8">Client Profiles</h2>
            <div className="space-y-12">
               <div className="border-l-4 border-blue-500 pl-6 py-2 bg-white/5 rounded-r-2xl">
                  <h4 className="text-blue-400 font-bold text-lg mb-2">Case-1: Multinational Chemical Org</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                     Consolidation of fragmented IT units into a central IS division. Faced internal competition from external IT providers and critical breakdown in trust.
                  </p>
               </div>
               <div className="border-l-4 border-emerald-500 pl-6 py-2 bg-white/5 rounded-r-2xl">
                  <h4 className="text-emerald-400 font-bold text-lg mb-2">Case-2: Regional Electricity Utility</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                     Transitioning into a commercial entity. High pressure to improve IT service reliability to maintain essential public service operations and avoid outsourcing.
                  </p>
               </div>
            </div>
          </div>

          <div className="space-y-8 py-4">
             <h3 className="text-2xl font-bold text-slate-900">Identified Client Needs</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Standardised IT service management practices',
                  'Improved service quality and availability',
                  'Clear roles, responsibilities, and ownership',
                  'Improved stakeholder communication',
                  'Alignment of IT with business expectations',
                  'Restoration of trust and credibility'
                ].map((need, i) => (
                  <div key={i} className="flex items-start space-x-3 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-blue-200 transition-colors">
                     <CheckCircle2 className="text-blue-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                     <span className="text-sm font-bold text-slate-700 leading-snug">{need}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Scope & Ethics */}
      <section className="space-y-16">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-px bg-slate-200"></div>
          <h2 className="text-sm font-black uppercase tracking-widest text-slate-400">02. Scope & Ethics</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-12">
             <div className="bg-slate-50 p-12 rounded-[40px] border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-10 flex items-center space-x-3">
                   <ClipboardCheck className="text-blue-600" />
                   <span>Project Scope Definition</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="space-y-6">
                      <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded">In Scope</div>
                      <ul className="space-y-4 text-sm font-bold text-slate-700">
                         <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-3 mt-1 text-blue-600 flex-shrink-0" /> Implementation of ITIL Service Support</li>
                         <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-3 mt-1 text-blue-600 flex-shrink-0" /> Standardisation of ITSM practices</li>
                         <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-3 mt-1 text-blue-600 flex-shrink-0" /> Language & governance development</li>
                         <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-3 mt-1 text-blue-600 flex-shrink-0" /> Stakeholder engagement & training</li>
                         <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-3 mt-1 text-blue-600 flex-shrink-0" /> Service performance measurement</li>
                      </ul>
                   </div>
                   <div className="space-y-6">
                      <div className="inline-block px-3 py-1 bg-slate-200 text-slate-500 text-[10px] font-black uppercase tracking-widest rounded">Out of Scope</div>
                      <ul className="space-y-4 text-sm text-slate-500 italic">
                         <li className="flex items-start"><Zap className="w-4 h-4 mr-3 mt-1 text-slate-300 flex-shrink-0" /> Core infrastructure replacement</li>
                         <li className="flex items-start"><Zap className="w-4 h-4 mr-3 mt-1 text-slate-300 flex-shrink-0" /> Full automation of ITSM tools</li>
                         <li className="flex items-start"><Zap className="w-4 h-4 mr-3 mt-1 text-slate-300 flex-shrink-0" /> Major non-IT business redesign</li>
                      </ul>
                   </div>
                </div>
             </div>
          </div>

          <div className="lg:col-span-4 bg-white border border-slate-100 p-10 rounded-[40px] shadow-sm">
             <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center space-x-2">
               <ShieldAlert className="text-blue-600" />
               <span>Ethics Protocol</span>
             </h3>
             <div className="space-y-5">
                {[
                  'Voluntary staff participation',
                  'Confidential handling of internal data',
                  'Transparent communication',
                  'Fair treatment during organisational change',
                  'Consultant neutrality and integrity'
                ].map((item, i) => (
                  <div key={i} className="text-sm text-slate-600 flex items-center space-x-3 p-3 bg-slate-50 rounded-xl">
                     <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                     <span className="font-medium">{item}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Plan & RACI */}
      <section className="space-y-16">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-px bg-slate-200"></div>
          <h2 className="text-sm font-black uppercase tracking-widest text-slate-400">03. Project Controls</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-blue-600 p-12 rounded-[40px] text-white">
             <h3 className="text-2xl font-bold mb-8 flex items-center space-x-3">
               <BarChart3 className="w-6 h-6" />
               <span>Phase-Based Plan</span>
             </h3>
             <div className="space-y-8 relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-white/20"></div>
                {[
                  { t: 'Initiation & Assessment', d: 'Gap analysis and requirements' },
                  { t: 'Planning & Design', d: 'ITIL process architecture' },
                  { t: 'Implementation', d: 'Pilot runs and staff training' },
                  { t: 'Monitoring & Control', d: 'KPI tracking and adjustments' },
                  { t: 'Closure & CSI', d: 'Handover and improvement loop' }
                ].map((step, i) => (
                  <div key={i} className="relative pl-12">
                     <div className="absolute left-0 w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold text-xs shadow-lg">
                        {i+1}
                     </div>
                     <h4 className="font-bold text-sm mb-1">{step.t}</h4>
                     <p className="text-[10px] text-blue-100 font-medium">{step.d}</p>
                  </div>
                ))}
             </div>
          </div>

          <div className="bg-white p-10 border border-slate-100 rounded-[40px] shadow-sm">
             <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center space-x-2">
               <Target className="w-6 h-6 text-blue-600" />
               <span>RACI Model</span>
             </h3>
             <div className="space-y-3">
                {RACI_DATA.map((row, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                     <div>
                       <div className="text-xs font-black text-slate-900 uppercase">{row.role}</div>
                       <div className="text-[10px] text-slate-500 font-medium">{row.name}</div>
                     </div>
                     <div className="flex items-center space-x-1">
                        <span className="px-3 py-1 bg-blue-600 text-white rounded font-black text-[10px]">{row.raci}</span>
                     </div>
                  </div>
                ))}
             </div>
          </div>

          <div className="bg-[#0a192f] p-12 rounded-[40px] text-white space-y-8">
             <h3 className="text-xl font-bold flex items-center space-x-3">
               <MessageSquare className="w-6 h-6 text-blue-400" />
               <span>Communication Plan</span>
             </h3>
             <div className="space-y-6 text-sm">
                <div className="space-y-2">
                  <span className="text-blue-400 text-[10px] font-black uppercase">Weekly</span>
                  <p className="text-slate-400">Steering committee updates on progress vs milestones.</p>
                </div>
                <div className="space-y-2">
                  <span className="text-blue-400 text-[10px] font-black uppercase">Fortnightly</span>
                  <p className="text-slate-400">Stakeholder focus groups for feedback on service language.</p>
                </div>
                <div className="space-y-2">
                  <span className="text-blue-400 text-[10px] font-black uppercase">On-Demand</span>
                  <p className="text-slate-400">Ad-hoc operational alignment meetings with IS teams.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Success & Reflection */}
      <section className="bg-slate-50 rounded-[48px] p-12 lg:p-20 border border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
           <div className="space-y-12">
              <h2 className="text-4xl font-black text-slate-900 leading-tight">Project Success Criteria</h2>
              <div className="grid grid-cols-1 gap-4">
                 {[
                   'Consistent ITIL process adoption',
                   'Improved service availability and reliability',
                   'Clear governance and accountability',
                   'Improved user satisfaction',
                   'Ethical and transparent change management',
                   'Foundation for Service Level Agreements'
                 ].map((item, i) => (
                   <div key={i} className="flex items-center space-x-4 p-4 bg-white rounded-2xl border border-slate-100">
                      <CheckCircle2 className="text-blue-600 w-6 h-6 flex-shrink-0" />
                      <span className="text-sm font-bold text-slate-700">{item}</span>
                   </div>
                 ))}
              </div>
           </div>
           <div className="space-y-8">
              <h2 className="text-4xl font-black text-slate-900 leading-tight">Project Reflection</h2>
              <div className="p-10 bg-white rounded-[40px] border border-slate-200 space-y-6 italic text-slate-700 leading-relaxed text-lg shadow-sm relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Activity className="w-24 h-24" />
                 </div>
                 <p className="relative z-10">
                    "These case studies demonstrate that ITIL success depends on how it is implemented rather than the framework itself. Case-1 highlights the importance of culture, collaboration, and incremental improvement."
                 </p>
                 <p className="relative z-10">
                    "Case-2 shows the need for strong governance, leadership, and customer focus in mission-critical environments. The project reinforced the importance of ethics and aligning IT improvements with business outcomes rather than documentation alone."
                 </p>
              </div>
              <div className="flex items-center justify-end space-x-3 text-xs font-black text-blue-600 uppercase tracking-[0.2em]">
                 <Search className="w-4 h-4" />
                 <span>Empirical Results Summary</span>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default ClientProject;

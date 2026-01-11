
import * as React from 'react';
import { RESEARCH_LOGS, PESTLE_DATA } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { BookOpen, Target, Activity, GraduationCap } from 'lucide-react';

const Portfolio: React.FC = () => {
  const understandingData = RESEARCH_LOGS.map(log => ({
    name: `U${log.unit}`,
    value: 85 + Math.random() * 10,
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 space-y-24">
      <header className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full">
           <GraduationCap className="w-4 h-4" />
           <span className="text-[10px] font-black uppercase tracking-widest">Research & Investigation Portfolio</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">
          Evidence-Based <br/> Consultancy Practice
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          A documented journey through Semester A (Units 1-7), bridging core management theories with professional consultancy application.
        </p>
      </header>

      {/* Analytics & Summary Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Concept Mastery Index</h2>
              <p className="text-sm text-slate-500">Theoretical application score across Units 1-7</p>
            </div>
          </div>
          <div className="h-80 w-full flex-grow">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={understandingData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 700}} 
                  dy={10}
                />
                <YAxis hide />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}} 
                  contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)'}} 
                />
                <Bar dataKey="value" radius={[6, 6, 6, 6]} barSize={40}>
                  {understandingData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#4f46e5' : '#818cf8'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="lg:col-span-4 bg-indigo-600 p-12 rounded-[40px] text-white flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform">
             <Activity className="w-32 h-32" />
          </div>
          <Target className="w-12 h-12 mb-8 text-indigo-300 relative z-10" />
          <h3 className="text-3xl font-bold mb-6 relative z-10">Integrative Thinking</h3>
          <p className="text-indigo-100 mb-10 leading-relaxed text-sm relative z-10">
            This visual representation tracks the integration of Semester A learnings into our final client transformation strategies for industrial environments.
          </p>
          <div className="space-y-6 relative z-10">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-black uppercase tracking-[0.2em]">
                <span>Theory to Practice</span>
                <span>94%</span>
              </div>
              <div className="w-full bg-white/20 h-1.5 rounded-full">
                <div className="bg-white h-full rounded-full" style={{width: '94%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Macro-Environmental Investigation */}
      <section className="bg-slate-950 p-12 lg:p-20 rounded-[56px] overflow-hidden relative shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]"></div>
        <div className="relative z-10 text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold text-white">Macro-Environmental Investigation (PESTLE)</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Analysis conducted in Unit 2 to support project decisions for GreenPath Retailers.</p>
        </div>
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {PESTLE_DATA.map((item, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-blue-500 transition-all hover:-translate-y-1">
              <div className="text-blue-400 font-black text-2xl mb-4">{item.factor[0]}</div>
              <div className="text-white font-bold text-sm mb-3 tracking-tight">{item.factor}</div>
              <p className="text-slate-400 text-[10px] leading-relaxed font-medium">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Weekly Logs Grid */}
      <div className="space-y-12">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-px bg-slate-200"></div>
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-slate-400">Weekly Research Logs</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESEARCH_LOGS.map((log) => (
            <div key={log.unit} className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                    <BookOpen className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Unit {log.unit} Entry</div>
                    <h3 className="font-bold text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">{log.title}</h3>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest block">Theoretical Link</span>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium italic">"{log.theory}"</p>
                  </div>
                  <div className="p-5 bg-indigo-50/40 rounded-2xl border border-indigo-100/50">
                    <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-2 block">Practical Application</span>
                    <p className="text-xs text-slate-700 leading-relaxed font-semibold">{log.practice}</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                 <span className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Verified Research</span>
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              </div>
            </div>
          ))}

          {/* Call to Action Card */}
          <div className="bg-[#0a192f] p-10 rounded-[40px] text-white flex flex-col justify-center space-y-6">
             <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6" />
             </div>
             <h3 className="text-2xl font-bold">Bridging Theoretical Gaps</h3>
             <p className="text-slate-400 text-sm leading-relaxed">
               Our consultancy model ensures that every operational decision is backed by established management frameworks and empirical evidence.
             </p>
             <button className="text-xs font-black uppercase tracking-widest text-blue-400 hover:text-white transition-colors">
               Explore Full Bibliography →
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

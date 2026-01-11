
import * as React from 'react';
import { Mail, MapPin, Phone, Send, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pb-32">
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">Professional Enquiry</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We partner with our clients to develop practical, research-based IT solutions. Reach out to start your transformation journey.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-6">
              <h3 className="text-sm font-black uppercase tracking-widest text-blue-600">Contact Details</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase mb-1">Email</p>
                    <a href="mailto:rd25abb@herts.ac.uk" className="text-slate-900 font-bold hover:text-blue-600 transition-colors underline decoration-blue-200">rd25abb@herts.ac.uk</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase mb-1">Availability</p>
                    <p className="text-slate-900 font-bold">Mon — Fri: 09:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-[#0a192f] rounded-3xl text-white">
               <h4 className="font-bold mb-4">Consultant Integrity</h4>
               <p className="text-sm text-slate-400 leading-relaxed">
                 All enquiries are handled with strict confidentiality in line with our ethical core and UH research protocols.
               </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-white p-12 rounded-[40px] border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-10">Enquiry Form</h3>
              
              {submitted ? (
                <div className="py-20 text-center space-y-4">
                  <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Message Sent Successfully</h4>
                  <p className="text-slate-500">Thank you for your enquiry. We will respond within 48 business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase text-slate-400">Full Name</label>
                      <input required type="text" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none font-medium transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase text-slate-400">Email Address</label>
                      <input required type="email" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none font-medium transition-all" placeholder="john@company.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-400">Project Type</label>
                    <select className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none font-medium transition-all">
                      <option>ITIL Transformation</option>
                      <option>Business Analysis</option>
                      <option>Risk & Compliance</option>
                      <option>Sustainability Advisory</option>
                      <option>Other Enquiry</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-400">Message</label>
                    <textarea required rows={5} className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none font-medium transition-all resize-none" placeholder="Describe your ITSM challenges..."></textarea>
                  </div>
                  <button type="submit" className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center space-x-3">
                    <Send className="w-5 h-5" />
                    <span>Submit Enquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

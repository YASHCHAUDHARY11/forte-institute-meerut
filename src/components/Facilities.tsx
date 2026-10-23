import React from "react";
import { CAMPUS_FACILITIES } from "@/data/instituteData";
import { Monitor, Cpu, BookOpen, Presentation, Home, Trophy } from "lucide-react";

export default function Facilities() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Monitor": return <Monitor className="w-6 h-6 text-gold-500" />;
      case "Cpu": return <Cpu className="w-6 h-6 text-gold-500" />;
      case "BookOpen": return <BookOpen className="w-6 h-6 text-gold-500" />;
      case "Presentation": return <Presentation className="w-6 h-6 text-gold-500" />;
      case "Home": return <Home className="w-6 h-6 text-gold-500" />;
      case "Trophy": return <Trophy className="w-6 h-6 text-gold-500" />;
      default: return <Monitor className="w-6 h-6 text-gold-500" />;
    }
  };

  return (
    <section id="campus" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 bg-navy-100 text-navy-800 rounded-full text-xs font-bold uppercase tracking-wider">
            Campus Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 mt-3">
            Designed for Applied Learning
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Spread across lush greenery on Mawana Road, Meerut, FIT features modern infrastructure to support hands-on learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CAMPUS_FACILITIES.map((facility, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-gold-400 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-navy-900 flex items-center justify-center mb-6 shadow-md shadow-navy-900/10">
                {getIcon(facility.iconName)}
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-1">{facility.title}</h3>
              <p className="text-xs font-semibold text-gold-600 mb-3 uppercase tracking-wider">
                {facility.tagline}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">{facility.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-navy-900 rounded-2xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl font-bold">Experience the FIT Campus in Person</h3>
            <p className="text-slate-300 text-sm mt-1">
              Campus tours are conducted Monday through Saturday from 9:30 AM to 4:30 PM.
            </p>
          </div>
          <a
            href="#enquiry"
            className="shrink-0 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-6 py-3 rounded-xl transition-colors text-sm shadow-md"
          >
            Schedule a Campus Walkthrough
          </a>
        </div>
      </div>
    </section>
  );
}

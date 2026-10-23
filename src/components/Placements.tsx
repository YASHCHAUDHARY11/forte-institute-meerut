import React from "react";
import { RECRUITERS } from "@/data/instituteData";
import { TrendingUp, Award, Building, CheckCircle } from "lucide-react";

export default function Placements() {
  return (
    <section id="placements" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 bg-gold-100 text-gold-800 rounded-full text-xs font-bold uppercase tracking-wider">
            Career Progression
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 mt-3">
            Corporate Placements & Career Cell
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            FIT's Corporate Resource Cell (CRC) facilitates pre-placement grooming and recruitment with reputed corporations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
            <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-gold-100 text-gold-600 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="text-3xl font-extrabold text-navy-900">₹8.5 LPA</div>
            <div className="text-xs font-semibold text-slate-500 uppercase mt-1">Highest Package</div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
            <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-3xl font-extrabold text-navy-900">₹3.8 LPA</div>
            <div className="text-xs font-semibold text-slate-500 uppercase mt-1">Average Package</div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
            <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <Building className="w-5 h-5" />
            </div>
            <div className="text-3xl font-extrabold text-navy-900">120+</div>
            <div className="text-xs font-semibold text-slate-500 uppercase mt-1">Recruiting Partners</div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
            <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div className="text-3xl font-extrabold text-navy-900">85%+</div>
            <div className="text-xs font-semibold text-slate-500 uppercase mt-1">Placement Assistance Rate</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-navy-900 text-center mb-6">
            Key Recruiting Organizations & Industry Partners
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {RECRUITERS.map((recruiter, i) => (
              <div
                key={i}
                className="p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-gold-50/50 hover:border-gold-300 transition-colors flex flex-col items-center justify-center text-center"
              >
                <span className="font-bold text-navy-900 text-sm">{recruiter.name}</span>
                <span className="text-[11px] text-slate-500 mt-1">{recruiter.sector}</span>
                <span className="mt-2 text-[10px] px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600 font-semibold">
                  {recruiter.tier}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { ArrowRight, Download, CheckCircle2, Award, Users, Briefcase } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-900 text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold-500 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-blue-600 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800 border border-gold-500/30 text-gold-400 text-xs sm:text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-gold-400 animate-pulse" />
              Admissions Open for Academic Batch 2026–27
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight sm:leading-none text-white">
              Shaping Professional Careers at{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-amber-200">
                Forte Institute of Technology
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Approved by <span className="text-white font-medium">AICTE & NCTE</span>, Ministry of Education, affiliated with{" "}
              <span className="text-white font-medium">Dr. A.P.J. Abdul Kalam Technical University (AKTU Lucknow)</span> and{" "}
              <span className="text-white font-medium">Ch. Charan Singh University (CCSU Meerut)</span>. Delivering quality technical & managerial education since 1998.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#programs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-7 py-3.5 rounded-lg shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 transition-all text-sm md:text-base"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#enquiry"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-navy-800 hover:bg-navy-700 text-slate-100 font-semibold px-7 py-3.5 rounded-lg border border-slate-700 hover:border-slate-500 transition-all text-sm md:text-base"
              >
                <Download className="w-4 h-4 text-gold-400" />
                <span>Download Brochure</span>
              </a>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold-400" /> State-of-the-Art Labs
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold-400" /> Pre-Placement Mentorship
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold-400" /> Ragging-Free Campus
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-navy-800 to-navy-900 p-6 sm:p-8 rounded-2xl border border-navy-700/80 shadow-2xl relative">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-gold-500 text-navy-900 text-xs font-bold px-3 py-1 rounded shadow">
                ESTD 1998
              </div>

              <h3 className="text-xl font-bold text-white mb-2">Institutional Pillars</h3>
              <p className="text-sm text-slate-300 mb-6">
                Over two and a half decades of academic leadership in NCR-West Uttar Pradesh.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-navy-700/40 border border-navy-700">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">25+ Years of Pedagogy</h4>
                    <p className="text-slate-400 text-xs">Pioneering professional courses in Meerut region.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-navy-700/40 border border-navy-700">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">10,000+ Alumni Network</h4>
                    <p className="text-slate-400 text-xs">Graduates serving in leading MNCs across India & abroad.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-navy-700/40 border border-navy-700">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Active Placement Cell</h4>
                    <p className="text-slate-400 text-xs">On-campus drives with IT, BFSI, and core management firms.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-navy-700 text-center">
                <a
                  href="#contact"
                  className="text-xs text-gold-400 hover:text-gold-300 font-medium inline-flex items-center gap-1"
                >
                  Visit Campus at Mawana Road, Meerut →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

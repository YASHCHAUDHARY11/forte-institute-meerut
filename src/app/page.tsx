import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Facilities from "@/components/Facilities";
import Placements from "@/components/Placements";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Hero />
      <section id="about" className="py-12 bg-navy-800 text-white border-y border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="border-b md:border-b-0 md:border-r border-navy-700 pb-6 md:pb-0 md:pr-6">
            <h4 className="text-gold-400 font-bold text-sm tracking-wider uppercase mb-1">
              Affiliations & Accreditations
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Approved by AICTE and NCTE, affiliated with AKTU Lucknow and CCSU Meerut.
            </p>
          </div>
          <div className="border-b md:border-b-0 md:border-r border-navy-700 pb-6 md:pb-0 md:pr-6">
            <h4 className="text-gold-400 font-bold text-sm tracking-wider uppercase mb-1">
              Strategic Location
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Situated on Mawana Road, Meerut, connecting effortlessly to Delhi-NCR and the RRTS corridor.
            </p>
          </div>
          <div>
            <h4 className="text-gold-400 font-bold text-sm tracking-wider uppercase mb-1">
              Holistic Pedagogy
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Combines university curriculum with industry-relevant full-stack and personality workshops.
            </p>
          </div>
        </div>
      </section>
      <Programs />
      <Facilities />
      <Placements />
      <EnquiryForm />
      <Footer />
    </main>
  );
}

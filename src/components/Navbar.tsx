"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, Award, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Programs & Fees", href: "#programs" },
    { name: "Campus & Labs", href: "#campus" },
    { name: "Placements", href: "#placements" },
    { name: "About FIT", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      <div className="bg-navy-900 text-slate-300 text-xs py-2 px-4 border-b border-navy-700/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-gold-400 font-medium">
              <Award className="w-3.5 h-3.5 text-gold-500" />
              AICTE & NCTE Approved | AKTU Code: 226 | CCSU Affiliated
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a href="tel:+911212622441" className="flex items-center gap-1 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-gold-400" /> +91 (0121) 2622441 / 442
            </a>
            <span className="text-slate-600">|</span>
            <a href="mailto:fitadmission@gmail.com" className="flex items-center gap-1 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-gold-400" /> fitadmission@gmail.com
            </a>
          </div>
        </div>
      </div>

      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-navy-800/95 backdrop-blur-md shadow-lg shadow-black/10 py-3"
            : "bg-navy-800 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-tr from-gold-600 to-gold-400 flex items-center justify-center text-navy-900 font-extrabold text-xl shadow-md group-hover:scale-105 transition-transform">
              FIT
            </div>
            <div>
              <div className="text-white font-bold tracking-tight text-lg sm:text-xl flex items-center gap-1">
                FORTE <span className="text-gold-400">INSTITUTE</span>
              </div>
              <p className="text-[10px] sm:text-xs text-slate-300 uppercase tracking-widest font-medium">
                Group of Institutions • Meerut
              </p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-white hover:bg-navy-700/60 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <a
              href="#enquiry"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-900 font-semibold text-sm px-5 py-2.5 rounded-lg shadow-md hover:shadow-gold-500/20 transition-all active:scale-95"
            >
              <span>Admissions 2026</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-200 hover:text-white p-2 rounded-lg bg-navy-700/50 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-900/98 border-b border-navy-700 px-6 py-6 shadow-2xl backdrop-blur-lg">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-100 hover:text-gold-400 font-medium py-2 text-base border-b border-navy-800/80 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#enquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 text-center bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-3 rounded-lg shadow-md transition-all"
            >
              Apply / Enquire Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

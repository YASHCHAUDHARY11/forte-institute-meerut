import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Globe, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-navy-900 text-slate-300 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold-500 flex items-center justify-center text-navy-900 font-extrabold text-lg">
                FIT
              </div>
              <div className="text-white font-bold text-lg tracking-tight">
                FORTE INSTITUTE OF TECHNOLOGY
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              FIT Group of Institutions, Meerut provides education in Engineering, Computer Applications, Management, and Teacher Education under AICTE, NCTE, AKTU, and CCSU.
            </p>
            <div className="text-xs text-gold-400 font-medium">
              AKTU College Code: 226 | Affiliated to CCSU Meerut
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Key Programs
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#programs" className="hover:text-gold-400 transition-colors">BCA (Computer Applications)</a></li>
              <li><a href="#programs" className="hover:text-gold-400 transition-colors">MCA (AKTU Program)</a></li>
              <li><a href="#programs" className="hover:text-gold-400 transition-colors">BBA (Business Administration)</a></li>
              <li><a href="#programs" className="hover:text-gold-400 transition-colors">MBA (AKTU Program)</a></li>
              <li><a href="#programs" className="hover:text-gold-400 transition-colors">B.Tech CSE (Engineering)</a></li>
              <li><a href="#programs" className="hover:text-gold-400 transition-colors">B.Ed / M.Ed (NCTE Approved)</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Institutional Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-gold-400 transition-colors">Vision, Mission & Quality Policy</a></li>
              <li><a href="#campus" className="hover:text-gold-400 transition-colors">Laboratories & Workshops</a></li>
              <li><a href="#placements" className="hover:text-gold-400 transition-colors">Corporate Resource Cell (CRC)</a></li>
              <li>
                <a href="https://aktu.ac.in" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-gold-400">
                  AKTU Portal <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://www.ccsuniversity.ac.in" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-gold-400">
                  CCSU Portal <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li><a href="#enquiry" className="hover:text-gold-400 transition-colors">Anti-Ragging Compliance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Campus Address
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>NH-119, Mawana Road, Meerut, Uttar Pradesh, 250001, India.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span>+91 (0121) 2622441 / 2622442</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <span>fitadmission@gmail.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-gold-400 shrink-0" />
                <span>fitgroup.edu.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} Forte Institute of Technology, Meerut. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#home" className="hover:text-slate-400">Privacy Policy</Link>
            <Link href="#home" className="hover:text-slate-400">Mandatory Disclosures</Link>
            <Link href="#home" className="hover:text-slate-400">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

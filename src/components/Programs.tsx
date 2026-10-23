"use client";

import React, { useState } from "react";
import { COURSES, Course } from "@/data/instituteData";
import { Clock, Banknote, Users, Check, ArrowRight } from "lucide-react";

type FilterTab = "all" | "ca" | "mgmt" | "eng" | "edu";

export default function Programs() {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const filteredCourses =
    activeTab === "all" ? COURSES : COURSES.filter((c) => c.category === activeTab);

  const tabs: { label: string; value: FilterTab }[] = [
    { label: "All Programs", value: "all" },
    { label: "Computer Applications (BCA / MCA)", value: "ca" },
    { label: "Management (BBA / MBA)", value: "mgmt" },
    { label: "Engineering (B.Tech)", value: "eng" },
    { label: "Education (B.Ed / M.Ed)", value: "edu" },
  ];

  return (
    <section id="programs" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 bg-gold-100 text-gold-800 rounded-full text-xs font-semibold tracking-wide uppercase mb-3">
            Academic Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Programs & Fee Structure
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Choose from career-oriented degree programs affiliated with AKTU and CCSU.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all shadow-sm ${
                activeTab === tab.value
                  ? "bg-navy-800 text-white shadow-navy-800/20"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl border border-slate-200 hover:border-gold-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 text-xs font-bold rounded bg-navy-100 text-navy-800">
                    {course.shortName}
                  </span>
                  <span className="text-xs font-medium text-slate-500 border border-slate-200 px-2 py-0.5 rounded">
                    {course.affiliation}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                  {course.name}
                </h3>
                <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                  {course.description}
                </p>

                <div className="mt-5 space-y-2.5 text-xs text-slate-600 border-t border-slate-100 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                      <Clock className="w-3.5 h-3.5 text-gold-600" /> Duration:
                    </span>
                    <span className="font-semibold text-slate-800">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                      <Banknote className="w-3.5 h-3.5 text-gold-600" /> Approx. Tuition:
                    </span>
                    <span className="font-bold text-navy-900">{course.annualFees}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                      <Users className="w-3.5 h-3.5 text-gold-600" /> Sanctioned Intake:
                    </span>
                    <span className="font-semibold text-slate-800">{course.seats} Seats</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <p className="text-[11px] text-slate-500 leading-snug">
                    <strong className="text-slate-700">Eligibility:</strong> {course.eligibility}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <button
                  onClick={() => setSelectedCourse(course)}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg bg-navy-800 hover:bg-gold-500 text-white hover:text-navy-900 text-xs font-semibold transition-colors"
                >
                  <span>View Details & Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative border border-slate-200">
            <div className="flex justify-between items-start border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-semibold text-gold-600 tracking-wider uppercase">
                  {selectedCourse.affiliation}
                </span>
                <h3 className="text-xl font-bold text-navy-900">{selectedCourse.name}</h3>
              </div>
              <button
                onClick={() => setSelectedCourse(null)}
                className="text-slate-400 hover:text-slate-700 text-lg font-bold p-1"
                aria-label="Close details"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <p>{selectedCourse.description}</p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-xs">
                <div>
                  <span className="font-bold text-slate-900">Duration: </span> {selectedCourse.duration}
                </div>
                <div>
                  <span className="font-bold text-slate-900">Estimated Tuition: </span> {selectedCourse.annualFees}
                </div>
                <div>
                  <span className="font-bold text-slate-900">Eligibility Criteria: </span> {selectedCourse.eligibility}
                </div>
                <div>
                  <span className="font-bold text-slate-900">Intake Capacity: </span> {selectedCourse.seats} Seats
                </div>
              </div>

              <div className="pt-2">
                <h4 className="font-semibold text-navy-900 text-xs mb-1">Key Program Features:</h4>
                <ul className="text-xs space-y-1 text-slate-600">
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" /> Regular industrial visits & sessions
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" /> Dedicated personality development
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" /> Continuous assessment & exam prep
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3 border-t border-slate-100 pt-4">
              <button
                onClick={() => setSelectedCourse(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
              >
                Close
              </button>
              <a
                href="#enquiry"
                onClick={() => setSelectedCourse(null)}
                className="px-5 py-2 text-xs font-semibold bg-gold-500 hover:bg-gold-600 text-navy-900 rounded-lg shadow-sm"
              >
                Apply for this Program
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

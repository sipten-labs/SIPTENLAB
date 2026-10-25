"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  FileText,
  Download,
  ShieldCheck,
  ZoomIn,
  ZoomOut,
  Mail,
  MapPin,
  Globe,
  ExternalLink,
  Award,
  Code2,
  BarChart3,
  Layers,
  CheckCircle2,
} from "lucide-react";

const GMAIL_DIRECT_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=siptenfreelance@gmail.com&su=Hiring%20/%20Project%20Inquiry%20for%20Sipten%20Raja";

export default function ResumePage() {
  const [zoom, setZoom] = useState(100);

  const handleDownloadPdf = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#03060f] text-slate-100 px-4 sm:px-8 md:px-14 py-8 selection:bg-cyan-500 selection:text-black">
      {/* Print-Only CSS so "Download PDF" saves a crisp A4 PDF */}
      <style>{`
        @media print {
          body {
            background: #ffffff !important;
          }
          .no-print {
            display: none !important;
          }
          .print-sheet {
            width: 100% !important;
            max-width: 100% !important;
            box-shadow: none !important;
            border: none !important;
            margin: 0 !important;
            padding: 0 !important;
          }
        }
      `}</style>

      {/* Top Navigation & Controls Bar */}
      <div className="no-print max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
        <Link
          href="/"
          className="px-4 py-2.5 rounded-xl bg-[#0b1329] hover:bg-[#132042] text-xs font-semibold text-cyan-300 border border-cyan-500/30 flex items-center gap-2 transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>

        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-bold tracking-wider uppercase text-white">
            Sipten Raja • Official Executive Resume
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={() => setZoom((z) => Math.max(70, z - 10))}
            className="p-2 rounded-xl bg-[#0b1329] border border-slate-800 hover:border-cyan-400 text-slate-300 cursor-pointer"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono text-cyan-300 px-2">{zoom}%</span>
          <button
            type="button"
            onClick={() => setZoom((z) => Math.min(130, z + 10))}
            className="p-2 rounded-xl bg-[#0b1329] border border-slate-800 hover:border-cyan-400 text-slate-300 cursor-pointer"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleDownloadPdf}
            className="px-4 py-2 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center gap-1.5 cursor-pointer transition-all"
          >
            <Download className="w-3.5 h-3.5" /> Download Resume PDF
          </button>

          <a
            href={GMAIL_DIRECT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-purple-500/20 hover:bg-purple-500 text-purple-200 hover:text-white border border-purple-400/40 text-xs font-bold flex items-center gap-1.5 transition-all"
          >
            <Mail className="w-3.5 h-3.5" /> Hire Me
          </a>
        </div>
      </div>

      {/* Live High-Resolution Executive Resume Sheet */}
      <div className="max-w-5xl mx-auto my-8 flex flex-col items-center">
        <div className="no-print w-full flex items-center justify-between mb-4 px-2">
          <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" /> Verified Live Official Resume • Sipten Raja
          </span>
          <span className="text-[11px] text-slate-400 font-mono">
            A4 Executive Format • Ready to Print / Save PDF
          </span>
        </div>

        <div
          style={{ width: `${zoom}%`, maxWidth: "100%" }}
          className="print-sheet bg-[#080e20] border border-cyan-500/35 rounded-3xl shadow-[0_0_80px_rgba(6,182,212,0.18)] overflow-hidden transition-all duration-300"
        >
          {/* Resume Top Header Banner */}
          <div className="bg-linear-to-r from-[#0d1b3a] via-[#0a1329] to-[#17113a] p-7 sm:p-10 border-b border-slate-800">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-wider">
                  Sipten Labs • Fullstack & Automation Specialist
                </span>
                <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                  SIPTEN RAJA
                </h1>
                <p className="text-sm sm:text-base font-semibold text-cyan-300">
                  Fullstack SaaS & Mobile App Developer | 3D Web & Figma UI | Data & Excel Automation
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-300 bg-[#060a17]/80 p-4 rounded-2xl border border-slate-800/90 shrink-0">
                <a
                  href={GMAIL_DIRECT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-cyan-300 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>siptenfreelance@gmail.com</span>
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Islampur, West Bengal, India (Remote Ready)</span>
                </div>
                <a
                  href="https://github.com/sipten-labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-cyan-300 transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>github.com/sipten-labs</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/sipten-raja-814a17429"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-cyan-300 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>linkedin.com/in/sipten-raja-814a17429</span>
                </a>
              </div>
            </div>
          </div>

          {/* Resume Body Content */}
          <div className="p-7 sm:p-10 space-y-8">
            {/* 1. Executive Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-slate-800 pb-2">
                01 // Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                Results-driven Fullstack Developer, UI/UX Designer, and Data Automation Specialist building scalable SaaS platforms, modern web & mobile applications, interactive 3D WebGL experiences, and automated Excel / Power Query / Power BI workflows. Focused on delivering high-speed, conversion-ready digital products and time-saving business automation for global clients.
              </p>
            </div>

            {/* 2. Core Technical Arsenal */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-slate-800 pb-2">
                02 // Core Technical Competencies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                <div className="p-4 rounded-2xl bg-[#0c142c] border border-slate-800/90 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <Code2 className="w-4 h-4 text-cyan-400" /> Fullstack & SaaS Dev
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Next.js, React.js, TypeScript, JavaScript, Node.js, MongoDB, SQL, HTML5, CSS3, Tailwind CSS, REST APIs, Git & GitHub.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#0c142c] border border-slate-800/90 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <BarChart3 className="w-4 h-4 text-emerald-400" /> Data & BI Automation
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Advanced MS-Excel, Power Query (ETL Automation), Power BI Dashboards, VBA Macros, Python, Data Cleaning & KPI Reporting.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#0c142c] border border-slate-800/90 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <Layers className="w-4 h-4 text-purple-400" /> 3D Web & UI/UX Design
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Figma UI/UX Prototyping, Mobile App UI Systems, Three.js, Interactive 60FPS WebGL Canvas Shaders, Blender 3D.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Live Production Projects (Verified Proof of Work) */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-slate-800 pb-2">
                03 // Featured Live Production Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="p-4 rounded-2xl bg-[#0b1328] border border-slate-800/90 flex flex-col justify-between space-y-2">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-extrabold text-white">
                        Nexa Financial Platform — Fintech SaaS
                      </h3>
                      <a
                        href="https://nexa-financial-platform.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-bold text-cyan-400 hover:underline flex items-center gap-1"
                      >
                        Live App <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Modern financial analytics & treasury SaaS interface with real-time metrics, responsive dark-mode architecture, and interactive charts.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">
                    Next.js • TypeScript • Tailwind CSS • Vercel
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#0b1328] border border-slate-800/90 flex flex-col justify-between space-y-2">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-extrabold text-white">
                        SalesFlow — BI & Revenue CRM Platform
                      </h3>
                      <a
                        href="https://salesflow-tawny.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-bold text-cyan-400 hover:underline flex items-center gap-1"
                      >
                        Live App <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Executive sales pipeline, automated revenue tracking, and business intelligence dashboard built for high-growth teams.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">
                    React • Next.js • Data Visualization • Vercel
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#0b1328] border border-slate-800/90 flex flex-col justify-between space-y-2">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-extrabold text-white">
                        Savora Restaurant — Fullstack Dining Platform
                      </h3>
                      <a
                        href="https://savora-restaurant-psi.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-bold text-cyan-400 hover:underline flex items-center gap-1"
                      >
                        Live App <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      High-converting hospitality & online table/menu experience featuring smooth animations and mobile-first UI.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">
                    Next.js • Modern UI/UX • Responsive Web
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#0b1328] border border-slate-800/90 flex flex-col justify-between space-y-2">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-extrabold text-white">
                        Sipten Interactive Studio (40+ Templates & Automations)
                      </h3>
                      <Link
                        href="/templates"
                        className="text-[11px] font-bold text-cyan-400 hover:underline flex items-center gap-1"
                      >
                        Open Studio <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Custom library of 5 live 60FPS 3D shaders, 18 web templates, 9 mobile UI kits, and 10 automated Excel/Power Query models.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">
                    WebGL • Power Query • Advanced Excel • Figma
                  </span>
                </div>
              </div>
            </div>

            {/* 4. Verified Education & Certifications */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-slate-800 pb-2">
                04 // Verified Education & Diplomas
              </h2>
              <div className="space-y-3 pt-1">
                <div className="p-4 rounded-2xl bg-[#0c142c] border border-slate-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-extrabold text-white flex items-center gap-2">
                      <Award className="w-4 h-4 text-cyan-400 shrink-0" />
                      Diploma in Computer Science & Technology (DCST)
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Rashtriya Computer Literacy Drive (RCLD Authorised Centre — Islampur) • MS-Office, C, HTML, Python, JS & SQL
                    </p>
                  </div>
                  <div className="text-left sm:text-right shrink-0">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[11px] font-bold text-emerald-300">
                      Excellent Grade (94%)
                    </span>
                    <p className="text-[11px] text-slate-400 font-mono mt-1">2025 – 2026</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#0c142c] border border-slate-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-extrabold text-white flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      Intermediate Examination (12th Science — PCB)
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Bihar School Examination Board, Patna (Project Azad H.S. Pothiya, Kishanganj)
                    </p>
                  </div>
                  <div className="text-left sm:text-right shrink-0">
                    <span className="text-xs font-bold text-cyan-300">Science Stream</span>
                    <p className="text-[11px] text-slate-400 font-mono">2025</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#0c142c] border border-slate-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-extrabold text-white flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                      Secondary School Examination (10th Board)
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Bihar School Examination Board, Patna (Utkramit Madhyamik School Kusiyari, Kishanganj)
                    </p>
                  </div>
                  <div className="text-left sm:text-right shrink-0">
                    <span className="text-xs font-bold text-purple-300">Passed</span>
                    <p className="text-[11px] text-slate-400 font-mono">2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
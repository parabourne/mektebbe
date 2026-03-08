"use client";

import { useState } from "react";

const CATEGORIES = ["Hamısı", "Riyaziyyat", "Fizika", "Azərbaycan Dili", "Kimya"];

const PDF_DATA = [
  { 
    id: 1, 
    ad: "Funksiyalar və Qrafiklər", 
    fayl: "riyaziyyat-1.pdf", 
    tip: "pdf", 
    kateqoriya: "Riyaziyyat", 
    olcu: "1.2 MB",
    tarix: "2024-05-20"
  },
  { 
    id: 2, 
    ad: "Mexanika: İş vərəqi", 
    fayl: "fizika-tapshiriq.docx", 
    tip: "word", 
    kateqoriya: "Fizika", 
    olcu: "45 KB",
    tarix: "2024-05-18"
  },
  { 
    id: 3, 
    ad: "Sifət və İsim Testləri", 
    fayl: "aze-dili-1.pdf", 
    tip: "pdf",
    kateqoriya: "Azərbaycan Dili", 
    olcu: "0.8 MB",
    tarix: "2024-05-15"
  }
];

export default function ResurslarPage() {
  const [activeCategory, setActiveCategory] = useState("Hamısı");
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const filteredPdfs = activeCategory === "Hamısı" 
    ? PDF_DATA 
    : PDF_DATA.filter(pdf => pdf.kateqoriya === activeCategory);

  return (
    <div className="min-h-screen bg-white py-12 dark:bg-zinc-950 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-16">
        
        {/* Başlıq */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-black tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
            Tədris <span className="text-indigo-600 italic">Resursları</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Materialları həm onlayn nəzərdən keçirə, həm də cihazınıza yükləyə bilərsiniz.
          </p>
        </div>

        {/* Filtrlər */}
        <div className="mb-12 flex flex-nowrap items-center justify-start gap-3 overflow-x-auto pb-4 sm:flex-wrap sm:justify-center sm:overflow-visible">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap rounded-2xl px-6 py-3 text-sm font-bold transition-all active:scale-95 ${
                activeCategory === cat 
                ? "bg-indigo-600 text-white shadow-xl shadow-indigo-500/30" 
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPdfs.map((doc) => (
            <div 
              key={doc.id} 
              className="group relative flex flex-col justify-between rounded-3xl border border-zinc-100 bg-zinc-50/50 p-8 transition-all hover:bg-white hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900/40"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className={`rounded-lg px-3 py-1 text-xs font-black uppercase ${
                    doc.tip === "pdf" 
                    ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400" 
                    : "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                  }`}>
                    {doc.tip}
                  </span>
                  <span className="text-xs font-medium text-zinc-400">{doc.tarix}</span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600">
                  {doc.ad}
                </h3>
                
                <p className="mt-4 flex items-center gap-2 text-sm text-zinc-500">
                  {doc.tip === "pdf" ? (
                    <svg className="h-5 w-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )}
                  {doc.olcu}
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                {/* PDF üçün Önizləmə Düyməsi */}
                {doc.tip === "pdf" && (
                  <button
                    onClick={() => setSelectedPdf(`/pdfs/${doc.fayl}`)}
                    className="flex items-center justify-center gap-2 rounded-2xl border border-zinc-200 py-3 text-sm font-bold text-zinc-900 transition-all hover:bg-zinc-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Önizləmə
                  </button>
                )}

                {/* Yükləmə Düyməsi */}
                <a
                  href={`/pdfs/${doc.fayl}`}
                  download
                  className={`flex items-center justify-center gap-2 rounded-2xl py-4 text-sm font-bold text-white transition-all active:scale-95 ${
                    doc.tip === "pdf" ? "bg-zinc-900 hover:bg-red-600" : "bg-zinc-900 hover:bg-blue-600"
                  } dark:bg-white dark:text-zinc-900 dark:hover:bg-indigo-500 dark:hover:text-white`}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Yüklə
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL (ÖNİZLƏMƏ PƏNCƏRƏSİ) --- */}
      {selectedPdf && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8">
          <div className="relative flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-zinc-900">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-zinc-100 p-4 dark:border-zinc-800">
              <h3 className="font-bold text-zinc-900 dark:text-white">Sənəd Önizləməsi</h3>
              <button 
                onClick={() => setSelectedPdf(null)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-900 transition-colors hover:bg-red-500 hover:text-white dark:bg-zinc-800 dark:text-white"
              >
                ✕
              </button>
            </div>

            {/* Iframe Content */}
            <div className="flex-1 bg-zinc-100 dark:bg-zinc-800">
              <iframe 
                src={`${selectedPdf}#toolbar=0`} 
                className="h-full w-full"
                title="PDF Preview"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
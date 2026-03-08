"use client";

import Link from "next/link";
import { useState } from "react";

export default function StudentPage() {
  const [activeTab, setActiveTab] = useState("Hamısı");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["Hamısı", "Riyaziyyat", "Fizika", "Kimya", "Azərbaycan dili", "İnformatika"];

  // Sınaqlar siyahısını real fənn adları və siniflərlə yeniləyirik
  const exams = [
    // RIYAZIYYAT
    { id: "math-1", subject: "Riyaziyyat", grade: "1", questions: 10, time: "20 dəq", status: "Aktiv", difficulty: "Asan" },
    { id: "math-2", subject: "Riyaziyyat", grade: "2", questions: 10, time: "20 dəq", status: "Aktiv", difficulty: "Asan" },
    { id: "math-3", subject: "Riyaziyyat", grade: "3", questions: 10, time: "20 dəq", status: "Aktiv", difficulty: "Asan" },
    { id: "math-4", subject: "Riyaziyyat", grade: "4", questions: 10, time: "20 dəq", status: "Aktiv", difficulty: "Asan" },
    { id: "math-5", subject: "Riyaziyyat", grade: "5", questions: 10, time: "20 dəq", status: "Aktiv", difficulty: "Asan" },
    { id: "math-6", subject: "Riyaziyyat", grade: "6", questions: 10, time: "20 dəq", status: "Aktiv", difficulty: "Asan" },
    { id: "math-7", subject: "Riyaziyyat", grade: "7", questions: 10, time: "20 dəq", status: "Aktiv", difficulty: "Asan" },
    { id: "math-8", subject: "Riyaziyyat", grade: "8", questions: 10, time: "20 dəq", status: "Aktiv", difficulty: "Asan" },
    { id: "math-9", subject: "Riyaziyyat", grade: "9", questions: 10, time: "30 dəq", status: "Aktiv", difficulty: "Orta" },
    { id: "math-10", subject: "Riyaziyyat", grade: "10", questions: 10, time: "30 dəq", status: "Aktiv", difficulty: "Orta" },
    { id: "math-11", subject: "Riyaziyyat", grade: "11", questions: 10, time: "30 dəq", status: "Aktiv", difficulty: "Orta" },
    
    // FIZIKA
    { id: "phys-7", subject: "Fizika", grade: "7", questions: 10, time: "25 dəq", status: "Aktiv", difficulty: "Orta" },
    { id: "phys-8", subject: "Fizika", grade: "8", questions: 10, time: "25 dəq", status: "Aktiv", difficulty: "Orta" },
    { id: "phys-9", subject: "Fizika", grade: "9", questions: 10, time: "25 dəq", status: "Aktiv", difficulty: "Orta" },
    { id: "phys-10", subject: "Fizika", grade: "10", questions: 10, time: "25 dəq", status: "Aktiv", difficulty: "Orta" },
    { id: "phys-11", subject: "Fizika", grade: "11", questions: 10, time: "25 dəq", status: "Aktiv", difficulty: "Orta" },
    // KIMYA
    { id: "chem-7", subject: "Kimya", grade: "7", questions: 10, time: "30 dəq", status: "Aktiv", difficulty: "Orta" },
    { id: "chem-8", subject: "Kimya", grade: "8", questions: 10, time: "30 dəq", status: "Aktiv", difficulty: "Orta" },
    { id: "chem-9", subject: "Kimya", grade: "9", questions: 10, time: "30 dəq", status: "Aktiv", difficulty: "Orta" },
    { id: "chem-10", subject: "Kimya", grade: "10", questions: 10, time: "30 dəq", status: "Aktiv", difficulty: "Orta" },
    { id: "chem-11", subject: "Kimya", grade: "11", questions: 10, time: "30 dəq", status: "Aktiv", difficulty: "Orta" },
    
    // AZƏRBAYCAN DİLİ
    { id: "aze-1", subject: "Azərbaycan dili", grade: "1", questions: 10, time: "20 dəq", status: "Aktiv", difficulty: "Asan" },
    { id: "aze-2", subject: "Azərbaycan dili", grade: "2", questions: 10, time: "20 dəq", status: "Aktiv", difficulty: "Asan" },
    { id: "aze-3", subject: "Azərbaycan dili", grade: "3", questions: 10, time: "20 dəq", status: "Aktiv", difficulty: "Asan" },
    { id: "aze-4", subject: "Azərbaycan dili", grade: "4", questions: 10, time: "20 dəq", status: "Aktiv", difficulty: "Asan" },
    { id: "aze-5", subject: "Azərbaycan dili", grade: "5", questions: 10, time: "20 dəq", status: "Aktiv", difficulty: "Asan" },
    { id: "aze-6", subject: "Azərbaycan dili", grade: "6", questions: 10, time: "20 dəq", status: "Aktiv", difficulty: "Asan" },
    { id: "aze-7", subject: "Azərbaycan dili", grade: "7", questions: 10, time: "20 dəq", status: "Aktiv", difficulty: "Asan" },
    { id: "aze-8", subject: "Azərbaycan dili", grade: "8", questions: 10, time: "20 dəq", status: "Aktiv", difficulty: "Asan" },
    { id: "aze-9", subject: "Azərbaycan dili", grade: "9", questions: 10, time: "20 dəq", status: "Aktiv", difficulty: "Asan" },
    { id: "aze-10", subject: "Azərbaycan dili", grade: "10", questions: 10, time: "20 dəq", status: "Aktiv", difficulty: "Asan" },
    { id: "aze-11", subject: "Azərbaycan dili", grade: "11", questions: 10, time: "20 dəq", status: "Aktiv", difficulty: "Asan" },

    // ... Digər sınaqlar (id-ləri subject kimi də istifadə edə bilərik)
  ];

  // Filtrləmə məntiqi
  const filteredExams = exams.filter(exam => 
    (activeTab === "Hamısı" || exam.subject === activeTab) &&
    (exam.subject.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-zinc-950 font-sans pb-20 text-black dark:text-white">
      {/* --- NAVİQASİYA --- */}
      <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80 px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <Link href="/" className="text-2xl font-black text-indigo-600 tracking-tighter shrink-0 uppercase italic">Platforma</Link>
          
          <div className="relative w-full max-w-md hidden md:block text-black">
            <input 
              type="text"
              placeholder="Sınaq axtar..."
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-10 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 font-bold border border-indigo-200">
              S
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl p-6 lg:p-10">
        {/* --- BANNER --- */}
        <div className="mb-12 relative overflow-hidden rounded-[2.5rem] bg-indigo-600 p-8 sm:p-12 text-white shadow-2xl">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-black italic sm:text-5xl leading-tight uppercase tracking-tighter">İmtahan Portalı</h2>
            <p className="mt-4 text-indigo-100 text-lg opacity-90">Fənn üzrə sınaqlarda iştirak et və nəticəni çap et.</p>
          </div>
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-500 opacity-50 blur-3xl"></div>
        </div>

        {/* --- FƏNN FİLTRLƏRİ --- */}
        <div className="mb-10 flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === cat 
                ? "bg-indigo-600 text-white shadow-lg" 
                : "bg-white dark:bg-zinc-900 text-zinc-500 border border-zinc-100 dark:border-zinc-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- SINAQLAR --- */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredExams.map((exam) => (
            <div key={exam.id} className="group rounded-3xl border border-zinc-100 bg-white p-6 transition-all hover:border-indigo-500 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900 relative">
              <div className="absolute top-0 right-0 px-3 py-1 text-[10px] font-black bg-indigo-600 text-white rounded-bl-xl uppercase tracking-widest">
                {exam.grade}-cu Sinif
              </div>
              
              <div className="mt-2 h-10 w-10 rounded-lg bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center font-black text-indigo-600 uppercase">
                {exam.subject[0]}
              </div>
              
              <h4 className="mt-4 font-bold text-lg leading-tight uppercase">{exam.subject} Sınağı</h4>
              <p className="text-xs text-zinc-400 italic mt-1">{exam.questions} Sual • {exam.time} • {exam.difficulty}</p>
              
              <div className="mt-6">
                {/* DİQQƏT: Linkdə həm fənn adını, həm də grade-i ötürürük */}
                <Link 
                  href={`/exam/${exam.subject}?grade=${exam.grade}`} 
                  className="block w-full text-center rounded-xl bg-zinc-900 py-3 text-sm font-bold text-white hover:bg-indigo-600 transition-all dark:bg-indigo-600"
                >
                  Sınağa Başla
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
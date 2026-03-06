"use client";

import Link from "next/link";
import { useState } from "react";

export default function StudentPage() {
  const [activeTab, setActiveTab] = useState("Hamısı");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["Hamısı", "Riyaziyyat", "Fizika", "Kimya", "İnformatika"];

  const exams = [
    { id: "math-101", subject: "Riyaziyyat", questions: 20, time: "30 dəq", status: "Aktiv", difficulty: "Orta" },
    { id: "phys-202", subject: "Fizika", questions: 15, time: "25 dəq", status: "Bitib", score: 85, correct: 13, wrong: 2 },
    { id: "chem-303", subject: "Kimya", questions: 25, time: "40 dəq", status: "Aktiv", difficulty: "Çətin" },
  ];

  const resources = [
    { id: 1, title: "Törəmə və tətbiqləri", type: "Video", duration: "12 dəq", subject: "Riyaziyyat", color: "text-blue-600" },
    { id: 2, title: "Nyuton qanunları PDF", type: "Fayl", duration: "2.4 MB", subject: "Fizika", color: "text-purple-600" },
    { id: 3, title: "Üzvi kimyaya giriş", type: "Video", duration: "15 dəq", subject: "Kimya", color: "text-emerald-600" },
  ];

  const leaderboard = [
    { rank: 1, name: "İstifadəçi #842", points: 2850 },
    { rank: 2, name: "İstifadəçi #129", points: 2720 },
    { rank: 3, name: "İstifadəçi #554", points: 2600 },
  ];

  // Filtrləmə məntiqi
  const filteredExams = exams.filter(exam => 
    (activeTab === "Hamısı" || exam.subject === activeTab) &&
    exam.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-zinc-950 font-sans pb-20">
      
      {/* --- NAVİQASİYA (Axtarış ilə) --- */}
      <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80 px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <Link href="/" className="text-2xl font-black text-indigo-600 tracking-tighter shrink-0">PLATFORMA</Link>
          
          <div className="relative w-full max-w-md hidden md:block">
            <input 
              type="text"
              placeholder="Sınaq və ya mövzu axtar..."
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-10 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button className="relative p-2 text-zinc-500 hover:text-indigo-600">
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500 border-2 border-white dark:border-zinc-900"></span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            </button>
            <div className="h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center text-indigo-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl p-6 lg:p-10">
        
        {/* --- BANNER --- */}
        <div className="mb-12 relative overflow-hidden rounded-[2.5rem] bg-indigo-600 p-8 sm:p-12 text-white shadow-2xl shadow-indigo-500/20">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-200 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Canlı Sınaq Sistemi
            </div>
            <h2 className="text-3xl font-black italic sm:text-5xl leading-tight">Gələcək burada öyrənilir.</h2>
            <p className="mt-4 text-indigo-100 italic text-lg opacity-90">Sənə uyğun fənni seç və biliklərini növbəti səviyyəyə daşı.</p>
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
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30" 
                : "bg-white text-zinc-500 hover:bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-12">
          
          {/* --- SOL: SINAQLAR (7/12) --- */}
          <section className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-4">
              <h3 className="text-2xl font-black italic tracking-tight dark:text-white">{activeTab} Sınaqları</h3>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2">
              {filteredExams.length > 0 ? filteredExams.map((exam) => (
                <div key={exam.id} className="group rounded-3xl border border-zinc-100 bg-white p-6 transition-all hover:border-indigo-500 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900 shadow-sm relative overflow-hidden">
                  <div className={`absolute top-0 right-0 px-4 py-1 text-[10px] font-black uppercase rounded-bl-xl ${exam.status === 'Aktiv' ? 'bg-indigo-600 text-white' : 'bg-zinc-100 text-zinc-400'}`}>
                    {exam.status}
                  </div>
                  <div className="mt-2 h-12 w-12 rounded-xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center font-black text-indigo-600">
                    {exam.subject[0]}
                  </div>
                  <h4 className="mt-4 font-bold text-lg dark:text-white leading-tight">{exam.subject} İmtahanı</h4>
                  <p className="text-xs text-zinc-500 italic mt-1">{exam.questions} Sual • {exam.difficulty}</p>
                  
                  <div className="mt-6 flex items-center justify-between">
                    {exam.status === "Aktiv" ? (
                      <Link href={`/exam/${exam.id}`} className="w-full text-center rounded-xl bg-zinc-900 py-3 text-sm font-bold text-white hover:bg-indigo-600 transition-all active:scale-95 dark:bg-indigo-600">Sınağa Başla</Link>
                    ) : (
                      <div className="flex items-center justify-between w-full">
                        <span className="text-lg font-black text-indigo-600">{exam.score}%</span>
                        <span className="text-[10px] font-bold text-zinc-400 uppercase">Bitib</span>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="col-span-full py-20 text-center bg-white rounded-3xl dark:bg-zinc-900 border border-dashed border-zinc-200 dark:border-zinc-800">
                  <p className="text-zinc-400 italic font-medium">Bu kateqoriya üzrə hələ ki sınaq yoxdur.</p>
                </div>
              )}
            </div>
          </section>

          {/* --- SAĞ: RESURSLAR VƏ REYTİNQ (5/12) --- */}
          <aside className="lg:col-span-4 space-y-10">
            
            {/* Liderlər Cədvəli */}
            <section className="rounded-3xl bg-zinc-900 p-6 text-white shadow-xl">
              <h3 className="text-lg font-black italic mb-6">Həftəlik Liderlər</h3>
              <div className="space-y-4">
                {leaderboard.map((user) => (
                  <div key={user.rank} className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-4">
                      <span className={`h-6 w-6 flex items-center justify-center rounded-lg text-xs font-black ${user.rank === 1 ? 'bg-yellow-500 text-black' : 'bg-white/20'}`}>{user.rank}</span>
                      <p className="text-sm font-bold opacity-90">{user.name}</p>
                    </div>
                    <span className="text-xs font-black text-indigo-400">{user.points} XP</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Son Materiallar */}
            <section className="space-y-6">
              <h3 className="text-2xl font-black italic tracking-tight dark:text-white">Dərs Resursları</h3>
              <div className="grid gap-3">
                {resources.map((res) => (
                  <div key={res.id} className="group cursor-pointer rounded-2xl border border-zinc-100 bg-white p-4 transition-all hover:border-indigo-500 dark:border-zinc-800 dark:bg-zinc-900 shadow-sm flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center text-indigo-600">
                        {res.type === "Video" ? (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" /></svg>
                        ) : (
                          <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" /></svg>
                        )}
                      </div>
                      <div>
                        <h4 className="font-bold text-xs dark:text-zinc-200">{res.title}</h4>
                        <p className="text-[10px] text-zinc-400 italic">{res.subject}</p>
                      </div>
                    </div>
                    <button className="text-zinc-300 group-hover:text-indigo-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5h5M5 8h2m6 9l2 2 5-5" /></svg>
                    </button>
                  </div>
                ))}
              </div>
            </section>

          </aside>
        </div>
      </main>
    </div>
  );
}
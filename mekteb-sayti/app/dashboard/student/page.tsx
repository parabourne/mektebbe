"use client";

import Link from "next/link";

export default function StudentPage() {
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

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-zinc-950 font-sans">
      
      {/* Üst Naviqasiya */}
      <nav className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80 px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="text-2xl font-black text-indigo-600 tracking-tighter">PLATFORMA</Link>
          <div className="flex items-center gap-4">
            <Link href="/haqqimizda" className="text-sm font-medium text-zinc-500 hover:text-indigo-600 transition-colors italic">Haqqımızda</Link>
            <div className="h-8 w-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl p-6 lg:p-10">
        
        {/* Banner Section - Statistika əvəzinə */}
        <div className="mb-12 relative overflow-hidden rounded-[2.5rem] bg-indigo-600 p-8 sm:p-12 text-white shadow-2xl shadow-indigo-500/20">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-black italic sm:text-5xl leading-tight">
              Öyrənməyə limit qoyma.
            </h2>
            <p className="mt-4 text-indigo-100 italic text-lg opacity-90">
              Aşağıdakı bölmələrdən istədiyiniz fənni seçərək onlayn sınaqlarda iştirak edə və ya tədris materialları ilə tanış ola bilərsiniz.
            </p>
          </div>
          {/* Dekorativ dairə */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-500 opacity-50 blur-3xl"></div>
        </div>

        <div className="grid gap-10 lg:grid-cols-12">
          
          {/* SOL TƏRƏF: Onlayn Sınaqlar */}
          <section className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-4">
              <h3 className="text-2xl font-black italic tracking-tight dark:text-white">Açıq Sınaqlar</h3>
              <p className="text-sm font-bold text-zinc-400 italic">Cəmi: {exams.length}</p>
            </div>
            
            <div className="space-y-4">
              {exams.map((exam) => (
                <div key={exam.id} className="group rounded-2xl border border-zinc-100 bg-white p-6 transition-all hover:border-indigo-500 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <div className={`h-14 w-14 rounded-2xl flex items-center justify-center font-black text-xl ${exam.status === 'Aktiv' ? 'bg-indigo-50 text-indigo-600' : 'bg-zinc-50 dark:bg-zinc-800 text-zinc-400'}`}>
                        {exam.subject[0]}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg dark:text-white">{exam.subject} Üzrə Sınaq</h4>
                        <p className="text-xs text-zinc-500 italic font-medium">{exam.questions} Sual • Səviyyə: {exam.difficulty}</p>
                      </div>
                    </div>
                    {exam.status === "Aktiv" ? (
                      <Link href={`/exam/${exam.id}`} className="rounded-xl bg-indigo-600 px-8 py-3 text-sm font-bold text-white hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20 active:scale-95">Başla</Link>
                    ) : (
                      <div className="px-4 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-800 text-xs font-bold text-zinc-400 uppercase tracking-widest">Bitib</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SAĞ TƏRƏF: Tədris Materialları */}
          <section className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-4">
              <h3 className="text-2xl font-black italic tracking-tight dark:text-white">Son Materiallar</h3>
            </div>
            
            <div className="grid gap-4">
              {resources.map((res) => (
                <div key={res.id} className="group cursor-pointer rounded-2xl border border-zinc-100 bg-white p-5 transition-all hover:border-indigo-500 dark:border-zinc-800 dark:bg-zinc-900 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center">
                      {res.type === "Video" ? (
                        <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" /></svg>
                      ) : (
                        <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" /></svg>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className={`text-[10px] font-bold uppercase tracking-widest ${res.color}`}>{res.subject}</p>
                      <h4 className="font-bold text-sm dark:text-zinc-200">{res.title}</h4>
                      <p className="text-[10px] text-zinc-400 mt-1 italic">{res.type} • {res.duration}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Köməkçi Kart */}
            <div className="rounded-3xl border-2 border-dashed border-indigo-100 dark:border-indigo-900/30 p-6 text-center">
              <p className="text-sm italic text-zinc-500 dark:text-zinc-400">
                Axtardığınız materialı tapa bilmədiniz? Tezliklə yeni fənlər əlavə olunacaq.
              </p>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
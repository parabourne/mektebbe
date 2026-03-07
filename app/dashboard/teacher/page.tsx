"use client";

import { useState } from "react";
import Link from "next/link";

export default function TeacherPage() {
  const [activeTab, setActiveTab] = useState("Statistika");

  // Nümunə Statistika Məlumatları
  const stats = [
    { label: "Ümumi Şagird", value: "1,240", icon: "👥", color: "bg-blue-500" },
    { label: "Aktiv Sınaqlar", value: "42", icon: "📝", color: "bg-indigo-500" },
    { label: "Ortalama Bal", value: "76%", icon: "📊", color: "bg-emerald-500" },
    { label: "Yüklənmiş Fayllar", value: "156", icon: "📂", color: "bg-orange-500" },
  ];

  // Son Nəticələr
  const recentResults = [
    { id: 1, student: "Əli Məmmədov", subject: "Riyaziyyat", grade: "9", score: 95, date: "10 dəq əvvəl" },
    { id: 2, student: "Aytən Əliyeva", subject: "Fizika", grade: "7", score: 82, date: "25 dəq əvvəl" },
    { id: 3, student: "Leyla Həsənova", subject: "Kimya", grade: "8", score: 60, date: "1 saat əvvəl" },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-zinc-950 font-sans pb-20 text-black dark:text-white">
      
      {/* --- NAVİQASİYA --- */}
      <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80 px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-2xl font-black text-violet-600 tracking-tighter italic uppercase">Platforma</Link>
            <span className="hidden sm:block h-6 w-[1px] bg-zinc-200 dark:bg-zinc-800"></span>
            <span className="hidden sm:block text-xs font-bold uppercase tracking-widest text-zinc-400">Müəllim Paneli</span>
          </div>
          
          <div className="flex items-center gap-4 font-bold text-sm">
             <div className="h-10 w-10 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 border border-violet-200">M</div>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl p-6 lg:p-10">
        
        {/* --- BAŞLIQ VƏ ACTION --- */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-black italic tracking-tighter uppercase">Xoş gəldiniz, Müəllim!</h2>
            <p className="text-zinc-500 text-sm italic">Bu gün platformada olan yenilikləri buradan izləyə bilərsiniz.</p>
          </div>
          <button className="flex items-center justify-center gap-2 rounded-2xl bg-violet-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-violet-500/20 hover:bg-violet-700 transition-all active:scale-95">
            <span>+</span> Yeni Sınaq Yarat
          </button>
        </div>

        {/* --- STATİSTİKA KARTLARI --- */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white dark:bg-zinc-900 p-6 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className={`h-10 w-10 rounded-xl ${stat.color} flex items-center justify-center text-xl shadow-inner`}>
                  {stat.icon}
                </span>
                <span className="text-[10px] font-black text-green-500">+12% ↑</span>
              </div>
              <p className="text-2xl font-black tracking-tighter">{stat.value}</p>
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-12">
          
          {/* --- SOL: SON NƏTİCƏLƏR --- */}
          <section className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-4">
              <h3 className="text-xl font-black italic uppercase tracking-tighter">Son İmtahan Nəticələri</h3>
              <button className="text-xs font-black text-violet-600 uppercase italic hover:underline">Hamısına Bax</button>
            </div>
            
            <div className="overflow-hidden rounded-[2rem] border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-zinc-50 dark:bg-zinc-800/50 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                  <tr>
                    <th className="px-6 py-4">Şagird</th>
                    <th className="px-6 py-4">Fənn</th>
                    <th className="px-6 py-4">Sinif</th>
                    <th className="px-6 py-4 text-center">Bal</th>
                    <th className="px-6 py-4 text-right">Zaman</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  {recentResults.map((res) => (
                    <tr key={res.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors">
                      <td className="px-6 py-4 font-bold">{res.student}</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full bg-violet-50 dark:bg-violet-900/20 text-violet-600 text-[10px] font-bold uppercase italic">
                          {res.subject}
                        </span>
                      </td>
                      <td className="px-6 py-4 italic">{res.grade}-cu Sinif</td>
                      <td className="px-6 py-4 text-center">
                        <span className={`font-black ${res.score >= 80 ? 'text-green-500' : 'text-orange-500'}`}>{res.score}%</span>
                      </td>
                      <td className="px-6 py-4 text-right text-zinc-400 text-xs italic">{res.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* --- SAĞ: SÜRƏTLİ MENYU --- */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="rounded-[2.5rem] bg-zinc-900 p-8 text-white shadow-xl shadow-zinc-900/20">
              <h3 className="text-lg font-black italic mb-6 uppercase tracking-tighter">İdarəetmə Paneli</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm font-bold">
                  <span>Sual Bankını İdarə Et</span>
                  <span>→</span>
                </button>
                <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm font-bold">
                  <span>Video Dərs Yüklə</span>
                  <span>🎥</span>
                </button>
                <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm font-bold text-red-400">
                  <span>Şikayətlər</span>
                  <span className="h-2 w-2 rounded-full bg-red-500"></span>
                </button>
              </div>
            </div>

            <div className="p-6 rounded-[2rem] border border-dashed border-zinc-200 dark:border-zinc-800 text-center">
              <p className="text-zinc-400 text-xs italic">Sistemdə hər hansı bir texniki problem yaranarsa, mühəndislərimizə bildirin.</p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";

export default function TeacherPage() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const stats = [
    { label: "Ümumi Şagird", value: "1,240", icon: "👥", color: "bg-blue-500" },
    { label: "Aktiv Sınaqlar", value: "42", icon: "📝", color: "bg-indigo-500" },
    { label: "Ortalama Bal", value: "76%", icon: "📊", color: "bg-emerald-500" },
    { label: "Yüklənmiş Fayllar", value: "156", icon: "📂", color: "bg-orange-500" },
  ];

  const recentResults = [
    { id: 1, student: "Əli Məmmədov", subject: "Riyaziyyat", grade: "9", score: 95, status: "Əla" },
    { id: 2, student: "Aytən Əliyeva", subject: "Fizika", grade: "7", score: 82, status: "Yaxşı" },
    { id: 3, student: "Leyla Həsənova", subject: "Kimya", grade: "8", score: 60, status: "Kafi" },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-zinc-950 font-sans pb-20 text-black dark:text-white">
      
      {/* --- MODAL (YENİ SINAQ YARAT) --- */}
      {showAddModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 shadow-2xl border dark:border-zinc-800">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-black italic uppercase tracking-tighter text-violet-600">Yeni Sınaq Paneli</h3>
              <button onClick={() => setShowAddModal(false)} className="h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all">✕</button>
            </div>
            <div className="space-y-4">
              <input type="text" placeholder="Sınaq Başlığı (məs: KSQ-1)" className="w-full p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800 border-none outline-none focus:ring-2 focus:ring-violet-500/20" />
              <div className="grid grid-cols-2 gap-4">
                <select className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800 border-none outline-none">
                  <option>Riyaziyyat</option>
                  <option>Fizika</option>
                  <option>İnformatika</option>
                </select>
                <select className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800 border-none outline-none">
                  <option>9-cu Sinif</option>
                  <option>10-cu Sinif</option>
                </select>
              </div>
              <textarea placeholder="Sual mətnini daxil edin..." className="w-full p-4 h-32 rounded-2xl bg-zinc-50 dark:bg-zinc-800 border-none outline-none focus:ring-2 focus:ring-violet-500/20"></textarea>
              <button className="w-full py-4 bg-violet-600 text-white rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-violet-500/30 hover:bg-violet-700 active:scale-95 transition-all">Sınağı Sistemə Əlavə Et</button>
            </div>
          </div>
        </div>
      )}

      {/* --- NAVİQASİYA --- */}
      <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80 px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <Link href="/" className="text-2xl font-black text-violet-600 tracking-tighter italic uppercase">Platforma</Link>
          <div className="flex items-center gap-4">
             <div className="px-4 py-1.5 rounded-full bg-violet-50 dark:bg-violet-900/20 border border-violet-100 dark:border-violet-800 text-[10px] font-black text-violet-600 uppercase">Admin Mode</div>
             <div className="h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-800 border flex items-center justify-center font-bold">M</div>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl p-6 lg:p-10">
        
        {/* --- WELCOME BANNER --- */}
        <div className="mb-12 relative overflow-hidden rounded-[3rem] bg-zinc-900 p-10 text-white shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-4xl font-black italic tracking-tighter uppercase sm:text-5xl leading-none">Xoş gəldiniz, <br/> Hörmətli Müəllim!</h2>
            <p className="mt-4 text-zinc-400 max-w-md italic">Şagirdlərinizin inkişafını izləyin və yeni tədris materialları ilə bazanı zənginləşdirin.</p>
            <div className="mt-8 flex gap-4">
              <button onClick={() => setShowAddModal(true)} className="px-8 py-3.5 bg-violet-600 rounded-2xl font-bold hover:bg-violet-700 transition-all active:scale-95 shadow-lg shadow-violet-500/20">Yeni Sınaq Yarat</button>
              <button className="px-8 py-3.5 bg-white/10 rounded-2xl font-bold hover:bg-white/20 transition-all border border-white/10">Hesabatı Yüklə</button>
            </div>
          </div>
          <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-violet-600/20 blur-[80px]"></div>
        </div>

        {/* --- STATS --- */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="group hover:-translate-y-1 transition-all bg-white dark:bg-zinc-900 p-6 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-xl">
              <div className={`h-12 w-12 rounded-2xl ${stat.color} flex items-center justify-center text-xl shadow-lg mb-4 text-white`}>{stat.icon}</div>
              <p className="text-3xl font-black tracking-tighter mb-1">{stat.value}</p>
              <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          {/* --- NƏTİCƏLƏR --- */}
          <section className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-black italic uppercase tracking-tighter">Şagird Analitikası</h3>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Şagird axtar..." 
                  className="px-4 py-2 rounded-xl bg-white dark:bg-zinc-900 border text-xs outline-none focus:border-violet-500"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            <div className="grid gap-4">
              {recentResults.map((res) => (
                <div key={res.id} className="flex items-center justify-between p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-100 dark:border-zinc-800 hover:border-violet-500/50 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center font-black text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-all">{res.student[0]}</div>
                    <div>
                      <h4 className="font-black text-sm">{res.student}</h4>
                      <p className="text-[10px] text-zinc-400 uppercase font-bold italic">{res.subject} • {res.grade}-cu Sinif</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-xl font-black ${res.score >= 80 ? 'text-green-500' : 'text-orange-500'}`}>{res.score}%</p>
                    <p className="text-[9px] font-black uppercase text-zinc-400 tracking-widest">{res.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* --- TOOLS --- */}
          <aside className="lg:col-span-4 space-y-8">
             <div className="p-8 rounded-[2.5rem] bg-violet-600 text-white shadow-2xl shadow-violet-500/30 relative overflow-hidden">
                <h3 className="text-lg font-black italic mb-4 uppercase tracking-tighter relative z-10">Müəllim Alətləri</h3>
                <div className="space-y-3 relative z-10">
                   <button className="w-full p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all text-xs font-black uppercase text-left flex justify-between">Sual Bazası <span>→</span></button>
                   <button className="w-full p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all text-xs font-black uppercase text-left flex justify-between">Video Dərs Paneli <span>🎥</span></button>
                </div>
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-white/10 blur-2xl"></div>
             </div>

             <div className="p-8 rounded-[2.5rem] border-2 border-dashed border-zinc-200 dark:border-zinc-800 text-center group hover:border-violet-500/50 transition-all">
                <p className="text-zinc-400 text-[11px] font-bold italic uppercase mb-4">Sistem Mesajı</p>
                <p className="text-sm font-medium leading-relaxed opacity-80">Yeni tədris ili üçün sual bazasını <span className="text-violet-600 font-black">30 Aprel</span> tarixinədək yeniləməyiniz xahiş olunur.</p>
             </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
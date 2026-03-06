"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation"; // Cari yolu yoxlamaq üçün əlavə edildi

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Əgər istifadəçi ana səhifədədirsə (/), Navbar-ı render etmə
  if (pathname === "/") {
    return null;
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-100 bg-white/80 dark:border-zinc-800 dark:bg-zinc-950/80 backdrop-blur-md print:hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-16">
        <div className="flex h-20 items-center justify-between">
          
          {/* Loqo */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 font-black text-white transition-transform group-hover:rotate-12">
              P
            </div>
            <span className="text-xl font-black tracking-tighter text-zinc-900 dark:text-white sm:text-2xl">
              PLATFORMA
            </span>
          </Link>

          {/* Desktop Menyu */}
          <div className="hidden items-center gap-8 sm:flex">
            <Link href="/resurslar" className="text-sm font-bold text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 italic">Resurslar</Link>
            <Link href="/imtahanlar" className="text-sm font-bold text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 italic">Sınaqlar</Link>
            <Link href="/elaqe" className="text-sm font-bold text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 italic">Dəstək</Link>
            
            <div className="h-6 w-[1px] bg-zinc-200 dark:bg-zinc-800"></div>
            
            <Link 
              href="/dashboard/student" 
              className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-indigo-700 active:scale-95 shadow-lg shadow-indigo-500/20"
            >
              Panelə Giriş
            </Link>
          </div>

          {/* Mobil Menyu Düyməsi */}
          <button 
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-50 dark:bg-zinc-900 sm:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobil Menyu İçəriyi */}
        {isOpen && (
          <div className="border-t border-zinc-100 py-6 dark:border-zinc-800 sm:hidden animate-in fade-in slide-in-from-top-4">
            <div className="flex flex-col gap-4">
              <Link href="/resurslar" className="text-lg font-bold italic" onClick={() => setIsOpen(false)}>Resurslar</Link>
              <Link href="/imtahanlar" className="text-lg font-bold italic" onClick={() => setIsOpen(false)}>Sınaqlar</Link>
              <Link href="/elaqe" className="text-lg font-bold italic" onClick={() => setIsOpen(false)}>Dəstək</Link>
              <Link 
                href="/dashboard/student" 
                className="mt-4 rounded-xl bg-indigo-600 py-4 text-center font-bold text-white italic"
                onClick={() => setIsOpen(false)}
              >
                Şəxsi Kabinet
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
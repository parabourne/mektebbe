"use client";

import { useState } from "react";

export default function ElaqePage() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Mesajınız göndərildi! Tezlər sizinlə əlaqə saxlayacağıq.");
  };

  return (
    // "h-[calc(100vh-80px)]" Navbar hündürlüyünü çıxır ki, hər şey ekrana sığsın
    <div className="flex min-h-[calc(100vh-80px)] items-center bg-white py-6 dark:bg-zinc-950 sm:py-10">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-16">
        
        {/* Başlıq - Daha yığcam */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-black tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
            Sizə necə <span className="text-indigo-600 italic">kömək edə bilərik?</span>
          </h1>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-2">
          
          {/* Sol Tərəf: Sürətli Əlaqə */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Sürətli Əlaqə</h2>
            
            <div className="grid gap-3 sm:grid-cols-2">
              {/* WhatsApp */}
              <a href="https://wa.me/994555556963" target="_blank" className="group flex items-center gap-3 rounded-2xl border border-zinc-100 bg-zinc-50/50 p-4 transition-all hover:bg-green-50 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:bg-green-950/20">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-500 text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold dark:text-white">WhatsApp</h3>
                  <p className="text-xs text-zinc-500">Canlı Dəstək</p>
                </div>
              </a>

              {/* Telegram */}
              <a href="https://t.me/parabourne" target="_blank" className="group flex items-center gap-3 rounded-2xl border border-zinc-100 bg-zinc-50/50 p-4 transition-all hover:bg-sky-50 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:bg-sky-950/20">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-500 text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.414 7.218l-1.42 6.691c-.107.478-.388.596-.788.372l-2.164-1.594-1.044 1.004c-.115.115-.212.212-.434.212l.155-2.201 4.007-3.62c.174-.155-.038-.241-.269-.09l-4.954 3.12-2.133-.667c-.463-.145-.472-.463.097-.686l8.324-3.21c.385-.14.723.09.564.769z"/></svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold dark:text-white">Telegram</h3>
                  <p className="text-xs text-zinc-500">İcmaya qoşul</p>
                </div>
              </a>

              {/* Facebook */}
              <a href="https://facebook.com/parabournex" target="_blank" className="group flex items-center gap-3 rounded-2xl border border-zinc-100 bg-zinc-50/50 p-4 transition-all hover:bg-blue-50 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:bg-blue-950/20">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold dark:text-white">Facebook</h3>
                  <p className="text-xs text-zinc-500">Bizi izləyin</p>
                </div>
              </a>
            </div>

            <div className="rounded-2xl border border-dashed border-zinc-200 p-5 dark:border-zinc-800">
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white">Dəstək Saatları</h3>
              <p className="mt-1 text-xs text-zinc-500">Həftə içi: 09:00 - 18:00</p>
            </div>
          </div>

          {/* Sağ Tərəf: Form - Daha yığcam font və padding */}
          <div className="rounded-3xl border border-zinc-100 bg-white p-6 shadow-xl shadow-zinc-200/50 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-none">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-bold text-zinc-500 uppercase ml-1">Ad Soyad</label>
                  <input type="text" required placeholder="Əli M." className="mt-1 w-full rounded-xl border border-zinc-100 bg-zinc-50 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-600 dark:border-zinc-800 dark:bg-zinc-950" />
                </div>
                <div>
                  <label className="text-xs font-bold text-zinc-500 uppercase ml-1">Email</label>
                  <input type="email" required placeholder="ali@mail.com" className="mt-1 w-full rounded-xl border border-zinc-100 bg-zinc-50 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-600 dark:border-zinc-800 dark:bg-zinc-950" />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-zinc-500 uppercase ml-1">Mesaj</label>
                <textarea rows={3} required placeholder="Sualınızı qeyd edin..." className="mt-1 w-full rounded-xl border border-zinc-100 bg-zinc-50 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-600 dark:border-zinc-800 dark:bg-zinc-950"></textarea>
              </div>
              <button type="submit" className="w-full rounded-xl bg-indigo-600 py-3 text-sm font-bold text-white transition-all hover:bg-indigo-700 active:scale-95 shadow-lg shadow-indigo-600/20">
                Göndər
              </button>
              {status && <p className="text-center text-xs font-bold text-green-600">{status}</p>}
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
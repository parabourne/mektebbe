import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans">
      
      {/* --- HERO SECTION + ƏLAQƏ PANELİ --- */}
      <main className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-16 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          
          {/* SOL TƏRƏF: Mətn və Mesaj */}
          <div className="lg:col-span-8 text-center lg:text-left">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
              Bilgi Sərhəd Tanımır <br />
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent italic">İndi Öyrənməyə Başla</span>
            </h1>
            
            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400 italic mx-auto lg:mx-0">
              İstədiyin yerdən, istədiyin zaman interaktiv dərslərə qoşul, onlayn imtahanlarda özünü sına və rəqəmsal dünyada uğur qazan.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link
                href="/dashboard/student"
                className="flex h-14 items-center justify-center rounded-2xl bg-indigo-600 px-10 text-base font-bold text-white shadow-xl shadow-indigo-500/25 transition-all hover:bg-indigo-700 active:scale-95"
              >
                Öyrənməyə Başla
              </Link>
            </div>
          </div>

          {/* SAĞ TƏRƏF: Şaquli Əlaqə Paneli */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-900/50 p-6 border border-zinc-100 dark:border-zinc-800">
              <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-6 text-center italic">Sürətli Dəstək</p>
              
              <div className="space-y-3">
                {/* WhatsApp */}
                <a 
                  href="https://wa.me/994555556963" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm transition-all hover:border-green-500 hover:shadow-green-500/5 group"
                >
                  <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-green-50 text-green-600 dark:bg-green-900/20 transition-colors group-hover:bg-green-500 group-hover:text-white">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72 1.041 3.42 1.591 5.711 1.591h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest">WhatsApp</p>
                    <p className="text-sm font-black dark:text-zinc-100">055 555 69 63</p>
                  </div>
                </a>

                {/* Facebook */}
                <a 
                  href="https://facebook.com/parabournex" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm transition-all hover:border-blue-600 group"
                >
                  <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/20 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Facebook</p>
                    <p className="text-sm font-black dark:text-zinc-100 text-nowrap">parabournex</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Kiçik bir 'Canlı Online' indikatoru */}
            <div className="px-6 py-4 rounded-2xl bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900/30 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
              </span>
              <p className="text-[11px] font-bold text-indigo-600 uppercase">Hazırda 124 nəfər onlayndır</p>
            </div>
          </div>
        </div>

        {/* --- GİRİŞ PORTALI --- */}
        <section className="mt-40 w-full pb-10 text-left">
          <div className="mb-12 text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-white sm:text-4xl italic">
              Giriş Portalı
            </h2>
            <p className="mt-2 text-zinc-500 text-sm italic">Rolunuza uyğun paneli seçərək fəaliyyətə başlayın</p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-3">
            {/* Şagird Kartı */}
            <div className="group relative flex flex-col items-start rounded-3xl border border-zinc-100 bg-white p-8 transition-all hover:border-indigo-500 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold italic">Öyrənci Paneli</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 italic">Kurslar, onlayn imtahanlar və gündəlik tapşırıqlar.</p>
              <Link href="/dashboard/student" className="mt-8 flex items-center font-bold text-indigo-600 transition-all group-hover:gap-2">
                Daxil ol <span>→</span>
              </Link>
            </div>

            {/* Valideyn Kartı */}
            <div className="group relative flex flex-col items-start rounded-3xl border border-zinc-100 bg-white p-8 transition-all hover:border-emerald-500 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold italic">İzləmə Paneli</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 italic">İstifadəçi inkişafı, nəticələr və statistik hesabatlar.</p>
              <Link href="/dashboard/parent" className="mt-8 flex items-center font-bold text-emerald-600 transition-all group-hover:gap-2">
                Giriş <span>→</span>
              </Link>
            </div>

            {/* Müəllim Kartı */}
            <div className="group relative flex flex-col items-start rounded-3xl border border-zinc-100 bg-white p-8 transition-all hover:border-violet-500 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 dark:bg-violet-900/20">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold italic">İdarəetmə</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 italic">Materialların əlavə edilməsi, imtahan yaradılması və idarəetmə.</p>
              <Link href="/dashboard/teacher" className="mt-8 flex items-center font-bold text-violet-600 transition-all group-hover:gap-2">
                Panel <span>→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER (Kompakt) --- */}
      <footer className="mt-auto border-t border-zinc-100 py-10 px-6 sm:px-16 dark:border-zinc-800/50">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest italic">
            © 2026 PLATFORMA • Bilik Sərhəd Tanımır
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[10px] font-bold text-zinc-400 hover:text-indigo-600 transition-colors uppercase tracking-widest">Məxfilik</Link>
            <Link href="/terms" className="text-[10px] font-bold text-zinc-400 hover:text-indigo-600 transition-colors uppercase tracking-widest">Şərtlər</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
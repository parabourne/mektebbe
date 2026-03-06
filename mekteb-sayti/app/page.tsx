import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans">
      
      {/* --- HERO SECTION --- */}
      <main className="flex flex-col items-center justify-center px-6 py-20 text-center sm:px-16 sm:py-32">
        
        <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight sm:text-7xl">
          Bilgi Sərhəd Tanımır <br />
          <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent italic">İndi Öyrənməyə Başla</span>
        </h1>
        
        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400 italic">
          İstədiyin yerdən, istədiyin zaman interaktiv dərslərə qoşul, onlayn imtahanlarda özünü sına və rəqəmsal dünyada uğur qazan.
        </p>

        {/* --- GİRİŞ PORTALI --- */}
        <section className="mt-32 w-full max-w-6xl pb-10 text-left">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-white sm:text-4xl italic">
              Giriş Portalı
            </h2>
            <p className="mt-2 text-zinc-500 text-sm italic">Rolunuza uyğun paneli seçərək fəaliyyətə başlayın</p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-3">
            
            {/* Şagird */}
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

            {/* Valideyn */}
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

            {/* Müəllim/Admin */}
            <div className="group relative flex flex-col items-start rounded-3xl border border-zinc-100 bg-white p-8 transition-all hover:border-violet-500 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 dark:bg-violet-900/20">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold italic">İdarəetmə</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 italic">Materialların əlavə edilməsi, imtahan yaradılması və istifadəçi idarəetməsi.</p>
              <Link href="/dashboard/teacher" className="mt-8 flex items-center font-bold text-violet-600 transition-all group-hover:gap-2">
                Panel <span>→</span>
              </Link>
            </div>

          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="mt-auto border-t border-zinc-100 py-12 px-6 sm:px-16 dark:border-zinc-800/50">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-zinc-500 italic font-medium">
            © 2026 Onlayn Təhsil Platforması. Bilik hər kəs üçündür.
          </p>
          <div className="flex space-x-6 text-sm font-medium text-zinc-400">
            <Link href="/privacy" className="hover:text-indigo-600 transition-colors">Məxfilik</Link>
            <Link href="/terms" className="hover:text-indigo-600 transition-colors">Şərtlər</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
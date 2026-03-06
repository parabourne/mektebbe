import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Layihə artıq məktəb deyil, onlayn platformadır - Metadata yeniləndi
export const metadata: Metadata = {
  title: "PLATFORMA 2026 | Onlayn Təhsil və Sınaq Sistemi",
  description: "İnteraktiv dərslər, onlayn sınaq imtahanları və tədris materialları ilə biliklərinizi artırın. Bilgi sərhəd tanımır.",
  keywords: ["onlayn təhsil", "sınaq imtahanı", "onlayn sınaq", "təhsil resursları", "şagird paneli", "imtahan sistemi"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-300`}
      >
        {/* Navbar burada qalır, lakin daxilindəki məntiqlə ana səhifədə özünü gizlədir */}
        <Navbar />

        <div className="relative flex min-h-screen flex-col">
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
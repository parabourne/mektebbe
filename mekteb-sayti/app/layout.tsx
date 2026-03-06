import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Navbar-ı buradan import edirik

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Müasir Təhsil Məktəbi | Gələcəyə Addım",
  description: "Yüksək keyfiyyətli təhsil, peşəkar müəllim heyəti və innovativ tədris proqramı ilə övladınızın gələcəyini bizimlə qurun.",
  keywords: ["məktəb", "təhsil", "onlayn jurnal", "şagird", "valideyn paneli", "imtahan sistemi"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50`}
      >
        {/* Navbar bütün səhifələrdə görünəcək */}
        <Navbar />

        <div className="relative flex min-h-screen flex-col">
          {/* Səhifə məzmunu bura gəlir */}
          <main className="flex-grow">
            {children}
          </main>

          {/* İstəsən bura ümumi bir Footer də əlavə edə bilərsən */}
        </div>
      </body>
    </html>
  );
}
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ExamPage() {
  const router = useRouter();

  // 1. Şagird və İmtahan Vəziyyəti
  const [studentInfo, setStudentInfo] = useState({
    firstName: "",
    lastName: "",
    schoolId: "",
    grade: "",
    subject: ""
  });
  
  const [isStarted, setIsStarted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(1500); // 25 dəqiqə

  // 2. Nümunə Suallar
  const questions = [
    { id: 1, q: "2x + 5 = 15 tənliyində x-i tapın.", options: ["2", "5", "10", "15"], correct: "5" },
    { id: 2, q: "Azərbaycanın ən hündür dağı hansıdır?", options: ["Şahdağ", "Bazardüzü", "Tufandağ", "Murovdağ"], correct: "Bazardüzü" },
    { id: 3, q: "Hansı proqramlaşdırma dili veb-saytların strukturunu qurur?", options: ["Python", "CSS", "HTML", "JS"], correct: "HTML" },
    { id: 4, q: "Suyun qaynama temperaturu neçə dərəcədir?", options: ["50°C", "80°C", "100°C", "120°C"], correct: "100°C" },
  ];

  // 3. Funksiyalar (Xətanın qarşısını alan əsas hissə)
  const handleSelect = (qIndex: number, option: string) => {
    if (isSubmitted) return; 
    setAnswers({ ...answers, [qIndex]: option });
  };

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.values(studentInfo).some(val => val === "")) {
      alert("Xahiş olunur bütün məlumatları daxil edin və fənni seçin!");
      return;
    }
    setIsStarted(true);
  };

  useEffect(() => {
    if (isStarted && timeLeft > 0 && !isSubmitted) {
      const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && isStarted) {
      setIsSubmitted(true);
    }
  }, [isStarted, timeLeft, isSubmitted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const calculateResult = () => {
    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.correct) correctCount++;
    });
    return {
      correct: correctCount,
      score: Math.round((correctCount / questions.length) * 100)
    };
  };

  const res = calculateResult();

  // 4. GİRİŞ FORMASI (İmtahan başlamazdan əvvəl)
  if (!isStarted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950 p-6 font-sans">
        <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl dark:bg-zinc-900 border dark:border-zinc-800">
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-black text-blue-600 italic">İmtahan Girişi</h2>
            <p className="text-sm text-zinc-500 mt-2">Məlumatlarınızı daxil edin və fənni seçin</p>
          </div>
          <form onSubmit={handleStart} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input 
                type="text" placeholder="Ad" required
                className="p-3 rounded-xl border dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={(e) => setStudentInfo({...studentInfo, firstName: e.target.value})}
              />
              <input 
                type="text" placeholder="Soyad" required
                className="p-3 rounded-xl border dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={(e) => setStudentInfo({...studentInfo, lastName: e.target.value})}
              />
            </div>
            <input 
              type="text" placeholder="Məktəb Nömrəsi (ID)" required
              className="w-full p-3 rounded-xl border dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={(e) => setStudentInfo({...studentInfo, schoolId: e.target.value})}
            />
            <select 
              className="w-full p-3 rounded-xl border dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 outline-none"
              onChange={(e) => setStudentInfo({...studentInfo, grade: e.target.value})}
              required
            >
              <option value="">Sinif Seçin</option>
              <option value="9">9-cu sinif</option>
              <option value="10">10-cu sinif</option>
              <option value="11">11-ci sinif</option>
            </select>
            <select 
              className="w-full p-3 rounded-xl border dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 outline-none"
              onChange={(e) => setStudentInfo({...studentInfo, subject: e.target.value})}
              required
            >
              <option value="">Fənn Seçin</option>
              <option value="Riyaziyyat">Riyaziyyat</option>
              <option value="Fizika">Fizika</option>
              <option value="Azərbaycan dili">Azərbaycan dili</option>
              <option value="Kimya">Kimya</option>
            </select>
            <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-95">
              İmtahana Başla
            </button>
          </form>
        </div>
      </div>
    );
  }

  // 5. İMTAHAN VƏ NƏTİCƏ SƏHİFƏSİ
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pb-20 print:bg-white font-sans">
      <header className="sticky top-0 z-20 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border-b px-6 py-4 print:relative print:border-b-2 print:border-black">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-xl font-black text-blue-600 print:text-black">
              {studentInfo.subject} KSQ — {studentInfo.firstName} {studentInfo.lastName}
            </h1>
            <p className="text-xs font-bold text-zinc-400 print:text-black italic">
              Sinif: {studentInfo.grade} • №: {studentInfo.schoolId} • 6 Mart, 2026
            </p>
          </div>
          {!isSubmitted && (
            <div className="px-5 py-2 rounded-2xl bg-zinc-100 dark:bg-zinc-800 font-mono text-xl font-bold print:hidden">
              {formatTime(timeLeft)}
            </div>
          )}
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6 space-y-8 mt-6">
        {isSubmitted && (
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border-4 border-blue-600 text-center shadow-2xl print:shadow-none print:border-2">
            <h2 className="text-3xl font-black italic mb-6">İmtahan Hesabatı</h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-2xl border border-green-100">
                <p className="text-xs font-bold text-green-600 uppercase tracking-widest">Düzgün Cavab</p>
                <p className="text-3xl font-black">{res.correct} / {questions.length}</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100">
                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Yekun Bal</p>
                <p className="text-3xl font-black">{res.score}</p>
              </div>
            </div>
            <div className="flex gap-4 print:hidden">
              <button 
                onClick={() => router.push("/dashboard/student")} 
                className="flex-1 py-4 bg-zinc-100 dark:bg-zinc-800 rounded-2xl font-bold hover:bg-zinc-200 transition-colors"
              >
                Panelə Qayıt
              </button>
              <button 
                onClick={() => window.print()} 
                className="flex-1 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-500/30 active:scale-95 transition-all"
              >
                Nəticələri Çap Et
              </button>
            </div>
          </div>
        )}

        {questions.map((q, idx) => (
          <div key={q.id} className={`bg-white dark:bg-zinc-900 rounded-3xl p-8 border transition-all print:shadow-none print:border-zinc-300 print:break-inside-avoid ${
            isSubmitted ? (answers[idx] === q.correct ? "border-green-500 bg-green-50/10" : "border-red-500 bg-red-50/10") : "border-zinc-100 dark:border-zinc-800 shadow-sm"
          }`}>
            <div className="flex items-start gap-4 mb-6">
              <span className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                isSubmitted 
                  ? (answers[idx] === q.correct ? "bg-green-600 text-white" : "bg-red-600 text-white") 
                  : "bg-blue-600 text-white"
              }`}>
                {idx + 1}
              </span>
              <h3 className="text-xl font-bold dark:text-white leading-relaxed pt-1 italic">{q.q}</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {q.options.map((option) => {
                const isSelected = answers[idx] === option;
                const isCorrect = option === q.correct;
                
                let btnStyle = "border-zinc-100 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400";
                
                if (isSelected && !isSubmitted) btnStyle = "border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-bold";
                if (isSubmitted) {
                  if (isCorrect) btnStyle = "border-green-600 bg-green-100 text-green-800 font-bold";
                  else if (isSelected) btnStyle = "border-red-600 bg-red-100 text-red-800 font-bold";
                }

                return (
                  <button key={option} onClick={() => handleSelect(idx, option)} className={`p-5 rounded-2xl border-2 text-left transition-all flex justify-between items-center group ${btnStyle}`}>
                    <span>{option}</span>
                    <div className={`w-5 h-5 rounded-full border-2 transition-all ${isSelected ? "border-current bg-current" : "border-zinc-300"}`}>
                        {isSelected && <div className="w-1.5 h-1.5 bg-white rounded-full m-auto mt-1"></div>}
                    </div>
                  </button>
                );
              })}
            </div>
            {isSubmitted && answers[idx] !== q.correct && (
              <p className="mt-4 text-sm font-bold text-green-600 italic">Doğru cavab: {q.correct}</p>
            )}
          </div>
        ))}

        {!isSubmitted && (
          <div className="pt-10">
            <button 
              onClick={() => {
                const answered = Object.keys(answers).length;
                if (answered < questions.length) {
                  alert(`Xahiş olunur bütün sualları cavablandırın! (${answered}/${questions.length})`);
                } else if (confirm("İmtahanı bitirmək istədiyinizə əminsiniz?")) {
                  setIsSubmitted(true);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="w-full py-5 bg-blue-600 text-white rounded-3xl font-black text-xl shadow-xl shadow-blue-500/30 transition-all hover:bg-blue-700 active:scale-95"
            >
              İmtahanı Bitir və Nəticəni Gör
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
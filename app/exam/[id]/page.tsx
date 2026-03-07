"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import questionBank from "@/data/questions.json";

export default function ExamPage() {
  const router = useRouter();
  const params = useParams();
  
  const [studentInfo, setStudentInfo] = useState({ 
    firstName: "", 
    lastName: "", 
    schoolName: "", 
    grade: "", // URL-dən avtomatik gələcək
    subject: "" // URL-dən avtomatik gələcək
  });
  
  const [isStarted, setIsStarted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(1500);
  const [currentQuestions, setCurrentQuestions] = useState<any[]>([]);

  // URL-dən həm fənni (id), həm də sinfi (grade) götürürük
  useEffect(() => {
    if (params.id) {
      const subjectFromUrl = decodeURIComponent(params.id as string);
      const formattedSubject = subjectFromUrl.charAt(0).toUpperCase() + subjectFromUrl.slice(1);
      
      // URL-dəki ?grade=X hissəsini oxuyuruq
      const urlParams = new URLSearchParams(window.location.search);
      const gradeFromUrl = urlParams.get("grade") || "";

      setStudentInfo(prev => ({ 
        ...prev, 
        subject: formattedSubject,
        grade: gradeFromUrl 
      }));
    }
  }, [params.id]);

  const handleSelect = (qIndex: number, option: string) => {
    if (isSubmitted) return; 
    setAnswers({ ...answers, [qIndex]: option });
  };

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    // Artıq sinif seçimi inputu yoxdur, yalnız digər xanaları yoxlayırıq
    if (!studentInfo.firstName || !studentInfo.lastName || !studentInfo.schoolName) {
      alert("Xahiş olunur bütün xanaları doldurun!");
      return;
    }

    const subjectData = (questionBank as any)[studentInfo.subject] || {};
    const filteredQuestions = subjectData[studentInfo.grade] || [];
    
    if (filteredQuestions.length === 0) {
      alert(`${studentInfo.grade}-cu sinif üçün ${studentInfo.subject} sualları hələ əlavə edilməyib!`);
      return;
    }
    
    setCurrentQuestions(filteredQuestions);
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
    currentQuestions.forEach((q, idx) => {
      if (answers[idx] === q.correct) correctCount++;
    });
    return { 
      correct: correctCount, 
      score: currentQuestions.length > 0 ? Math.round((correctCount / currentQuestions.length) * 100) : 0 
    };
  };

  const res = calculateResult();

  if (!isStarted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950 p-4 font-sans text-black dark:text-white">
        <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl dark:bg-zinc-900 border dark:border-zinc-800">
          <h2 className="text-xl font-black text-blue-600 text-center mb-4 italic uppercase">Sınaq Girişi</h2>
          <form onSubmit={handleStart} className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <input type="text" placeholder="Ad" required className="p-3 text-sm rounded-xl border dark:bg-zinc-800 dark:border-zinc-700 outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" onChange={(e) => setStudentInfo({...studentInfo, firstName: e.target.value})} />
              <input type="text" placeholder="Soyad" required className="p-3 text-sm rounded-xl border dark:bg-zinc-800 dark:border-zinc-700 outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" onChange={(e) => setStudentInfo({...studentInfo, lastName: e.target.value})} />
            </div>
            <input type="text" placeholder="Məktəb Adı / №" required className="w-full p-3 text-sm rounded-xl border dark:bg-zinc-800 dark:border-zinc-700 outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" onChange={(e) => setStudentInfo({...studentInfo, schoolName: e.target.value})} />
            
            {/* Dinamik olaraq seçilmiş fənn və sinif məlumatı */}
            <div className="grid grid-cols-2 gap-2">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 text-center">
                    <span className="text-[10px] font-bold text-blue-600 block uppercase tracking-tighter">Fənn</span>
                    <span className="text-xs font-black dark:text-white uppercase italic">{studentInfo.subject}</span>
                </div>
                <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-100 text-center">
                    <span className="text-[10px] font-bold text-orange-600 block uppercase tracking-tighter">Sinif</span>
                    <span className="text-xs font-black dark:text-white uppercase italic">{studentInfo.grade}</span>
                </div>
            </div>

            <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-xs shadow-lg active:scale-95 transition-all">Sınağı Başlat</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pb-10 print:bg-white font-sans text-black dark:text-white">
      <header className="sticky top-0 z-20 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border-b px-4 py-3 print:relative print:border-b-2 print:border-black print:py-2">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-lg font-black text-blue-600 print:text-xs uppercase leading-none italic">
              {studentInfo.subject} KSQ — {studentInfo.firstName} {studentInfo.lastName}
            </h1>
            <p className="text-xs font-bold text-zinc-400 print:text-[8px] mt-1 uppercase italic">
              Sinif: {studentInfo.grade} • Məktəb: {studentInfo.schoolName}
            </p>
          </div>
          {!isSubmitted && <div className="px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 font-mono text-xl font-bold print:hidden">{formatTime(timeLeft)}</div>}
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-4 md:p-8 space-y-4 print:p-0 print:space-y-2">
        {isSubmitted && (
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border-4 border-blue-600 text-center shadow-xl print:border-2 print:p-4 print:mb-6">
            <h2 className="text-2xl font-black italic mb-2 uppercase print:text-lg">İmtahan Hesabatı</h2>
            <p className="text-lg font-bold print:text-xs">Düzgün: <span className="text-green-600">{res.correct} / {currentQuestions.length}</span> — Bal: <span className="text-blue-600">{res.score}</span></p>
            <div className="flex gap-4 mt-4 print:hidden justify-center">
              <button onClick={() => router.push("/")} className="px-6 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-xl font-bold hover:bg-zinc-200 transition-colors">Geri</button>
              <button onClick={() => window.print()} className="px-6 py-2 bg-blue-600 text-white rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-all">Nəticəni Çap Et</button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 print:grid-cols-2 print:gap-x-4 print:gap-y-2">
          {currentQuestions.map((q, idx) => (
            <div key={q.id} className={`bg-white dark:bg-zinc-900 rounded-2xl p-6 border print:border-zinc-300 print:rounded-lg print:p-3 print:break-inside-avoid ${
              isSubmitted ? (answers[idx] === q.correct ? "border-green-500 bg-green-50/5" : "border-red-500 bg-red-50/5") : "border-zinc-100 dark:border-zinc-800 shadow-sm"
            }`}>
              <div className="flex items-start gap-3 mb-4 print:mb-2">
                <span className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center font-bold print:w-5 print:h-5 print:text-[10px] ${isSubmitted ? (answers[idx] === q.correct ? "bg-green-600" : "bg-red-600") : "bg-blue-600"} text-white`}>
                  {idx + 1}
                </span>
                <h3 className="text-lg font-bold leading-tight print:text-[10px] pt-1">{q.q}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 print:grid-cols-2 print:gap-1.5">
                {q.options.map((option: string) => {
                  const isSelected = answers[idx] === option;
                  const isCorrect = option === q.correct;
                  let btnStyle = "border-zinc-100 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400";
                  
                  if (isSelected && !isSubmitted) btnStyle = "border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-700 font-bold";
                  if (isSubmitted) {
                    if (isCorrect) btnStyle = "border-green-600 bg-green-50 text-green-800 font-bold";
                    else if (isSelected) btnStyle = "border-red-600 bg-red-50 text-red-800 font-bold";
                  }
                  
                  return (
                    <button key={option} onClick={() => handleSelect(idx, option)} className={`p-4 text-sm rounded-xl border-2 flex justify-between items-center transition-all print:p-1.5 print:text-[8px] print:border ${btnStyle}`}>
                      <span className="truncate">{option}</span>
                      <div className={`w-4 h-4 rounded-full border-2 print:w-2 print:h-2 print:border ${isSelected ? "bg-current border-current" : "border-zinc-300"}`}></div>
                    </button>
                  );
                })}
              </div>
              {isSubmitted && answers[idx] !== q.correct && (
                <p className="mt-2 text-sm font-bold text-green-600 italic print:text-[7px]">Doğru cavab: {q.correct}</p>
              )}
            </div>
          ))}
        </div>

        {!isSubmitted && (
          <div className="pt-8">
            <button 
              onClick={() => {
                const answered = Object.keys(answers).length;
                if (answered < currentQuestions.length) alert(`Bütün sualları cavablandırın! (${answered}/${currentQuestions.length})`);
                else if (confirm("İmtahanı bitirmək istədiyinizə əminsiniz?")) { 
                  setIsSubmitted(true); 
                  window.scrollTo({ top: 0, behavior: 'smooth' }); 
                }
              }}
              className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg shadow-xl hover:bg-blue-700 active:scale-95 transition-all"
            >
              İmtahanı Bitir və Nəticəni Gör
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
import { useState, useEffect, useMemo } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useQuiz } from "@/components/QuizContext";
import { specialists } from "@/data/specialists";
import { GOALS, QUIZ_DATA } from "@/data/quiz-data";
import {
  X,
  ArrowLeft,
  ArrowRight,
  Heart,
  Baby,
  Dumbbell,
  Sparkles,
  Shield,
  Flower2,
  Zap,
  Moon,
  Activity,
  Coffee,
  CheckCircle2,
  Star,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Info,
} from "lucide-react";

// Removed GOALS from here since they are now in quiz-data.ts

const GOAL_TO_CATEGORY: Record<string, string[]> = {
  "mens-health": ["Medical & Clinical", "Fitness & Coaching"],
  "womens-health": ["Health & Wellness", "Medical & Clinical"],
  "skin-health": ["Health & Wellness", "Medical & Clinical"],
  "anti-ageing": ["Health & Wellness", "Medical & Clinical"],
  "fertility": ["Medical & Clinical", "Health & Wellness"],
  "childrens-health": ["Fitness & Coaching", "Medical & Clinical"],
};

// Activity levels, sleep, and concerns removed because Questions are now entirely dynamic per GOAL

// Simple mock available times
const AVAILABLE_TIMES = ["09:00 AM", "10:30 AM", "01:15 PM", "02:45 PM", "04:00 PM", "05:30 PM"];

const getDaysInWeek = (weekOffset: number) => {
  const now = new Date();
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - now.getDay() + 1 + weekOffset * 7);
  const days = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(startOfWeek);
    d.setDate(startOfWeek.getDate() + i);
    days.push(d);
  }
  return days;
};

const DAY_NAMES = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const Quiz = () => {
  const { isOpen, closeQuiz, preselectedGoal } = useQuiz();
  const [step, setStep] = useState(0);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Step 4 state
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [weekOffset, setWeekOffset] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setStep(0);
      setSelectedGoal(preselectedGoal || null);
      setAnswers({});
      setName("");
      setEmail("");
      setPhone("");
      setSubmitted(false);
      setSelectedDate(null);
      setSelectedTime(null);
      setWeekOffset(0);
    }
  }, [isOpen, preselectedGoal]);

  // Pick a specialist based on selected goal
  const assignedSpecialist = useMemo(() => {
    if (!selectedGoal) return specialists[0];
    const preferredCategories = GOAL_TO_CATEGORY[selectedGoal] || [];
    const match = specialists.find((s) => preferredCategories.includes(s.category));
    return match || specialists[0];
  }, [selectedGoal]);

  const weekDays = useMemo(() => getDaysInWeek(weekOffset), [weekOffset]);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Mock: days with availability (future weekdays)
  const hasAvailability = (d: Date) => {
    return d >= today && d.getDay() !== 0 && d.getDay() !== 6;
  };

  const handleAnswer = (questionId: string, answer: string, type: "single" | "multiple") => {
    setAnswers((prev) => {
      const current = prev[questionId];
      if (type === "single") {
        return { ...prev, [questionId]: answer };
      } else {
        const arr = Array.isArray(current) ? current : [];
        if (arr.includes(answer)) {
          return { ...prev, [questionId]: arr.filter(a => a !== answer) };
        } else {
          return { ...prev, [questionId]: [...arr, answer] };
        }
      }
    });
  };

  const canContinue = () => {
    if (step === 0) return selectedGoal !== null;
    if (step === 1 || step === 2) {
      if (!selectedGoal) return false;
      const quiz = QUIZ_DATA[selectedGoal];
      if (!quiz) return true;
      const qStart = step === 1 ? 0 : 3;
      const qEnd = step === 1 ? 3 : quiz.questions.length;
      return quiz.questions.slice(qStart, qEnd).every(q => {
        const ans = answers[q.id];
        if (q.type === "multiple") return Array.isArray(ans) && ans.length > 0;
        return typeof ans === "string" && ans.trim().length > 0;
      });
    }
    if (step === 3) return name.trim().length > 0 && email.trim().length > 0;
    if (step === 4) return selectedDate !== null && selectedTime !== null;
    return true;
  };

  const handleSubmit = () => {
    console.log("Quiz submitted:", {
      goal: selectedGoal,
      answers,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      specialist: assignedSpecialist.name,
      date: selectedDate,
      time: selectedTime,
    });
    setSubmitted(true);
  };

  const totalSteps = 5;
  const progress = ((step + 1) / totalSteps) * 100;

  const stepLabels = ["Health Goals", "Assessment Part 1", "Assessment Part 2", "Your Details", "Book Specialist"];

  if (submitted) {
    return (
      <Dialog open={isOpen} onOpenChange={(open) => !open && closeQuiz()}>
        <DialogContent className="max-w-lg p-0 gap-0 border-none overflow-hidden [&>button]:hidden">
          <div className="p-8 md:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Thank You, {name.split(" ")[0]}!</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              Your consultation with <strong>{assignedSpecialist.name}</strong> has been requested for <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We'll send a confirmation to <strong>{email}</strong> shortly.
            </p>
            <Button onClick={closeQuiz} size="lg" className="w-full text-base">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeQuiz()}>
      <DialogContent className="max-w-4xl w-[95vw] p-0 gap-0 border-none overflow-hidden max-h-[90vh] bg-background shadow-2xl [&>button]:hidden sm:rounded-2xl">
        {/* Scrollable Container wrapper to keep layout flow intact */}
        <div className="relative flex flex-col w-full max-h-[90vh] overflow-y-auto overflow-x-hidden">
          {/* Header */}
          <div className="sticky top-0 bg-background z-20 border-b border-border w-full shadow-sm">
            <div className="flex items-center justify-between px-6 py-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              Step {step + 1} of {totalSteps}
            </span>
            <span className="text-xs text-muted-foreground">
              {stepLabels[step]}
            </span>
            <button onClick={closeQuiz} className="text-muted-foreground hover:text-foreground transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="h-1 bg-muted">
            <div
              className="h-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        <div className="p-6 md:p-8">
          {/* Step 1: Goals */}
          {step === 0 && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">What is your primary health goal?</h2>
              <p className="text-muted-foreground mb-8">Select one category so we can tailor your assessment accurately.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {GOALS.map((goal) => {
                  const Icon = goal.icon;
                  const selected = selectedGoal === goal.id;
                  return (
                    <button
                      key={goal.id}
                      onClick={() => setSelectedGoal(goal.id)}
                      className={`relative p-5 rounded-xl border-2 text-left transition-all duration-200 ${
                        selected
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-muted-foreground/30 bg-card"
                      }`}
                    >
                      {selected && (
                        <CheckCircle2 className="absolute top-3 right-3 w-5 h-5 text-primary" />
                      )}
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-sm">{goal.label}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{goal.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 2 & 3: Dynamic Quiz */}
          {(step === 1 || step === 2) && selectedGoal && QUIZ_DATA[selectedGoal] && (
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-1">{QUIZ_DATA[selectedGoal].title}</h2>
              <p className="text-muted-foreground mb-4 text-sm">Help us understand your specific situation to personalise your protocol.</p>
              
              <div className="space-y-5">
                {QUIZ_DATA[selectedGoal].questions.slice(step === 1 ? 0 : 3, step === 1 ? 3 : QUIZ_DATA[selectedGoal].questions.length).map((q, idx) => {
                   const ans = answers[q.id];
                   const overallIdx = (step === 1 ? 0 : 3) + idx;
                   return (
                     <div key={q.id}>
                       <div className="flex items-start gap-2 mb-2">
                         <span className="w-5 h-5 shrink-0 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center font-bold mt-0.5">{overallIdx + 1}</span>
                         <div>
                           <h3 className="font-semibold text-sm leading-tight">{q.label}</h3>
                           {q.type === "multiple" && <p className="text-[10px] text-muted-foreground">Select all that apply</p>}
                         </div>
                       </div>
                       
                       <div className="flex flex-wrap gap-2 pl-7">
                         {q.options.map((opt) => {
                           const isSelected = q.type === "multiple" 
                             ? (Array.isArray(ans) && ans.includes(opt))
                             : ans === opt;
                             
                           return (
                             <button
                               key={opt}
                               onClick={() => handleAnswer(q.id, opt, q.type)}
                               className={`px-2.5 py-1.5 rounded-md border hover:scale-[1.02] active:scale-95 text-left transition-all duration-200 ${
                                 isSelected
                                   ? "border-primary bg-primary/10 text-primary font-medium"
                                   : "border-border hover:border-muted-foreground/30 bg-card text-muted-foreground"
                               }`}
                             >
                                <div className="flex items-center gap-1.5">
                                  {isSelected && <CheckCircle2 className="w-3 h-3 shrink-0" />}
                                  <span className="text-[11px] sm:text-xs leading-tight">{opt}</span>
                                </div>
                             </button>
                           )
                         })}
                       </div>
                     </div>
                   );
                })}
              </div>
            </div>
          )}

          {/* Step 4: Contact */}
          {step === 3 && (
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Personalise Your Protocol</h2>
                <p className="text-muted-foreground mb-8">Enter your details so we can tailor recommendations to your profile.</p>

                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">Full Name</label>
                    <Input placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} className="h-12 text-base" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">Email Address</label>
                    <Input type="email" placeholder="john@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="h-12 text-base" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                      Phone Number <span className="text-muted-foreground/60">(optional)</span>
                    </label>
                    <Input type="tel" placeholder="+44 7700 000000" value={phone} onChange={(e) => setPhone(e.target.value)} className="h-12 text-base" />
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="bg-secondary rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-sm">Why we need this</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-xs">Precision-Engineered</h4>
                      <p className="text-xs text-muted-foreground mt-1">Your protocol is calculated based on your unique quiz answers and biological markers.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-xs">Private & Secure</h4>
                      <p className="text-xs text-muted-foreground mt-1">We never share your health data with third parties. All data is encrypted at rest.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-xs">Expert Review</h4>
                      <p className="text-xs text-muted-foreground mt-1">A specialist will personally review your responses and reach out within 24 hours.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Specialist Booking */}
          {step === 3 && (
            <div>
              {/* Hero banner */}
              <div className="bg-secondary rounded-xl p-6 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-1">Discuss Your Protocol with a Specialist</h2>
                <p className="text-muted-foreground text-sm">Review your personalised health roadmap with a certified expert.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Left: Specialist + Calendar */}
                <div className="md:col-span-2 space-y-5">
                  {/* Specialist Card */}
                  <div className="border border-border rounded-xl p-5">
                    <div className="flex items-start gap-4">
                      <div className="relative flex-shrink-0">
                        <img
                          src={assignedSpecialist.image}
                          alt={assignedSpecialist.name}
                          className="w-14 h-14 rounded-full object-cover"
                        />
                        <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-primary border-2 border-background" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-bold text-base">{assignedSpecialist.name}</h3>
                            <p className="text-primary text-xs font-semibold">{assignedSpecialist.role}</p>
                          </div>
                          <span className="flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full whitespace-nowrap">
                            <Star className="w-3 h-3 fill-current" />
                            4.9
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{assignedSpecialist.bio[0]?.slice(0, 150)}…</p>
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {assignedSpecialist.credentials.slice(0, 3).map((c) => (
                            <span key={c} className="text-[10px] font-semibold uppercase tracking-wider bg-secondary px-2 py-1 rounded">
                              {c.length > 25 ? c.slice(0, 25) + "…" : c}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Calendar */}
                  <div className="border border-border rounded-xl p-5">
                    <div className="flex items-center justify-between mb-5">
                      <h3 className="font-bold text-base">Select Date & Time</h3>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => setWeekOffset(Math.max(0, weekOffset - 1))}
                          disabled={weekOffset === 0}
                          className="p-1 rounded hover:bg-secondary disabled:opacity-30 transition-colors"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setWeekOffset(weekOffset + 1)}
                          className="p-1 rounded hover:bg-secondary transition-colors"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-7 sm:grid-cols-[repeat(7,1fr)_auto] gap-x-1 gap-y-0">
                      {/* Day headers */}
                      {DAY_NAMES.map((d) => (
                        <div key={d} className="text-center text-[10px] font-semibold tracking-widest uppercase text-muted-foreground pb-2">
                          {d}
                        </div>
                      ))}
                      <div className="hidden sm:block" />

                      {/* Day numbers */}
                      {weekDays.map((d) => {
                        const dateStr = d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
                        const isSelected = selectedDate === dateStr;
                        const available = hasAvailability(d);
                        const isToday = d.toDateString() === new Date().toDateString();
                        return (
                          <button
                            key={dateStr}
                            disabled={!available}
                            onClick={() => { setSelectedDate(dateStr); setSelectedTime(null); }}
                            className={`py-3 rounded-lg text-center transition-all duration-200 relative ${
                              isSelected
                                ? "bg-primary text-primary-foreground font-bold"
                                : available
                                  ? "hover:bg-secondary text-foreground"
                                  : "text-muted-foreground/40"
                            }`}
                          >
                            <span className={`text-sm ${isToday && !isSelected ? "font-bold" : ""}`}>{d.getDate()}</span>
                            {available && (
                              <span className={`block w-1 h-1 rounded-full mx-auto mt-1 ${isSelected ? "bg-primary-foreground" : "bg-primary"}`} />
                            )}
                          </button>
                        );
                      })}

                      {/* Time slots */}
                      {selectedDate && (
                        <div className="col-span-7 sm:col-span-1 sm:row-span-2 sm:row-start-1 sm:col-start-8 sm:pl-4 pt-4 sm:pt-0">
                          <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground mb-3 hidden sm:block">
                            Available Times
                          </p>
                          <div className="grid grid-cols-2 sm:grid-cols-1 gap-2">
                            {AVAILABLE_TIMES.map((t) => (
                              <button
                                key={t}
                                onClick={() => setSelectedTime(t)}
                                className={`px-3 py-2 rounded-lg border text-xs font-medium transition-all duration-200 ${
                                  selectedTime === t
                                    ? "bg-primary text-primary-foreground border-primary"
                                    : "border-border hover:border-muted-foreground/30"
                                }`}
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right sidebar: Context */}
                <div className="space-y-5">
                  <div className="border border-border rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <BarChart3 className="w-4 h-4 text-primary" />
                      <h3 className="font-bold text-sm">Your Protocol Context</h3>
                    </div>

                    <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground mb-2">Primary Goal</p>
                    <div className="space-y-1.5 mb-5">
                      {(() => {
                        const goal = GOALS.find((g) => g.id === selectedGoal);
                        if (!goal) return null;
                        const Icon = goal.icon;
                        return (
                          <div className="flex items-center gap-2 text-sm">
                            <Icon className="w-4 h-4 text-primary" />
                            <span className="font-medium">{goal.label}</span>
                          </div>
                        );
                      })()}
                    </div>

                    {Object.keys(answers).length > 0 && (
                      <>
                        <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground mb-2">Quiz Insights</p>
                        <div className="space-y-2 mb-5">
                          {Object.entries(answers).slice(0, 3).map(([key, rawAns]) => {
                             const q = selectedGoal ? QUIZ_DATA[selectedGoal]?.questions.find(x => x.id === key) : null;
                             if (!q) return null;
                             const ansStr = Array.isArray(rawAns) ? rawAns.join(", ") : rawAns;
                             return (
                               <div key={key} className="text-xs">
                                 <span className="text-muted-foreground block mb-0.5">{q.label}</span>
                                 <div className="flex items-start gap-1.5">
                                   <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                                   <span className="font-medium">{ansStr.length > 50 ? ansStr.substring(0, 50) + "..." : ansStr}</span>
                                 </div>
                               </div>
                             );
                          })}
                        </div>
                      </>
                    )}
                  </div>

                  <div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
                    <div className="flex items-start gap-2">
                      <Info className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {assignedSpecialist.name.split(" ")[0]} will have access to your full health quiz results during the consultation to provide personalised advice.
                      </p>
                    </div>
                  </div>

                  <Button
                    onClick={handleSubmit}
                    disabled={!canContinue()}
                    size="lg"
                    className="w-full gap-2 text-base"
                  >
                    Confirm Booking
                    <ArrowRight className="w-4 h-4" />
                  </Button>

                  <p className="text-[10px] text-muted-foreground text-center leading-relaxed">
                    By booking, you agree to our Health Services Terms and Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer - hidden on step 5 since it has its own CTA */}
        {step < 4 && (
          <div className="sticky bottom-0 bg-background border-t border-border px-6 py-4 flex items-center justify-between">
            <button
              onClick={() => step > 0 && setStep(step - 1)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                step > 0 ? "text-muted-foreground hover:text-foreground" : "invisible"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>

            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground hidden sm:block">
                {step === 0 ? "Next: Assessment Part 1" : step === 1 ? "Next: Assessment Part 2" : step === 2 ? "Next: Your Details" : step === 3 ? "Next: Book Specialist" : ""}
              </span>
              <Button
                onClick={() => setStep(step + 1)}
                disabled={!canContinue()}
                className="gap-2"
              >
                Continue
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

          {/* Back button on step 5 */}
          {step === 4 && (
            <div className="sticky bottom-0 bg-background z-20 border-t border-border px-6 py-4 w-full">
              <button
                onClick={() => setStep(3)}
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Quiz;

import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useQuiz } from "@/components/QuizContext";
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
} from "lucide-react";

const GOALS = [
  { id: "mens-health", label: "Men's Health", desc: "Testosterone, energy & metabolic optimisation", icon: Shield },
  { id: "womens-health", label: "Women's Health", desc: "Hormones, fertility & holistic wellbeing", icon: Flower2 },
  { id: "skin-health", label: "Skin Health", desc: "Radiance, hydration & dermal nutrition", icon: Sparkles },
  { id: "anti-ageing", label: "Anti-Ageing", desc: "Longevity, cellular repair & vitality", icon: Heart },
  { id: "fertility", label: "Fertility", desc: "Reproductive health & preconception support", icon: Baby },
  { id: "childrens-health", label: "Children's Health", desc: "Growth, development & youth performance", icon: Dumbbell },
];

const ACTIVITY_LEVELS = [
  { id: "sedentary", label: "Sedentary", desc: "Desk job, little movement", icon: Coffee },
  { id: "lightly-active", label: "Lightly Active", desc: "Occasional walks or yoga", icon: Activity },
  { id: "moderately-active", label: "Moderately Active", desc: "Gym 3-4 times a week", icon: Dumbbell },
  { id: "highly-active", label: "Highly Active", desc: "Intense daily training", icon: Zap },
];

const SLEEP_OPTIONS = [
  { id: "under-5", label: "Under 5 hrs" },
  { id: "5-6", label: "5–6 hrs" },
  { id: "7-8", label: "7–8 hrs" },
  { id: "over-8", label: "8+ hrs" },
];

const CONCERNS = [
  "Low energy", "Weight management", "Stress & anxiety", "Poor sleep",
  "Skin issues", "Digestive problems", "Joint pain", "Brain fog",
];

const Quiz = () => {
  const { isOpen, closeQuiz, preselectedGoal } = useQuiz();
  const [step, setStep] = useState(0);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [activityLevel, setActivityLevel] = useState<string | null>(null);
  const [sleep, setSleep] = useState<string | null>(null);
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setStep(0);
      setSelectedGoals(preselectedGoal ? [preselectedGoal] : []);
      setActivityLevel(null);
      setSleep(null);
      setSelectedConcerns([]);
      setName("");
      setEmail("");
      setPhone("");
      setSubmitted(false);
    }
  }, [isOpen, preselectedGoal]);

  const toggleGoal = (id: string) => {
    setSelectedGoals((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
  };

  const toggleConcern = (c: string) => {
    setSelectedConcerns((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );
  };

  const canContinue = () => {
    if (step === 0) return selectedGoals.length > 0;
    if (step === 1) return activityLevel !== null && sleep !== null;
    if (step === 2) return name.trim().length > 0 && email.trim().length > 0;
    return true;
  };

  const handleSubmit = () => {
    // In production, send to backend
    console.log("Quiz submitted:", {
      goals: selectedGoals,
      activityLevel,
      sleep,
      concerns: selectedConcerns,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
    });
    setSubmitted(true);
  };

  const totalSteps = 3;
  const progress = ((step + 1) / totalSteps) * 100;

  if (submitted) {
    return (
      <Dialog open={isOpen} onOpenChange={(open) => !open && closeQuiz()}>
        <DialogContent className="max-w-lg p-0 gap-0 border-none overflow-hidden [&>button]:hidden">
          <div className="p-8 md:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Thank You, {name.split(" ")[0]}!</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We've received your health assessment. One of our specialists will review your responses and be in touch within 24 hours to discuss your personalised protocol.
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
      <DialogContent className="max-w-3xl p-0 gap-0 border-none overflow-hidden max-h-[90vh] overflow-y-auto [&>button]:hidden">
        {/* Header */}
        <div className="sticky top-0 bg-background z-10 border-b border-border">
          <div className="flex items-center justify-between px-6 py-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              Step {step + 1} of {totalSteps}
            </span>
            <span className="text-xs text-muted-foreground">
              {step === 0 ? "Health Goals" : step === 1 ? "Lifestyle Assessment" : "Your Details"}
            </span>
            <button onClick={closeQuiz} className="text-muted-foreground hover:text-foreground transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          {/* Progress bar */}
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
              <h2 className="text-2xl md:text-3xl font-bold mb-2">What are your primary health goals?</h2>
              <p className="text-muted-foreground mb-8">Select all that apply. We'll tailor your protocol based on your priorities.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {GOALS.map((goal) => {
                  const Icon = goal.icon;
                  const selected = selectedGoals.includes(goal.id);
                  return (
                    <button
                      key={goal.id}
                      onClick={() => toggleGoal(goal.id)}
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

          {/* Step 2: Lifestyle */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Lifestyle & Environment</h2>
              <p className="text-muted-foreground mb-8">Help us understand your daily patterns to personalise your protocol.</p>

              {/* Activity */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-semibold">1</span>
                  <h3 className="font-semibold">How would you rate your daily physical activity?</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {ACTIVITY_LEVELS.map((level) => {
                    const Icon = level.icon;
                    const selected = activityLevel === level.id;
                    return (
                      <button
                        key={level.id}
                        onClick={() => setActivityLevel(level.id)}
                        className={`p-4 rounded-xl border-2 text-center transition-all duration-200 ${
                          selected
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-muted-foreground/30 bg-card"
                        }`}
                      >
                        <Icon className={`w-5 h-5 mx-auto mb-2 ${selected ? "text-primary" : "text-muted-foreground"}`} />
                        <h4 className="font-semibold text-xs">{level.label}</h4>
                        <p className="text-[10px] text-muted-foreground mt-1">{level.desc}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sleep */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-semibold">2</span>
                  <h3 className="font-semibold">How many hours of restorative sleep do you get?</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {SLEEP_OPTIONS.map((opt) => {
                    const selected = sleep === opt.id;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => setSleep(opt.id)}
                        className={`p-4 rounded-xl border-2 text-center transition-all duration-200 ${
                          selected
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-muted-foreground/30 bg-card"
                        }`}
                      >
                        <Moon className={`w-5 h-5 mx-auto mb-2 ${selected ? "text-primary" : "text-muted-foreground"}`} />
                        <h4 className="font-semibold text-xs">{opt.label}</h4>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Concerns */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-semibold">3</span>
                  <h3 className="font-semibold">Any specific health concerns? <span className="text-muted-foreground font-normal">(optional)</span></h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {CONCERNS.map((c) => {
                    const selected = selectedConcerns.includes(c);
                    return (
                      <button
                        key={c}
                        onClick={() => toggleConcern(c)}
                        className={`px-4 py-2 rounded-full text-xs font-medium border transition-all duration-200 ${
                          selected
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-card text-foreground hover:border-muted-foreground/30"
                        }`}
                      >
                        {c}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Contact */}
          {step === 2 && (
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Personalise Your Protocol</h2>
                <p className="text-muted-foreground mb-8">Enter your details so we can tailor recommendations to your profile.</p>

                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-12 text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                      Phone Number <span className="text-muted-foreground/60">(optional)</span>
                    </label>
                    <Input
                      type="tel"
                      placeholder="+44 7700 000000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="h-12 text-base"
                    />
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
        </div>

        {/* Footer */}
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
              {step < totalSteps - 1 ? "Next: " + (step === 0 ? "Lifestyle Assessment" : "Your Details") : ""}
            </span>
            {step < totalSteps - 1 ? (
              <Button
                onClick={() => setStep(step + 1)}
                disabled={!canContinue()}
                className="gap-2"
              >
                Continue
                <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!canContinue()}
                size="lg"
                className="gap-2 px-8"
              >
                Submit
                <ArrowRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Quiz;

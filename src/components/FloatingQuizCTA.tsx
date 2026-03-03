import { useQuiz } from "@/components/QuizContext";
import { Sparkles } from "lucide-react";

const FloatingQuizCTA = () => {
  const { openQuiz, isOpen } = useQuiz();

  if (isOpen) return null;

  return (
    <button
      onClick={() => openQuiz()}
      className="fixed bottom-6 right-6 z-40 bg-primary text-primary-foreground px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 text-sm font-semibold tracking-wide"
    >
      <Sparkles className="w-4 h-4" />
      Take Quiz
    </button>
  );
};

export default FloatingQuizCTA;

import React, { createContext, useContext, useState, useCallback } from "react";

interface QuizContextType {
  isOpen: boolean;
  openQuiz: (preselectedGoal?: string) => void;
  closeQuiz: () => void;
  preselectedGoal: string | null;
}

const QuizContext = createContext<QuizContextType>({
  isOpen: false,
  openQuiz: () => {},
  closeQuiz: () => {},
  preselectedGoal: null,
});

export const useQuiz = () => useContext(QuizContext);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedGoal, setPreselectedGoal] = useState<string | null>(null);

  const openQuiz = useCallback((goal?: string) => {
    setPreselectedGoal(goal ?? null);
    setIsOpen(true);
  }, []);

  const closeQuiz = useCallback(() => {
    setIsOpen(false);
    setPreselectedGoal(null);
  }, []);

  return (
    <QuizContext.Provider value={{ isOpen, openQuiz, closeQuiz, preselectedGoal }}>
      {children}
    </QuizContext.Provider>
  );
};

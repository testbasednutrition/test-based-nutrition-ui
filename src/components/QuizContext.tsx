import React, { createContext, useContext, useState, useCallback } from "react";

interface QuizContextType {
  isOpen: boolean;
  openQuiz: (preselectedGoal?: string) => void;
  closeQuiz: () => void;
  preselectedGoal: string | null;
  
  isBookingOpen: boolean;
  openBooking: (preselectedGoal?: string) => void;
  closeBooking: () => void;
  bookingGoal: string | null;
}

const QuizContext = createContext<QuizContextType>({
  isOpen: false,
  openQuiz: () => {},
  closeQuiz: () => {},
  preselectedGoal: null,
  
  isBookingOpen: false,
  openBooking: () => {},
  closeBooking: () => {},
  bookingGoal: null,
});

export const useQuiz = () => useContext(QuizContext);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedGoal, setPreselectedGoal] = useState<string | null>(null);

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingGoal, setBookingGoal] = useState<string | null>(null);

  const openQuiz = useCallback((goal?: string) => {
    setPreselectedGoal(goal ?? null);
    setIsOpen(true);
  }, []);

  const closeQuiz = useCallback(() => {
    setIsOpen(false);
    setPreselectedGoal(null);
  }, []);

  const openBooking = useCallback((goal?: string) => {
    setBookingGoal(goal ?? null);
    setIsBookingOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setIsBookingOpen(false);
    setBookingGoal(null);
  }, []);

  return (
    <QuizContext.Provider 
      value={{ 
        isOpen, 
        openQuiz, 
        closeQuiz, 
        preselectedGoal,
        isBookingOpen,
        openBooking,
        closeBooking,
        bookingGoal
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

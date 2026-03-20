import { Shield, Flower2, Sparkles, Brain, Dumbbell } from "lucide-react";

export const GOALS = [
  { id: "womens-health", label: "Women's Health", desc: "Hormones, energy & holistic wellbeing", icon: Flower2 },
  { id: "mens-health", label: "Men's Health", desc: "Testosterone, energy & metabolic optimisation", icon: Shield },
  { id: "childrens-health", label: "Children's Health", desc: "Growth, immunity & development", icon: Dumbbell },
  { id: "neurodivergence", label: "Neurodivergence", desc: "Focus, cognitive health & brain fog", icon: Brain },
  { id: "skin-health", label: "Skin Health", desc: "Acne, ageing & dermal nutrition", icon: Sparkles },
];

export type QuestionType = "single" | "multiple";

export interface QuizQuestion {
  id: string;
  label: string;
  type: QuestionType;
  options: string[];
}

export interface QuizConfig {
  title: string;
  questions: QuizQuestion[];
}

export const QUIZ_DATA: Record<string, QuizConfig> = {
  "womens-health": {
    title: "Understand What May Be Influencing Your Hormones & Energy",
    questions: [
      {
        id: "stage",
        label: "Which stage best describes you?",
        type: "single",
        options: ["Teen / early 20s", "Trying to conceive", "Pregnancy or postnatal", "Perimenopause", "Menopause"]
      },
      {
        id: "symptoms",
        label: "Which symptoms do you experience?",
        type: "multiple",
        options: ["Brain fog", "Fatigue", "Mood swings or anxiety", "Weight gain or slow metabolism", "Poor sleep", "Hormonal skin changes"]
      },
      {
        id: "energy",
        label: "How are your energy levels?",
        type: "single",
        options: ["Stable", "Occasionally tired", "Frequent fatigue", "Exhausted most days"]
      },
      {
        id: "digestion",
        label: "How would you describe your digestion?",
        type: "single",
        options: ["No issues", "Occasional bloating", "Frequent digestive discomfort"]
      },
      {
        id: "goal",
        label: "What is your main health goal?",
        type: "single",
        options: ["Hormone balance", "Energy & clarity", "Weight management", "Mood & emotional balance", "Stabilise gut issues"]
      }
    ]
  },
  "mens-health": {
    title: "Discover Factors Influencing Energy, Metabolism & Hormone Health",
    questions: [
      {
        id: "goal",
        label: "What is your main health goal?",
        type: "single",
        options: ["Improve energy", "Optimise testosterone health", "Lose weight", "Improve focus", "Healthy ageing"]
      },
      {
        id: "symptoms",
        label: "Which symptoms do you experience?",
        type: "multiple",
        options: ["Low energy", "Brain fog", "Weight gain", "Poor sleep", "Stress or burnout"]
      },
      {
        id: "activity",
        label: "How active are you?",
        type: "single",
        options: ["Sedentary", "Moderately active", "Train regularly"]
      },
      {
        id: "recovery",
        label: "How would you describe recovery after exercise?",
        type: "single",
        options: ["Excellent", "Moderate", "Slow recovery"]
      },
      {
        id: "digestion",
        label: "Do you experience digestive symptoms?",
        type: "single",
        options: ["No", "Occasionally", "Frequently"]
      }
    ]
  },
  "childrens-health": {
    title: "Supporting Growth, Immunity & Development",
    questions: [
      {
        id: "age",
        label: "What is your child’s age?",
        type: "single",
        options: ["0–4", "5–9", "10–13", "Teen"]
      },
      {
        id: "concerns",
        label: "What concerns you most?",
        type: "multiple",
        options: ["Focus or attention", "Behaviour or emotional regulation", "Gut issues", "Frequent illness", "Sleep problems"]
      },
      {
        id: "diet",
        label: "How would you describe their diet?",
        type: "single",
        options: ["Balanced with a good volume of vegetables", "Mixed", "No vegetables in the diet", "Very selective"]
      },
      {
        id: "digestion",
        label: "Does your child experience digestive symptoms?",
        type: "single",
        options: ["None", "Occasional", "Frequent"]
      },
      {
        id: "energy_mood",
        label: "How are their energy / mood levels?",
        type: "single",
        options: ["Consistent", "Variable", "Often tired", "Irritable"]
      }
    ]
  },
  "neurodivergence": {
    title: "Understanding Factors Influencing Focus & Cognitive Health",
    questions: [
      {
        id: "who",
        label: "Who is this quiz for?",
        type: "single",
        options: ["Child", "Teen", "Adult", "Woman with ADHD symptoms"]
      },
      {
        id: "challenges",
        label: "Which challenges occur most often?",
        type: "multiple",
        options: ["Poor focus", "Brain fog", "Emotional overwhelm", "Anxiety", "Sleep difficulties", "Overactivity / fidgety"]
      },
      {
        id: "energy",
        label: "How are daily energy levels?",
        type: "single",
        options: ["Stable", "Energy crashes", "Often exhausted", "Excess energy"]
      },
      {
        id: "digestion",
        label: "Do digestive symptoms occur?",
        type: "single",
        options: ["No", "Occasionally", "Frequently"]
      },
      {
        id: "mental_fatigue",
        label: "How often do you experience mental fatigue?",
        type: "single",
        options: ["Rarely", "Sometimes", "Frequently"]
      }
    ]
  },
  "skin-health": {
    title: "Discover What May Be Influencing Your Skin",
    questions: [
      {
        id: "concerns",
        label: "What skin concerns do you have?",
        type: "multiple",
        options: ["Acne", "Rosacea", "Eczema", "Psoriasis", "Premature ageing", "Sensitive skin"]
      },
      {
        id: "triggers",
        label: "When do symptoms worsen?",
        type: "multiple",
        options: ["Hormonal changes", "Stress", "Diet", "No clear trigger"]
      },
      {
        id: "digestion",
        label: "Do you experience digestive symptoms?",
        type: "single",
        options: ["No", "Occasionally", "Frequently"]
      },
      {
        id: "hydration",
        label: "How would you describe your skin hydration?",
        type: "single",
        options: ["Balanced", "Sometimes dry", "Frequently dry or inflamed"]
      },
      {
        id: "goal",
        label: "What is your main skin goal?",
        type: "single",
        options: ["Clearer skin", "Reduce inflammation", "Anti-ageing", "Long-term skin health"]
      }
    ]
  }
};

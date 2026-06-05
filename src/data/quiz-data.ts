import { Shield, Flower2, Sparkles, Brain, Dumbbell, Activity, Stethoscope } from "lucide-react";

export const GOALS = [
  { id: "womens-health", label: "Women's Health", desc: "Hormones, energy & holistic wellbeing", icon: Flower2 },
  { id: "mens-health", label: "Men's Health", desc: "Testosterone, energy & metabolic optimisation", icon: Shield },
  { id: "childrens-health", label: "Children's Health", desc: "Growth, immunity & development", icon: Dumbbell },
  { id: "neurodivergence", label: "Neurodivergence", desc: "Focus, cognitive health & brain fog", icon: Brain },
  { id: "skin-health", label: "Skin Health", desc: "Acne, ageing & dermal nutrition", icon: Sparkles },
  { id: "sports-performance", label: "Sports Performance", desc: "Stamina, recovery & athletic power", icon: Activity },
  { id: "pain-fatigue", label: "Pain & Fatigue", desc: "Chronic pain, fibromyalgia & fatigue management", icon: Stethoscope },
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
  },
  "sports-performance": {
    title: "Optimise Stamina, Acceleration & Athletic Power",
    questions: [
      {
        id: "primary-goal",
        label: "What is your primary goal right now?",
        type: "single",
        options: ["Improve strength", "Improve speed and power", "Improve endurance", "Improve mobility and flexibility", "Improve body composition (lose fat/gain muscle)", "Improve overall athletic performance"]
      },
      {
        id: "sport-activity",
        label: "What sport or activity do you primarily participate in?",
        type: "single",
        options: ["Running/endurance sports", "Team sports (football, rugby, hockey, etc.)", "Strength sports (powerlifting, weightlifting)", "Racquet sports (tennis, padel, squash)", "Combat sports", "General fitness", "Other"]
      },
      {
        id: "training-frequency",
        label: "How many times per week do you currently train?",
        type: "single",
        options: ["0–1", "2–3", "4–5", "6–7", "More than 7"]
      },
      {
        id: "performance-limit",
        label: "Which area do you feel is currently limiting your performance the most?",
        type: "single",
        options: ["Strength", "Speed", "Endurance", "Mobility", "Recovery", "Confidence or mindset", "Technical skill"]
      },
      {
        id: "recovery-rating",
        label: "How would you rate your recovery between training sessions?",
        type: "single",
        options: ["Excellent", "Good", "Fair", "Poor", "Very poor"]
      },
      {
        id: "sleep-hours",
        label: "How many hours of sleep do you average per night?",
        type: "single",
        options: ["Less than 5", "5–6", "6–7", "7–8", "More than 8"]
      },
      {
        id: "injuries-history",
        label: "Have you had any injuries in the last 12 months?",
        type: "single",
        options: ["No injuries", "Minor injury with no missed training", "Injury requiring modified training", "Injury requiring time away from sport", "Multiple injuries"]
      },
      {
        id: "improvement-area",
        label: "Which area would you most like to improve?",
        type: "single",
        options: ["Lower body power", "Upper body strength", "Acceleration and speed", "Stamina and conditioning", "Mobility and movement quality", "Balance and coordination"]
      },
      {
        id: "fatigue-frequency",
        label: "How often do you feel fatigued or struggle to recover?",
        type: "single",
        options: ["Never", "Occasionally", "Weekly", "Several times per week", "Daily"]
      },
      {
        id: "competitive-level",
        label: "What best describes your competitive level?",
        type: "single",
        options: ["Recreational", "Regular gym-goer", "Amateur competitor", "Semi-professional", "Professional athlete"]
      }
    ]
  },
  "pain-fatigue": {
    title: "Assess Chronic Pain, Exhaustion & Cellular Recovery Factors",
    questions: [
      {
        id: "pain-location-chronic",
        label: "What area of the body are you suffering from chronic pain in?",
        type: "single",
        options: ["Spine", "Knee", "Neck", "Multiple areas"]
      },
      {
        id: "diagnosed-conditions",
        label: "Have you been diagnosed with any of the following conditions?",
        type: "multiple",
        options: ["Fibromyalgia", "Chronic Fatigue", "Chronic pain syndrome", "PTSD", "Osteoarthritis", "Any inflammatory arthritis", "Inflammatory bowel disease or gut dysfunction"]
      },
      {
        id: "painkiller-meds",
        label: "How often do you require painkilling meds?",
        type: "single",
        options: ["Daily", "Multiple times daily", "Weekly", "Occasionally"]
      },
      {
        id: "trauma-history",
        label: "Have you ever had any of the following?",
        type: "multiple",
        options: ["Significant trauma in an accident", "Previous surgery", "Previous illness requiring a hospital stay", "Diagnosis of a mental health illness including anxiety, depression or PTSD"]
      },
      {
        id: "pain-areas-general",
        label: "What areas in the body do you suffer from pain in?",
        type: "multiple",
        options: ["Joints", "Muscles", "Spine or neck", "All over"]
      }
    ]
  }
};

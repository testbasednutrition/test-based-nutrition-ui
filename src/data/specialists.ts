export type SpecialistCategory =
  | "All"
  | "Women's Health"
  | "Men's Health"
  | "Children's Health"
  | "Neurodivergence"
  | "Skin Health"
  | "Sports Performance"
  | "Pain, Fatigue & Inflammation";

export interface Testimonial {
  name: string;
  title?: string;
  text: string;
}

export interface Specialist {
  slug: string;
  name: string;
  role: string;
  category: SpecialistCategory;
  specificTitle?: string;
  image: string;
  secondaryImage?: string;
  bio: string[];
  quote: string;
  credentials: string[];
  omegaResults?: string;
  bookingUrl?: string;
  bookingLabel?: string;
  currentOrg?: string;
  experience?: string;
  testimonials?: Testimonial[];
  location?: string;
  consultationType?: string;
  rating?: number;
  reviewCount?: number;
  languages?: string[];
  testingExpertise?: string[];
  
  // New TBN listing fields
  tbnFocusTags?: string[];
  foundationalHealthTesting?: string[];
  pointOfCareTesting?: string[];
  galleryImages?: string[];
  newsHubContributions?: boolean;

  specialization_tags?: string[];
  primary_testing_methods?: string[];
  first_balance_result?: string;
  second_balance_result?: string;
  why_joined_tbn?: string;
  other_blood_tests?: string;
  gallery_image_urls?: string[];
  accepting_new_clients?: boolean;
  email_address?: string;
  phone_number?: string;
  address?: string;
  clinic_name?: string;
  is_approved?: boolean;
}

export const categories: SpecialistCategory[] = [
  "All",
  "Women's Health",
  "Men's Health",
  "Children's Health",
  "Neurodivergence",
  "Skin Health",
  "Sports Performance",
  "Pain, Fatigue & Inflammation",
];

export const specialists: Specialist[] = [
  // ── Medical & Clinical ──
  {
    slug: "dr-ishtiaq-rehman",
    name: "Dr. Ishtiaq Rehman",
    role: "Consulting Doctor — England FA",
    category: "Women's Health",
    image: "https://test-basednutrition.com/assets/images/ish4-1256x889.jpeg",
    secondaryImage: "https://test-basednutrition.com/assets/images/ish2-634x434.jpeg",
    bio: [
      "Dr. Ishtiaq Rehman is a renowned figure in the field of sports medicine, with a career that spans consulting for elite organisations such as the England FA and Sunderland FC. His passion for performance optimisation has led him to become a Partner of test-basednutrition.com, using science-backed methods to improve the health and well-being of clients.",
      "Dr. Rehman has a deep understanding of how chronic inflammation and omega imbalance affect performance and health, and he uses objective testing to demonstrate these effects. He continues to work with elite athletes and individuals, guiding them towards improved performance through tailored nutrition.",
    ],
    quote:
      "Launching Test-Based Nutrition is crucial because it allows us to bring objective, evidence-based approaches to health. Our mission is to educate people on the importance of omega balance and to show them, through measurable tests, the profound impact this balance can have on their health and performance.",
    credentials: [
      "MBBS / MBChB — Medical Degree",
      "Consulting Doctor — England FA",
      "Former Head of Medical and Performance — Sunderland FC",
      "Co-Director — test-basednutrition.com",
      "Sports Medicine & Musculoskeletal Health",
      "Preventive Health Screening",
    ],
    omegaResults: "1st test 11.1",
    bookingUrl: "https://www.drishtiaqrehman.co.uk/#appointment",
    bookingLabel: "Book Now",
    currentOrg: "England FA",
    experience: "25+ Years Exp.",
    location: "Marylebone, London",
    consultationType: "Online & In-person",
    rating: 4.9,
    reviewCount: 142,
    languages: ["English"],
    testingExpertise: ["Functional Labs", "Genomic Testing"],
    accepting_new_clients: true,
    email_address: "info@dr-rehman.co.uk",
    phone_number: "+44 7815 753332",
    clinic_name: "Dr. Rehman Nutrition Clinic",
    address: "28 Cathedral Road, Marylebone, London W1G",
    specialization_tags: [
      "Perimenopause",
      "Mood, Brain Fog & Hormonal Health",
      "Menopause",
      "Gut Health",
      "Hormonal Conditions",
      "Healthy Ageing for Men"
    ],
    primary_testing_methods: [
      "Finger Prick Balance Testing (Omega 6:3)",
      "Finger Prick Gut Health Testing",
      "Vitamin D Levels (FP)",
      "HbA1c - Diabetes (FP)"
    ],
    first_balance_result: "14:1",
    second_balance_result: "2:1",
    why_joined_tbn: "After undertaking the Omega 6:3 Balance Test and using the Balance Oil myself, I experienced a marked improvement in energy, sleep quality and overall wellbeing. This prompted me to explore the evidence in greater depth. Following further research, I introduced the test and supplement to my own family and began offering them to patients where appropriate. I believe assessing and optimising omega-3 status can represent an important — and often overlooked — component of a comprehensive lifestyle medicine approach focused on both current wellbeing and long-term health.",
    other_blood_tests: "I perform venous blood sampling within clinic and am able to arrange a comprehensive range of investigations — including all standard tests.",
    gallery_image_urls: [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800"
    ],
  },
  {
    slug: "jayden-blanchard",
    name: "Jayden Blanchard",
    role: "Doctor of Chiropractic — Life Chiropractic Basildon",
    category: "Pain, Fatigue & Inflammation",
    image: "https://test-basednutrition.com/assets/images/jayden-blanchard-3-1256x1883.jpeg",
    secondaryImage: "https://test-basednutrition.com/assets/images/jayden-blanchard-1-698x1046.jpg",
    bio: [
      "Jayden Blanchard works at Life Chiropractic Basildon, where he focuses on helping patients recover from pain and improve their overall mobility. The clinic's advanced X-ray diagnostics and rehabilitation services provide the foundation for comprehensive care.",
      "Jayden is passionate about going beyond the typical chiropractic approach, always seeking ways to enhance his patients' recovery. Incorporating Test-Based Nutrition into his practice allows him to give a more complete service, addressing not only physical adjustments but also the internal factors that contribute to long-term health.",
    ],
    quote:
      "Test-Based Nutrition allows me to give my patients a more thorough approach to their wellness by addressing cellular health and reducing inflammation. This helps ensure faster recovery and better long-term results, whether they are athletes or everyday patients.",
    credentials: [
      "Doctor of Chiropractic (DC)",
      "Advanced X-Ray Diagnostics",
      "Rehabilitation & Recovery Specialist",
      "Cellular Health Integration",
    ],
    bookingUrl: "https://www.lifechiropractic.co.uk/book-appointment/",
    bookingLabel: "Book Now",
    currentOrg: "Life Chiropractic Basildon",
    experience: "10+ Years Exp.",
    location: "Essex, London",
    consultationType: "Online Only",
    rating: 4.8,
    reviewCount: 89,
    languages: ["English", "Spanish"],
    testingExpertise: ["Microbiome Analysis"],
  },

  // ── Combat Sports ──
  {
    slug: "neil-parsley",
    name: "Neil Parsley",
    role: "Consulting Performance Coach — England FA & Manchester City",
    category: "Sports Performance",
    image: "https://test-basednutrition.com/assets/images/optimise-gallery-9-1256x852.jpeg",
    bio: [
      "Neil Parsley is a passionate elite performance coach, having worked with Olympic and professional athletes. He is currently consulting to England FA and Manchester City. Neil also privately trains numerous English Premiership footballers over the last 5 seasons; both in season and abroad on multiple training camps.",
      "With over 25 years of dedicated experience in the world of sports, his expertise lies in connecting with athletes, coaches, leaders, and key stakeholders at a high level. Neil's experience extends to the international stage, having coached senior podium athletes across multiple Summer and Winter Olympic cycles, international rugby, and international football.",
    ],
    quote:
      "If You're Not Assessing, You're Guessing — This principle has guided my training and coaching philosophy throughout my 25 year career. It reflects my commitment to precision and individualised approaches.",
    credentials: [
      "BSc Sport Science",
      "UK SCA Credited Professional",
      "25+ Years Elite Coaching Experience",
      "Multiple Olympic Cycles (Summer & Winter)",
      "International Rugby & Football",
    ],
    bookingUrl: "mailto:info@optimiseperfomance.com",
    bookingLabel: "Book a Consultation",
    currentOrg: "England FA & Manchester City",
    experience: "25+ Years Exp.",
    location: "Chelsea, London",
    consultationType: "In-person Only",
    rating: 5.0,
    reviewCount: 210,
    languages: ["English"],
    testingExpertise: ["Functional Labs", "Microbiome Analysis"],
    testimonials: [
      {
        name: "Dave Ryding",
        title: "English World Cup alpine ski racer",
        text: "After incorporating omega-3-rich oily fish into my daily routine for over three years, my performance skyrocketed. My Omega 3 ratio improved from 5:1 to an impressive 2:1.",
      },
      {
        name: "Mike Grundy",
        title: "English professional mixed martial artist",
        text: "My Omega 6:3 ratio drastically shifted from 18:1 to a balanced 3:1, enhancing my alertness and reducing post-training aches.",
      },
    ],
  },
  {
    slug: "mariusz-domasat",
    name: "Mariusz Domasat",
    role: "Elite Grappling and MMA Coach",
    category: "Sports Performance",
    image: "https://test-basednutrition.com/assets/images/mariusz3-1000x1500.jpeg",
    secondaryImage: "https://test-basednutrition.com/assets/images/mariusz1-698x465.jpeg",
    bio: [
      "Mariusz Domasat is a highly respected grappling and MMA coach with a decorated career in competitive martial arts. He is a 2-time ADCC World Masters Pro Champion and a 3-time ADCC European Champion, known for his expertise in Brazilian Jiu-Jitsu, MMA, wrestling, and judo.",
      "As the founder of Husaria Fight Team and the Mariusz Hetman Domasat Submission Fighting System, he has developed a reputation for innovative coaching and commitment to athlete excellence. Mariusz also serves as an ADCC A-Class Referee and Celtic Coordinator.",
    ],
    quote:
      "Joining Test-Based Nutrition is more than just a professional collaboration; it's a personal journey. The benefits I've seen in my daughter's development through balanced nutrition have motivated me to align with a company that shares my passion for holistic health.",
    credentials: [
      "2x ADCC World Masters Pro Champion",
      "3x ADCC European Champion",
      "Grapple Kings Heavyweight Champion",
      "ADCC A-Class Referee & Celtic Coordinator",
      "Founder — Husaria Fight Team",
      "BJJ, MMA, Wrestling, Judo",
    ],
    omegaResults: "1st test 28:1, 2nd test 2:1",
  },
  {
    slug: "sonny-hardy",
    name: "Sonny Hardy",
    role: "Professional Boxer and Youth Coach",
    category: "Sports Performance",
    image: "https://test-basednutrition.com/assets/images/sonny-hardy-1256x1256.jpg",
    secondaryImage: "https://test-basednutrition.com/assets/images/sonny-hardy-5-698x740.jpeg",
    bio: [
      "Sonny Hardy is a professional boxer and dedicated youth coach who understands the importance of building strong foundations in young athletes. With a professional record of 6-0, including three knockouts, Sonny combines his in-ring experience with his knowledge as a certified personal trainer.",
      "For over five years, he has coached amateur boxers, focusing on skill development, discipline, and the importance of recovery and nutrition. His commitment to youth training is evident in his work, aiming to improve not just athletic performance but also overall health and well-being.",
    ],
    quote:
      "Partnering with Test-Based Nutrition has been a game-changer for both my training and the young athletes I coach. Their science-backed approach to nutrition helps improve recovery, mental focus, and cellular health.",
    credentials: [
      "Professional Boxer — Record 6-0 (3 KOs)",
      "5+ Years Amateur Boxing Coach",
      "Certified Personal Trainer",
      "Youth Training Specialist",
    ],
    omegaResults: "1st test 26:1, 2nd test 4.2:1",
  },
  {
    slug: "mike-grundy",
    name: "Mike Grundy",
    role: "UFC Veteran & Commonwealth Games Medalist",
    category: "Sports Performance",
    image: "https://test-basednutrition.com/assets/images/mike-grundy-6-1015x1014.jpg",
    secondaryImage: "https://test-basednutrition.com/assets/images/mike-grundy3-477x611.jpg",
    bio: [
      "Mike Grundy began his athletic career as a freestyle wrestler at the age of six, eventually competing at the international level. He represented Team England in two Commonwealth Games, securing a bronze medal at the 2014 Glasgow Games. After transitioning into MMA, Mike joined the UFC, where he made his debut in front of 22,000 fans at the O2 Arena.",
      "As the owner of Elite Fitness Factory, Mike now dedicates himself to coaching athletes in wrestling, Jiu-Jitsu, and MMA, passing on the discipline and expertise he gained throughout his illustrious career.",
    ],
    quote:
      "Test-Based Nutrition has enhanced not only my recovery but also my ability to help athletes I coach. By utilising test-based methods, we can ensure the right nutrition for optimal performance and health, especially at the cellular level.",
    credentials: [
      "UFC Veteran",
      "Commonwealth Games Bronze Medalist (2014)",
      "European Jiu-Jitsu Champion",
      "Owner — Elite Fitness Factory",
      "20+ Years Combat Sports Experience",
    ],
    omegaResults: "1st test 18:1, 2nd test 3:1 (Balanced)",
    currentOrg: "Elite Fitness Factory",
    experience: "20+ Years",
  },
  {
    slug: "ross-pearce",
    name: "Ross Pearce",
    role: "Professional Boxing Coach — RJ's Boxing Gym",
    category: "Sports Performance",
    image: "https://test-basednutrition.com/assets/images/ross-pearce-4-1200x1500.jpg",
    secondaryImage: "https://test-basednutrition.com/assets/images/ross-pearce-3-698x873.jpg",
    bio: [
      "Ross Pearce has been a professional boxing coach at RJ's Boxing Gym in Essex for over 5 years. With a personal boxing career spanning 15 years, Ross brings a wealth of experience to his coaching. In 2022, Ross coached his fighter, Liam Dillon, to win the British title.",
      "Ross currently trains six professional fighters and provides personal training sessions for individuals at all fitness levels. His approach to coaching focuses on tailored training plans, discipline, and overall health.",
    ],
    quote:
      "Partnering with Test-Based Nutrition ensures that my athletes and I are not just guessing about our health. With balance testing, we can focus on real, measurable results.",
    credentials: [
      "Professional Boxing Coach — 5+ Years",
      "Personal Boxing Career — 15 Years",
      "Trained British Title Holder (Liam Dillon, 2022)",
      "Personal Training Certification",
    ],
    currentOrg: "RJ's Boxing Gym",
  },

  // ── Fitness & Coaching ──
  {
    slug: "lyndsey-hopper",
    name: "Lyndsey Hopper",
    role: "Personal Trainer & Online Wellness Coach — David Lloyd",
    category: "Women's Health",
    image: "https://test-basednutrition.com/assets/images/0a4ad164-ccc2-4459-a338-38f4cb2fce4e-1256x1675.jpg",
    secondaryImage: "https://test-basednutrition.com/assets/images/133eeab8-4ba2-4af3-932c-258cc70b76521-698x931.jpg",
    bio: [
      "Lyndsey Hopper is a personal trainer and online wellness coach with over 10 years of personal training experience. With a background in Sport Science and a personal health and fitness journey, Lyndsey understands the challenges many face when trying to improve their health.",
      "She is dedicated to helping her clients learn how to nourish and move their bodies properly, while building confidence in the gym. Lyndsey specialises in creating personalised fitness plans for individuals along with nutritional guidance, and healthy habit building.",
    ],
    quote:
      "What I love about Test-Based Nutrition is that it's based on actual data. We know exactly what the body needs, rather than guessing. It fits perfectly with my approach because I can help clients not only with fitness and nutrition but also with their cellular health.",
    credentials: [
      "BSc Sport Science (First-Class Honours)",
      "10+ Years Personal Training Experience",
      "Online Wellness Coaching",
      "Nutritional Guidance Specialist",
    ],
    omegaResults: "1st test 13:1",
    currentOrg: "David Lloyd Southend",
  },
  {
    slug: "william-todd",
    name: "William Todd",
    role: "Strength & Conditioning Coach and Tennis Coach",
    category: "Sports Performance",
    image: "https://test-basednutrition.com/assets/images/william-todd-2-1256x1256.jpg",
    secondaryImage: "https://test-basednutrition.com/assets/images/william-todd-4-698x688.jpg",
    bio: [
      "William Todd began his career as a semi-professional tennis player and transitioned into coaching after earning his LTA Level 3 and ITF Level 1 tennis coaching certifications. Over 12 years, Will has coached across the USA, Spain, New Zealand, and the UK, working with athletes of all levels.",
      "He specialises in strength and conditioning, particularly Olympic weightlifting and injury rehabilitation. His international experience gives him a unique perspective on training methods, which he incorporates into his holistic approach.",
    ],
    quote:
      "Test-Based Nutrition helps me bring real data into my coaching, providing insights into my clients' inflammation levels. This allows us to adjust training plans effectively.",
    credentials: [
      "LTA Level 3 Tennis Coach",
      "ITF Level 1 Tennis Coach",
      "12 Years International Coaching Experience",
      "Olympic Weightlifting Specialist",
      "Injury Rehabilitation",
    ],
    omegaResults: "1st test 15:1",
    bookingUrl: "mailto:will@wtenessfitness.com",
    bookingLabel: "Book Now",
  },
  {
    slug: "trevor-ford",
    name: "Trevor Ford",
    role: "Senior Personal Trainer & Nutrition Specialist",
    category: "Men's Health",
    image: "https://test-basednutrition.com/assets/images/trevor-ford-1-1125x1500.jpg",
    secondaryImage: "https://test-basednutrition.com/assets/images/trevor-ford-3-698x465.jpeg",
    bio: [
      "With 18 years of experience as a personal trainer, Trevor has led a team of trainers at David Lloyd, one of the UK's premier fitness clubs. His role as manager involves developing comprehensive training programmes that cater to a broad clientele, from young athletes to seniors seeking vitality and strength.",
      "Trevor's holistic approach integrates targeted nutrition with personalised training programmes, focusing on inflammation reduction, mental clarity, and cellular health optimisation.",
    ],
    quote:
      "Partnering with Test-Based Nutrition has revolutionised my ability to support my clients' health journeys. Their scientifically-backed supplements enhance cellular health, reduce inflammation, and improve mental clarity.",
    credentials: [
      "18+ Years Personal Training Experience",
      "Manager & Team Leader — David Lloyd",
      "Nutrition Specialist",
      "Inflammation Reduction Expert",
      "Mental Performance Coaching",
    ],
    omegaResults: "1st test 18:1, 2nd test 2:1",
    currentOrg: "David Lloyd",
    experience: "18+ Years",
  },

  // ── Health & Wellness ──
  {
    slug: "kia-porter",
    name: "Kia Porter",
    role: "Holistic Health Specialist & Naturopathic Health Coach",
    category: "Pain, Fatigue & Inflammation",
    image: "https://test-basednutrition.com/assets/images/kia-1-1125x1500.jpeg",
    secondaryImage: "https://test-basednutrition.com/assets/images/kia-6-698x937.jpg",
    bio: [
      "Kia Porter is a naturopathic health coach who has inspired and supported thousands of individuals on their wellness journeys. As the founder of Kia Porter Health, she is passionate about educating people on how to heal naturally by addressing the root causes of their health issues.",
      "A student at the College of Naturopathic Medicine, Kia specialises in supporting clients to reduce environmental and dietary stressors, improve gut health, and strengthen the immune system.",
    ],
    quote:
      "Partnering with Test-Based Nutrition allows me to offer clients scientifically-backed tools to support their health. By using balance testing and nutritional strategies, we can address deficiencies and toxic exposures to ensure optimal health and well-being.",
    credentials: [
      "Naturopathic Health Coach (Student)",
      "Founder — Wellness Journey with Kia",
      "Gut Health Specialist",
      "Environmental Toxin Awareness",
      "Immune System Optimisation",
    ],
  },
  {
    slug: "sally-butler",
    name: "Sally Butler",
    role: "Nutritional Intolerance & Emotional Well-being Practitioner",
    category: "Children's Health",
    image: "https://test-basednutrition.com/assets/images/dsc07409-1256x837.jpeg",
    secondaryImage: "https://test-basednutrition.com/assets/images/the-mint-heart-logo-698x1047.jpg",
    bio: [
      "Sally Butler founded The Mint Heart in 2006, driven by a passion for holistic health and well-being. As a Certified Nutritional Intolerance Counsellor and Emotional Well-being Practitioner, Sally offers a unique blend of services that include Allergy and Intolerance Testing, Meditation, Bach Flower Essence and Emotional Counselling.",
      "Her philosophy focuses on treating the whole person by addressing nutritional deficiencies, emotional well-being, and cellular health through a combination of intolerance testing, personalised nutrition plans, and emotional support.",
    ],
    quote:
      "Partnering with Test-Based Nutrition allows me to provide clients with a scientifically proven approach to health. By focusing on test-based methods rather than guesswork, we can accurately identify deficiencies and create tailored solutions.",
    credentials: [
      "Founder — The Mint Heart (Est. 2006)",
      "Certified Nutritional Intolerance Counsellor",
      "Emotional Well-being Practitioner",
      "Bach Flower Essence Practitioner",
      "Meditation Teacher",
    ],
    currentOrg: "The Mint Heart",
  },
  {
    slug: "fiona-pursglove",
    name: "Fiona Pursglove",
    role: "Naturopathic Nutritionist — FigTree Nutrition & Health",
    category: "Women's Health",
    image: "https://test-basednutrition.com/assets/images/fiona-11-1256x837.jpeg",
    secondaryImage: "https://test-basednutrition.com/assets/images/fiona-9-698x698.jpg",
    bio: [
      "Fiona is a qualified naturopathic nutritionist with a background in managing her own health challenges, which led her to pursue a career in nutrition. After experiencing gastrointestinal issues in her 20s, Fiona was inspired to learn more about how nutrition could resolve these issues.",
      "As the founder of FigTree Nutrition & Health, she uses a holistic approach to empower her clients to take control of their health, specialising in gut health, hormone balance and fertility issues.",
    ],
    quote:
      "Partnering with Test-Based Nutrition gives me a vital tool to help clients understand their unique nutritional needs. The balance testing provides invaluable insights, allowing us to address deficiencies and optimise health at the cellular level.",
    credentials: [
      "Qualified Naturopathic Nutritionist",
      "Founder — FigTree Nutrition & Health",
      "College of Naturopathic Medicine Graduate",
      "Gut Health Specialist",
      "Hormone Balance & Fertility",
    ],
    omegaResults: "1st test 24:1, 2nd test 3:1",
    currentOrg: "FigTree Nutrition & Health",
  },
  {
    slug: "kimberly-whittall",
    name: "Kimberly Whittall",
    role: "Rapid Transformation Therapy & Mindset Expert",
    category: "Neurodivergence",
    image: "https://test-basednutrition.com/assets/images/kimberly-whittall-malloch-1-1066x1600.jpeg",
    secondaryImage: "https://test-basednutrition.com/assets/images/kimberly-whittall-malloch-4-698x1048.jpg",
    bio: [
      "Kimberly Whittall is a rapid transformational therapy (RTT) practitioner and mindset expert, dedicated to helping individuals overcome unconscious barriers to success and well-being.",
      "Through her brand, The Connection Rebel, Kimberly takes a holistic, 360-degree approach to well-being, combining mindset work with health support, helping clients create lasting changes in both their mental and physical health.",
    ],
    quote:
      "Test-Based Nutrition complements my work by providing the missing link between mindset coaching and physical health. Through balance testing, we can tackle the internal factors that affect well-being, giving clients a complete picture of their health.",
    credentials: [
      "Rapid Transformational Therapy (RTT) Practitioner",
      "Mindset & Success Coach",
      "Founder — The Connection Rebel",
      "Holistic Well-being Expert",
    ],
    omegaResults: "1st test 26:1, 2nd test 3:1",
    currentOrg: "The Connection Rebel",
  },
  {
    slug: "emily-holland",
    name: "Emily Holland",
    role: "Gut and Skin Health Specialist",
    category: "Skin Health",
    image: "https://test-basednutrition.com/assets/images/612056a2-c50b-4e85-9b8d-4639e40f9106-1256x942.jpeg",
    secondaryImage: "https://test-basednutrition.com/assets/images/7153dd7b-7bb7-47be-b82d-864b5c1a68831-698x386.jpeg",
    bio: [
      "Emily Holland, founder of Emily Holland Wellness, is dedicated to helping individuals overcome gut and skin health issues through holistic methods. Her personal journey with cystic acne led her to explore alternative treatments, eventually becoming a certified holistic nutritionist.",
      "Emily specialises in gut health, addressing conditions such as IBS, fatigue, and skin issues like eczema and acne. She uses food intolerance testing and customised detox protocols to support her clients in achieving optimal health.",
    ],
    quote:
      "Partnering with Test-Based Nutrition aligns perfectly with my commitment to holistic health. Their evidence-based approach to nutrition complements my focus on reducing inflammation and promoting natural healing for my clients.",
    credentials: [
      "Certified Holistic Nutritionist",
      "Founder — Emily Holland Wellness",
      "Gut Health Specialist",
      "Skin Health & Acne Expert",
      "Food Intolerance Testing",
    ],
    bookingUrl: "mailto:emilyhollandwellness@gmail.com",
    bookingLabel: "Book Now",
  },
];

export function getSpecialistBySlug(slug: string): Specialist | undefined {
  return specialists.find((s) => s.slug === slug);
}

export function getSpecialistsByLocation(locationQuery: string): Specialist[] {
  const query = locationQuery.toLowerCase();
  return specialists.filter((s) => {
    const hasLocationMatch = s.location && s.location.toLowerCase().includes(query);
    const hasAddressMatch = s.address && s.address.toLowerCase().includes(query);
    return hasLocationMatch || hasAddressMatch;
  });
}

export function getSpecialistsByCategory(category: SpecialistCategory): Specialist[] {
  if (category === "All") return specialists;
  return specialists.filter((s) => s.category === category);
}

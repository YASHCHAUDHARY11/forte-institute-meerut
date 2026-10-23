export interface Course {
  id: string;
  name: string;
  shortName: string;
  category: "all" | "ca" | "mgmt" | "eng" | "edu";
  affiliation: "AKTU Lucknow" | "CCSU Meerut";
  duration: string;
  annualFees: string;
  eligibility: string;
  description: string;
  seats: number;
}

export const COURSES: Course[] = [
  {
    id: "bca",
    name: "Bachelor of Computer Applications",
    shortName: "BCA",
    category: "ca",
    affiliation: "CCSU Meerut",
    duration: "3 Years (6 Semesters)",
    annualFees: "₹45,000 / year",
    eligibility: "10+2 with Mathematics/Computer Application (Min. 45% marks)",
    description: "Industry-aligned software development, cloud computing, and mobile application engineering curriculum.",
    seats: 120,
  },
  {
    id: "mca",
    name: "Master of Computer Applications",
    shortName: "MCA",
    category: "ca",
    affiliation: "AKTU Lucknow",
    duration: "2 Years (4 Semesters)",
    annualFees: "₹75,000 / year",
    eligibility: "BCA / B.Sc. (CS/IT) or graduation with Mathematics at 10+2 / UG (Min. 50%)",
    description: "Advanced algorithms, Full Stack MERN development, AI/ML specialization, and enterprise architecture.",
    seats: 60,
  },
  {
    id: "bba",
    name: "Bachelor of Business Administration",
    shortName: "BBA",
    category: "mgmt",
    affiliation: "CCSU Meerut",
    duration: "3 Years (6 Semesters)",
    annualFees: "₹42,000 / year",
    eligibility: "10+2 in any stream from a recognized board (Min. 45% marks)",
    description: "Core foundation in Marketing, HR, Finance, Data Analytics, and corporate leadership communication.",
    seats: 120,
  },
  {
    id: "mba",
    name: "Master of Business Administration",
    shortName: "MBA",
    category: "mgmt",
    affiliation: "AKTU Lucknow",
    duration: "2 Years (4 Semesters)",
    annualFees: "₹80,000 / year",
    eligibility: "Graduation in any discipline with minimum 50% marks (45% for reserved)",
    description: "Dual specialization in Marketing, Finance, HR, IT, and International Business with case studies.",
    seats: 120,
  },
  {
    id: "btech-cse",
    name: "B.Tech in Computer Science & Engineering",
    shortName: "B.Tech CSE",
    category: "eng",
    affiliation: "AKTU Lucknow",
    duration: "4 Years (8 Semesters)",
    annualFees: "₹85,000 / year",
    eligibility: "10+2 with Physics, Mathematics, and Chem/CS (Min. 45% marks) or CUET/JEE Main",
    description: "Comprehensive software engineering, distributed systems, deep learning, cybersecurity, and DevOps.",
    seats: 90,
  },
  {
    id: "bed",
    name: "Bachelor of Education",
    shortName: "B.Ed",
    category: "edu",
    affiliation: "CCSU Meerut",
    duration: "2 Years",
    annualFees: "₹51,250 / year",
    eligibility: "Graduation or Post Graduation in any discipline with minimum 50% marks (NCTE Norms)",
    description: "Pedagogy, educational psychology, experiential classroom teaching, and modern curriculum design.",
    seats: 100,
  },
  {
    id: "med",
    name: "Master of Education",
    shortName: "M.Ed",
    category: "edu",
    affiliation: "CCSU Meerut",
    duration: "2 Years",
    annualFees: "₹55,000 / year",
    eligibility: "B.Ed / B.El.Ed with minimum 50% aggregate marks",
    description: "Advanced research in instructional systems, administrative leadership, and policy formation.",
    seats: 50,
  },
];

export const RECRUITERS = [
  { name: "Tata Consultancy Services (TCS)", sector: "IT Services", tier: "Tier 1" },
  { name: "Tech Mahindra", sector: "Telecommunications & IT", tier: "Tier 1" },
  { name: "Hexaware Technologies", sector: "Cloud & Automation", tier: "Tier 1" },
  { name: "Cloud Analogy", sector: "Salesforce & CRM", tier: "Tech Core" },
  { name: "ICICI Bank", sector: "Banking & Financial Services", tier: "BFSI" },
  { name: "Wipro Technologies", sector: "Consulting & Software", tier: "Tier 1" },
  { name: "Paytm", sector: "Fintech & Payments", tier: "E-Commerce" },
  { name: "HCL Technologies", sector: "Enterprise Infrastructure", tier: "Tier 1" },
];

export const CAMPUS_FACILITIES = [
  {
    title: "High-Tech Computing Hubs",
    tagline: "400+ Dell & HP Core i7 Workstations",
    description: "Gigabit LAN-connected labs, licensed developer suites, NVIDIA GPUs for machine learning, and round-the-clock power backup.",
    iconName: "Monitor",
  },
  {
    title: "Engineering Laboratories",
    tagline: "State-of-the-Art Instruments",
    description: "Fully equipped electronics, physics, digital circuits, and IoT experimentation benches under experienced technical supervision.",
    iconName: "Cpu",
  },
  {
    title: "Air-Conditioned Central Library",
    tagline: "25,000+ Print Volumes & IEEE Subscriptions",
    description: "Expansive reading halls, DELNET e-journal portal access, textbook book-bank schemes, and competitive exam resource banks.",
    iconName: "BookOpen",
  },
  {
    title: "Acoustic Seminar Halls",
    tagline: "250+ Seating Capacity",
    description: "Equipped with modern laser projection, digital audio matrices, and video-conferencing for national conferences and hackathons.",
    iconName: "Presentation",
  },
  {
    title: "Hostels & Cafeteria",
    tagline: "Secure Separate Boys & Girls Accommodation",
    description: "24/7 CCTV surveillance, biometric access, hygienic multi-cuisine dining, RO drinking water, and indoor sports lounges.",
    iconName: "Home",
  },
  {
    title: "Sports & Fitness Arena",
    tagline: "Holistic Development Complex",
    description: "Full-sized grounds for cricket and football, basketball court, badminton facilities, and table tennis clubs.",
    iconName: "Trophy",
  },
];

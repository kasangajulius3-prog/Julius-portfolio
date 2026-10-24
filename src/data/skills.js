import {
  FaCode,
  FaLaptopCode,
  FaTools,
  FaMicrochip,
  FaServer,
  FaDatabase,
  FaRobot,
  FaShieldAlt,
  FaKey,
} from "react-icons/fa";

// Technologies I have used or studied. Move an item here only when it is true.
export const skills = [
  {
    name: "Programming Languages",
    icon: FaCode,
    items: ["Java", "Python", "C++", "JavaScript"],
  },
  {
    name: "Frontend Development",
    icon: FaLaptopCode,
    items: ["HTML", "CSS", "React", "Responsive Web Design"],
  },
  {
    name: "Computer Science Foundations",
    icon: FaMicrochip,
    items: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networking",
      "Cybersecurity (CTF)",
    ],
  },
  {
    name: "Developer Tools",
    icon: FaTools,
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Vite",
      "ESLint",
      "Linux",
      "Power BI",
      "Excel",
    ],
  },
];

// Technologies and concepts I am actively learning (not claimed as proficiency).
export const learning = [
  {
    name: "Backend Development",
    icon: FaServer,
    items: ["FastAPI", "REST APIs", "System Architecture"],
  },
  { name: "Databases", icon: FaDatabase, items: ["SQL", "PostgreSQL"] },
  {
    name: "Machine Learning & AI",
    icon: FaRobot,
    items: [
      "Machine Learning Fundamentals",
      "Data Preprocessing",
      "Supervised Learning",
      "Model Evaluation",
      "Python for Data Analysis",
    ],
  },
  {
    name: "Cybersecurity & Cryptography",
    icon: FaShieldAlt,
    items: [
      "Network Security Fundamentals",
      "Secure Software Development",
      "Encryption & Hashing Concepts",
      "Authentication & Digital Signatures",
    ],
  },
];

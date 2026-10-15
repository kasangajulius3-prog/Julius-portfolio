// Verified projects only. Add a project here once it really exists.
// status: "Completed" | "In Progress" | "Planned"
export const projects = [
  {
    title: "Personal Developer Portfolio",
    description:
      "A responsive personal portfolio developed using React, Vite, and CSS to showcase my technical skills, projects, professional interests, and development journey.",
    href: "https://github.com/kasangajulius3-prog/Julius-portfolio",
    liveHref: "https://kasangajulius3-prog.github.io/Julius-portfolio/",
    status: "Completed",
    statusNote: "Ongoing improvements",
    screenshot: null, // e.g. { src: "assets/portfolio.webp", alt: "...", width: 1200, height: 750 }
    tags: ["React", "JavaScript", "Vite", "CSS", "GitHub Pages"],
  },
];

// Ideas I intend to build. None of these are implemented, so they have no
// repository, demo, screenshots or results. Move one to `projects` (with
// real links and the right status) once work on it actually starts.
export const plannedProjects = [
  {
    title: "University Admissions Access Platform",
    description:
      "A USSD-based platform concept that would let prospective students check admissions information, programme availability and application guidance from a basic mobile phone, with no internet access required.",
    status: "Planned",
    tags: ["Python", "FastAPI", "PostgreSQL", "React", "USSD gateway"],
  },
  {
    title: "Student Academic Performance Prediction",
    description:
      "A machine learning project idea exploring how study habits and attendance relate to academic performance, covering data preprocessing, model evaluation, visualisation and a simple prediction interface.",
    status: "Planned",
    tags: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "FastAPI",
    ],
  },
  {
    title: "Cryptography Learning Toolkit",
    description:
      "An educational toolkit idea demonstrating classical encryption, hashing and digital signatures, built on established cryptographic libraries rather than custom implementations.",
    status: "Planned",
    tags: ["Python", "C++", "Cryptography libraries", "React"],
  },
];

import ctfTeam from "../assets/ctf-team.webp";

// Experience, leadership, hackathons, competitions, CTFs, team projects.
// Add only real, verifiable entries. The section stays hidden while empty.
// Entry shape (all optional except title):
// { title, organization, period, role, objective, responsibilities,
//   technologies: [], outcome }
export const activities = [
  {
    title: "Cybersecurity Internship",
    organization: "Networkwalks IT Solutions & Training",
    period: "25 Oct – 22 Nov 2026",
    role: "Intern",
  },
  {
    title: "Digital Safe Zambia CTF 2026",
    role: "Cryptography Specialist (team)",
    image: {
      src: ctfTeam,
      alt: "Teams in black Digital Safe Advers-AI 2026 CTF caps and shirts working on laptops at lecture-hall desks during the competition.",
      width: 1400,
      height: 934,
    },
    objective:
      "A cybersecurity capture-the-flag competition where teams solve security challenges (vaults) to earn points.",
    outcome:
      "My team placed 5th of 11 finalist teams, solving 9 of 17 vaults. I solved 4 of them, the highest individual count on the team.",
  },
];

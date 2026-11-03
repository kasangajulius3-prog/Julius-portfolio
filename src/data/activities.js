import ctfTeam from "../assets/ctf-team.webp";
import ctfScoreboard from "../assets/ctf-scoreboard.webp";

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
    images: [
      {
        src: ctfTeam,
        alt: "Teams in black Digital Safe Advers-AI 2026 CTF caps and shirts working on laptops at lecture-hall desks during the competition.",
        width: 1400,
        height: 934,
      },
      {
        src: ctfScoreboard,
        alt: "ADVERS-AI CTF 2026 Finals leaderboard of 11 teams. Team MKBA-Stoic95 is in 5th place with 1,310 points.",
        width: 1400,
        height: 744,
      },
    ],
    objective:
      "A cybersecurity capture-the-flag competition where teams solve security challenges (vaults) to earn points.",
    outcome:
      "My team placed 5th of 11 finalist teams, solving 9 of 17 vaults and scoring 1,310 points. I solved 4 of them, the highest individual count on the team.",
  },
];

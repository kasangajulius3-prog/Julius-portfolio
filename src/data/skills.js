import {
  FaPython,
  FaReact,
  FaLinux,
  FaShieldAlt,
  FaEthernet,
} from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa6";

export const skills = [
  {
    name: "Python",
    description: "Scripting, backend development, algorithms & problem solving",
    icon: FaPython,
  },
  {
    name: "React",
    description:
      "Modern component architectures, interactive UIs & state management",
    icon: FaReact,
  },
  {
    name: "C++",
    description: "Systems programming, memory management & data structures",
    icon: SiCplusplus,
  },
  {
    name: "Networking",
    description:
      "Data communications, protocols, TCP/IP & how systems talk to each other",
    icon: FaEthernet,
  },
  {
    name: "Linux & Operating Systems",
    description:
      "Processes, memory, scheduling, file systems & the command line",
    icon: FaLinux,
  },
  {
    name: "Cybersecurity",
    description:
      "Capture-the-flag challenges, secure design & thinking like an attacker",
    icon: FaShieldAlt,
  },
  {
    name: "System Design",
    description:
      "Application architecture, scalability, networking & distributed systems",
    icon: FaNetworkWired,
  },
];

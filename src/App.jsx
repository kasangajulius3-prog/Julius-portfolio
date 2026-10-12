import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaPython, FaReact } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa6";
import portrait from "./assets/portrait.jpg";
import useScrollReveal from "./useScrollReveal";
import "./App.css";

// Custom Stoic SVG Icon component
function StoicIcon({ className = "stoic-logo-icon" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      width="22"
      height="22"
      fill="currentColor"
      aria-hidden="true"
    >
      <polygon
        points="50,6 94,50 50,94 6,50"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <polygon points="50,22 74,36 26,36" fill="currentColor" opacity="0.95" />
      <rect x="23" y="38" width="54" height="4" rx="1" fill="currentColor" />
      <rect x="28" y="44" width="7" height="26" rx="1.5" fill="currentColor" />
      <rect x="41" y="44" width="7" height="26" rx="1.5" fill="currentColor" />
      <rect x="53" y="44" width="7" height="26" rx="1.5" fill="currentColor" />
      <rect x="65" y="44" width="7" height="26" rx="1.5" fill="currentColor" />
      <rect x="23" y="72" width="54" height="4" rx="1" fill="currentColor" />
      <rect x="20" y="77" width="60" height="5" rx="1.5" fill="currentColor" />
    </svg>
  );
}

const skills = [
  {
    name: "Python",
    description: "Scripting, backend development, algorithms & problem solving",
    icon: FaPython,
  },
  {
    name: "React",
    description: "Modern component architectures, interactive UIs & state management",
    icon: FaReact,
  },
  {
    name: "C++",
    description: "Systems programming, memory management & data structures",
    icon: SiCplusplus,
  },
  {
    name: "System Design",
    description: "Application architecture, scalability, networking & distributed systems",
    icon: FaNetworkWired,
  },
];

const projects = [
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio built using React, Vite, and custom CSS animations, hosted on GitHub Pages.",
    href: "https://github.com/kasangajulius3-prog/Julius-portfolio",
    liveHref: "https://kasangajulius3-prog.github.io/Julius-portfolio/",
    tags: ["React", "Vite", "CSS3", "GitHub Pages"],
  },
];

const contacts = [
  {
    label: "Personal: kasangajulius3@gmail.com",
    href: "mailto:kasangajulius3@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "Work: kasangajulius42@gmail.com",
    href: "mailto:kasangajulius42@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "+260 571 642 568",
    href: "tel:+260571642568",
    icon: FaPhone,
  },
  {
    label: "+260 760 381 141",
    href: "tel:+260760381141",
    icon: FaPhone,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/julius-kasanga-5255683a4",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/kasangajulius3-prog",
    icon: FaGithub,
  },
];

function App() {
  useScrollReveal();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      {/* Earth in Space Interactive Background */}
      <div className="bg-video-container" aria-hidden="true">
        <video
          className="bg-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={`${import.meta.env.BASE_URL}assets/earth.webm`} type="video/webm" />
        </video>
        <div className="bg-video-overlay" />
        <div className="stars-layer" />
      </div>

      <header className="site-header anim-slide-down">
        <nav className="nav" aria-label="Primary">
          <a className="nav-brand" href="#top">
            <StoicIcon className="brand-stoic-icon" />
            <span>Julius Kasanga</span>
          </a>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Tools & Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p
              className="hero-eyebrow anim-fade-up"
              style={{ "--anim-order": 0 }}
            >
              Aspiring Software Engineer
            </p>
            <h1
              id="hero-title"
              className="hero-title-gradient anim-fade-up"
              style={{ "--anim-order": 1 }}
            >
              Julius Kasanga
            </h1>
            <p
              className="hero-lede anim-fade-up"
              style={{ "--anim-order": 2 }}
            >
              Motivated Computer Science student at Mukuba University with a
              strong passion for building software and solving real-world
              problems.
            </p>
            <div
              className="hero-actions anim-fade-up"
              style={{ "--anim-order": 3 }}
            >
              <a className="btn btn-primary" href="#projects">
                View projects
              </a>
              <a className="btn btn-ghost" href="#contact">
                Get in touch
              </a>
            </div>
          </div>
          <div className="hero-portrait anim-fade-in-right">
            <img src={portrait} alt="Portrait of Julius Kasanga" />
          </div>
        </section>

        <section id="about" className="section" aria-labelledby="about-title">
          <h2 id="about-title" data-reveal>
            About Me
          </h2>
          <p data-reveal style={{ "--delay": "0.1s" }}>
            I'm a Computer Science student and aspiring Software Engineer based
            in Zambia, passionate about building practical technology that
            solves real-world problems.
          </p>
          <p data-reveal style={{ "--delay": "0.2s" }}>
            I enjoy working across software development, web technologies,
            cybersecurity, and systems design. I'm constantly learning by
            building projects, participating in technical challenges, and
            exploring how technology can make everyday processes more
            accessible and efficient.
          </p>
          <p data-reveal style={{ "--delay": "0.3s" }}>
            My goal is to grow into a well-rounded software engineer who can
            design, build, and secure reliable systems. I'm particularly
            interested in backend development, application architecture, and
            cybersecurity.
          </p>
          <p data-reveal style={{ "--delay": "0.4s" }}>
            When I'm not studying or coding, I'm usually experimenting with a
            new technology, breaking something I probably shouldn't have
            broken, and then figuring out how to fix it.
          </p>
          <blockquote className="quote-badge" data-reveal style={{ "--delay": "0.5s" }}>
            <span className="quote-latin">"Carpe diem"</span>
            <span className="quote-sub">— Seize the day, make each moment count</span>
          </blockquote>
        </section>

        <section id="skills" className="section" aria-labelledby="skills-title">
          <h2 id="skills-title" data-reveal>
            Tools & Skills
          </h2>
          <div className="skills-grid">
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <div
                  className="skill-card"
                  key={skill.name}
                  data-reveal
                  style={{ "--delay": `${(i + 1) * 0.1}s` }}
                >
                  <div className="skill-icon-wrapper">
                    <Icon className="skill-icon" aria-hidden="true" />
                  </div>
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-desc">{skill.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section
          id="projects"
          className="section"
          aria-labelledby="projects-title"
        >
          <h2 id="projects-title" data-reveal>
            Projects
          </h2>
          <div className="project-grid">
            {projects.map((project, i) => (
              <article
                className="project-card"
                key={project.title}
                data-reveal
                style={{ "--delay": `${(i + 1) * 0.12}s` }}
              >
                <div className="project-header">
                  <h3>{project.title}</h3>
                </div>
                <p>{project.description}</p>
                {project.tags && (
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span className="project-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="project-links">
                  {project.liveHref && (
                    <a
                      href={project.liveHref}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link-btn"
                    >
                      <span>Live Site</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link-btn ghost"
                    >
                      <FaGithub aria-hidden="true" />
                      <span>Repository</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="section"
          aria-labelledby="contact-title"
        >
          <h2 id="contact-title" data-reveal>
            Contact
          </h2>
          <ul className="contact-list">
            {contacts.map((contact, i) => {
              const Icon = contact.icon;
              return (
                <li
                  key={contact.label}
                  data-reveal
                  style={{ "--delay": `${(i + 1) * 0.08}s` }}
                >
                  <a
                    href={contact.href}
                    target={
                      contact.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel="noreferrer"
                  >
                    <Icon aria-hidden="true" />
                    <span>{contact.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </main>

      <footer className="site-footer" data-reveal>
        <p>© {new Date().getFullYear()} Julius Kasanga</p>
      </footer>
    </>
  );
}

export default App;

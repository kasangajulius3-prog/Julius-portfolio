import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import portrait from "./assets/portrait.jpg";
import useScrollReveal from "./useScrollReveal";
import "./App.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio built using React.",
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

      <header className="site-header anim-slide-down">
        <nav className="nav" aria-label="Primary">
          <a className="nav-brand" href="#top">
            Julius Kasanga
          </a>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
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
                <h3>{project.title}</h3>
                <p>{project.description}</p>
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

import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import portrait from "./assets/portrait.jpg";
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
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
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
            <p className="hero-eyebrow">Aspiring Software Engineer</p>
            <h1 id="hero-title">Julius Kasanga</h1>
            <p className="hero-lede">
              Motivated Computer Science student at Mukuba University with a
              strong passion for building software and solving real-world
              problems.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                View projects
              </a>
              <a className="btn btn-ghost" href="#contact">
                Get in touch
              </a>
            </div>
          </div>
          <div className="hero-portrait">
            <img src={portrait} alt="Portrait of Julius Kasanga" />
          </div>
        </section>

        <section id="about" className="section" aria-labelledby="about-title">
          <h2 id="about-title">About Me</h2>
          <p>
            I'm a Computer Science student and aspiring Software Engineer based
            in Zambia, passionate about building practical technology that
            solves real-world problems.
          </p>
          <p>
            I enjoy working across software development, web technologies,
            cybersecurity, and systems design. I'm constantly learning by
            building projects, participating in technical challenges, and
            exploring how technology can make everyday processes more
            accessible and efficient.
          </p>
          <p>
            My goal is to grow into a well-rounded software engineer who can
            design, build, and secure reliable systems. I'm particularly
            interested in backend development, application architecture, and
            cybersecurity.
          </p>
          <p>
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
          <h2 id="projects-title">Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
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
          <h2 id="contact-title">Contact</h2>
          <ul className="contact-list">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              return (
                <li key={contact.label}>
                  <a
                    href={contact.href}
                    target={
                      contact.href.startsWith("mailto:") ? undefined : "_blank"
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

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Julius Kasanga</p>
      </footer>
    </>
  );
}

export default App;

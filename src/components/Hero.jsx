import CvButton from "./CvButton";

export default function Hero({ portrait }) {
  return (
    <section
      className="hero"
      id="top"
      tabIndex={-1}
      aria-labelledby="hero-title"
    >
      <div className="hero-copy">
        <h1
          id="hero-title"
          className="hero-title-gradient anim-fade-up"
          style={{ "--anim-order": 0 }}
        >
          Julius Kasanga
        </h1>
        <p className="hero-eyebrow anim-fade-up" style={{ "--anim-order": 1 }}>
          Computer Science Student | Aspiring Software Engineer
        </p>
        <p className="hero-lede anim-fade-up" style={{ "--anim-order": 2 }}>
          I'm a Computer Science student at Mukuba University, Zambia,
          passionate about designing and building practical software solutions.
          My interests span backend development, software architecture, machine
          learning, cybersecurity, and cryptography.
        </p>
        <div
          className="hero-actions anim-fade-up"
          style={{ "--anim-order": 3 }}
        >
          <a className="btn btn-primary" href="#projects">
            View Projects
          </a>
          <CvButton />
          <a className="btn btn-ghost" href="#contact">
            Contact Me
          </a>
        </div>
      </div>
      <div className="hero-portrait anim-fade-in-right">
        <img
          src={portrait}
          alt="Portrait of Julius Kasanga"
          width="680"
          height="850"
          fetchPriority="high"
          decoding="async"
        />
      </div>
    </section>
  );
}

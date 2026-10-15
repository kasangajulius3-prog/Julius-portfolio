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
        <p className="hero-eyebrow anim-fade-up" style={{ "--anim-order": 0 }}>
          Aspiring Software Engineer
        </p>
        <h1
          id="hero-title"
          className="hero-title-gradient anim-fade-up"
          style={{ "--anim-order": 1 }}
        >
          Julius Kasanga
        </h1>
        <p className="hero-lede anim-fade-up" style={{ "--anim-order": 2 }}>
          Motivated Computer Science student at Mukuba University with a strong
          passion for building software and solving real-world problems.
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
          <CvButton />
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

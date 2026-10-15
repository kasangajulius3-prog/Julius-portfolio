export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <h2 id="about-title" data-reveal>
        About Me
      </h2>
      <p data-reveal style={{ "--delay": "0.1s" }}>
        I'm Julius Kasanga, a Computer Science student at Mukuba University in
        Zambia, working toward a career in software engineering.
      </p>
      <p data-reveal style={{ "--delay": "0.2s" }}>
        I'm particularly interested in understanding how software systems work,
        from application development and backend architecture to the security
        mechanisms that protect them.
      </p>
      <p data-reveal style={{ "--delay": "0.3s" }}>
        My technical interests extend into machine learning, cybersecurity, and
        cryptography, where I'm exploring how intelligent algorithms and secure
        computing principles can be applied to real-world problems.
      </p>
      <p data-reveal style={{ "--delay": "0.4s" }}>
        I enjoy learning through practical development, technical challenges,
        experimentation, and collaborative projects.
      </p>
      <p data-reveal style={{ "--delay": "0.5s" }}>
        My long-term goal is to become a skilled software engineer capable of
        designing reliable, scalable, and secure applications while continuously
        expanding my knowledge of emerging technologies.
      </p>
      <blockquote
        className="quote-badge"
        data-reveal
        style={{ "--delay": "0.6s" }}
      >
        <span className="quote-latin">Stoic | Carpe Diem</span>
        <span className="quote-sub">
          — Seize the day, make each moment count
        </span>
      </blockquote>
    </section>
  );
}

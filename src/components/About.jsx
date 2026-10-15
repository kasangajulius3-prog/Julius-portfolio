export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <h2 id="about-title" data-reveal>
        About Me
      </h2>
      <p data-reveal style={{ "--delay": "0.1s" }}>
        I'm a Computer Science student and aspiring Software Engineer based in
        Zambia, passionate about building practical technology that solves
        real-world problems.
      </p>
      <p data-reveal style={{ "--delay": "0.2s" }}>
        I enjoy working across software development, web technologies,
        cybersecurity, and systems design. I'm constantly learning by building
        projects, participating in technical challenges, and exploring how
        technology can make everyday processes more accessible and efficient.
      </p>
      <p data-reveal style={{ "--delay": "0.3s" }}>
        My goal is to grow into a well-rounded software engineer who can design,
        build, and secure reliable systems. I'm particularly interested in
        backend development, application architecture, and cybersecurity.
      </p>
      <p data-reveal style={{ "--delay": "0.4s" }}>
        When I'm not studying or coding, I'm usually experimenting with a new
        technology, breaking something I probably shouldn't have broken, and
        then figuring out how to fix it.
      </p>
      <blockquote
        className="quote-badge"
        data-reveal
        style={{ "--delay": "0.5s" }}
      >
        <span className="quote-latin">"Carpe diem"</span>
        <span className="quote-sub">
          — Seize the day, make each moment count
        </span>
      </blockquote>
    </section>
  );
}

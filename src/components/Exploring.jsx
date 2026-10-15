import { exploring } from "../data/exploring";

export default function Exploring() {
  return (
    <section
      id="exploring"
      className="section"
      aria-labelledby="exploring-title"
    >
      <h2 id="exploring-title" data-reveal>
        Currently Exploring
      </h2>
      <div className="skills-grid">
        {exploring.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              className="skill-card"
              key={item.name}
              data-reveal
              style={{ "--delay": `${(i + 1) * 0.1}s` }}
            >
              <div className="skill-icon-wrapper">
                <Icon className="skill-icon" aria-hidden="true" />
              </div>
              <h3 className="skill-name">{item.name}</h3>
              <p className="skill-desc">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

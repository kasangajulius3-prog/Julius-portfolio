import { skills } from "../data/skills";

export default function Skills() {
  return (
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
  );
}

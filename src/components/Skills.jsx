import { learning, skills } from "../data/skills";
import SkillGroup from "./SkillGroup";

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <h2 id="skills-title" data-reveal>
        Tools & Skills
      </h2>
      <h3 className="subsection-title" data-reveal>
        Skills & Technologies
      </h3>
      <div className="skills-grid">
        {skills.map((group, i) => (
          <SkillGroup key={group.name} group={group} index={i} />
        ))}
      </div>
      <h3 className="subsection-title" data-reveal>
        Currently Learning
      </h3>
      <p className="section-intro" data-reveal>
        Technologies and concepts I'm actively studying, not yet claimed as
        strengths.
      </p>
      <div className="skills-grid">
        {learning.map((group, i) => (
          <SkillGroup key={group.name} group={group} index={i} />
        ))}
      </div>
    </section>
  );
}

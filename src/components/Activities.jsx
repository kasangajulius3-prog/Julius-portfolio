import { activities } from "../data/activities";

// Renders nothing until real entries are added to src/data/activities.js.
export default function Activities() {
  if (!activities.length) return null;
  return (
    <section
      id="activities"
      className="section"
      aria-labelledby="activities-title"
    >
      <h2 id="activities-title" data-reveal>
        Leadership & Activities
      </h2>
      <div className="project-grid">
        {activities.map((a, i) => (
          <article
            className="info-card"
            key={a.title}
            data-reveal
            style={{ "--delay": `${(i + 1) * 0.1}s` }}
          >
            <h3>{a.title}</h3>
            {a.role && <p className="info-meta">{a.role}</p>}
            {a.objective && <p>{a.objective}</p>}
            {a.responsibilities && <p>{a.responsibilities}</p>}
            {a.technologies?.length > 0 && (
              <ul className="chip-list">
                {a.technologies.map((t) => (
                  <li className="skill-chip" key={t}>
                    {t}
                  </li>
                ))}
              </ul>
            )}
            {a.outcome && <p>{a.outcome}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}

import { certifications, coursework, education } from "../data/education";

export default function Education() {
  return (
    <section
      id="education"
      className="section"
      aria-labelledby="education-title"
    >
      <h2 id="education-title" data-reveal>
        Education
      </h2>
      <div className="info-card" data-reveal style={{ "--delay": "0.1s" }}>
        <h3>{education.program}</h3>
        <p className="info-meta">
          {education.institution}, {education.location} · Expected graduation{" "}
          {education.expectedGraduation}
        </p>
        <p>{education.description}</p>
        <h4 className="info-label">Completed coursework</h4>
        <ul className="chip-list">
          {coursework.map((c) => (
            <li className="skill-chip" key={c}>
              {c}
            </li>
          ))}
        </ul>
      </div>
      {certifications.length > 0 && (
        <>
          <h3 className="subsection-title" data-reveal>
            Certifications
          </h3>
          <ul className="cert-list">
            {certifications.map((c) => (
              <li
                className="info-card"
                key={c.name}
                data-reveal
                style={{ "--delay": "0.1s" }}
              >
                <h4>
                  {c.credentialUrl ? (
                    <a href={c.credentialUrl} target="_blank" rel="noreferrer">
                      {c.name}
                    </a>
                  ) : (
                    c.name
                  )}
                </h4>
                <p className="info-meta">
                  {c.issuer}
                  {c.date ? ` · ${c.date}` : ""}
                </p>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}

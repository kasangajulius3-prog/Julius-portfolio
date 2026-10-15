import CvButton from "./CvButton";
import { skills } from "../data/skills";

export default function CvSection() {
  return (
    <section id="cv" className="section" aria-labelledby="cv-title">
      <h2 id="cv-title" data-reveal>
        Curriculum Vitae
      </h2>
      <div className="cv-card" data-reveal style={{ "--delay": "0.1s" }}>
        <dl className="cv-details">
          <div>
            <dt>Education</dt>
            <dd>Computer Science student, Mukuba University, Zambia</dd>
          </div>
          <div>
            <dt>Focus areas</dt>
            <dd>
              Software engineering, backend development, application
              architecture and cybersecurity
            </dd>
          </div>
          <div>
            <dt>Tools &amp; skills</dt>
            <dd>{skills.map((s) => s.name).join(" · ")}</dd>
          </div>
        </dl>
        <CvButton className="btn btn-primary" />
      </div>
    </section>
  );
}

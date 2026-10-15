import { plannedProjects, projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

// Filters are intentionally omitted: with a single verified project they
// would be empty. Add category filters once there are enough projects.
export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <h2 id="projects-title" data-reveal>
        Projects
      </h2>
      <div className="project-grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
      {plannedProjects.length > 0 && (
        <>
          <h3 className="subsection-title" data-reveal>
            Planned Projects
          </h3>
          <p className="section-intro" data-reveal>
            Ideas I intend to build. None of these have been implemented yet.
          </p>
          <div className="project-grid">
            {plannedProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

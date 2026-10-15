import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project, index }) {
  return (
    <article
      className="project-card"
      data-reveal
      style={{ "--delay": `${(index + 1) * 0.12}s` }}
    >
      <div className="project-header">
        <h3>{project.title}</h3>
        {project.status && (
          <span
            className={`project-status status-${project.status
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
          >
            {project.status}
          </span>
        )}
      </div>
      {project.screenshot && (
        <img
          className="project-shot"
          src={`${import.meta.env.BASE_URL}${project.screenshot.src.replace(/^\//, "")}`}
          alt={project.screenshot.alt}
          width={project.screenshot.width}
          height={project.screenshot.height}
          loading="lazy"
          decoding="async"
        />
      )}
      <p>{project.description}</p>
      {project.tags && (
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span className="project-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="project-links">
        {project.liveHref && (
          <a
            href={project.liveHref}
            target="_blank"
            rel="noreferrer"
            className="project-link-btn"
          >
            <span>Live Site</span>
            <span aria-hidden="true">↗</span>
          </a>
        )}
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="project-link-btn ghost"
          >
            <FaGithub aria-hidden="true" />
            <span>Repository</span>
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}

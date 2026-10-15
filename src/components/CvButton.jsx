import { cvUrl } from "../data/site";

export default function CvButton({ className = "btn btn-ghost" }) {
  if (!cvUrl) return null;
  return (
    <a
      className={className}
      href={cvUrl}
      download
      target="_blank"
      rel="noreferrer"
    >
      Download CV
    </a>
  );
}

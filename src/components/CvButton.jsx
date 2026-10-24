import { contactEmail } from "../data/site";

const subject = encodeURIComponent("CV request");
const body = encodeURIComponent(
  "Hello Julius,\n\nI'd like to request a copy of your CV.\n\nName:\nOrganisation:\n",
);

// The CV is not published on the site. Visitors request it by email.
export default function CvButton({ className = "btn btn-ghost" }) {
  return (
    <a
      className={className}
      href={`mailto:${contactEmail}?subject=${subject}&body=${body}`}
    >
      Request CV
    </a>
  );
}

export default function StoicIcon({ className = "stoic-logo-icon" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      width="22"
      height="22"
      fill="currentColor"
      aria-hidden="true"
    >
      <polygon
        points="50,6 94,50 50,94 6,50"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <polygon points="50,22 74,36 26,36" fill="currentColor" opacity="0.95" />
      <rect x="23" y="38" width="54" height="4" rx="1" fill="currentColor" />
      <rect x="28" y="44" width="7" height="26" rx="1.5" fill="currentColor" />
      <rect x="41" y="44" width="7" height="26" rx="1.5" fill="currentColor" />
      <rect x="53" y="44" width="7" height="26" rx="1.5" fill="currentColor" />
      <rect x="65" y="44" width="7" height="26" rx="1.5" fill="currentColor" />
      <rect x="23" y="72" width="54" height="4" rx="1" fill="currentColor" />
      <rect x="20" y="77" width="60" height="5" rx="1.5" fill="currentColor" />
    </svg>
  );
}

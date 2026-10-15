/* global __HAS_CV__ */
// Public site configuration. Never put secrets here.

// The CV button appears automatically when this file exists at build time:
//   public/cv/Julius-Kasanga-CV.pdf
export const cvUrl = __HAS_CV__
  ? `${import.meta.env.BASE_URL}cv/Julius-Kasanga-CV.pdf`
  : null;

// Contact form endpoint (a public form URL from Formspree, Web3Forms, etc.).
// Set VITE_CONTACT_ENDPOINT at build time. When empty, the form falls back to
// opening the visitor's email app, and never claims a message was delivered.
export const contactEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT || "";
export const contactEmail = "kasangajulius3@gmail.com";

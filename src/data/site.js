// Public site configuration. Never put secrets here.

// Contact form endpoint (a public form URL from Formspree, Web3Forms, etc.).
// Set VITE_CONTACT_ENDPOINT at build time. When empty, the form falls back to
// opening the visitor's email app, and never claims a message was delivered.
export const contactEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT || "";
export const contactEmail = "kasangajulius42@gmail.com";

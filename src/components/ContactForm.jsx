import { useState } from "react";
import { contactEmail, contactEndpoint } from "../data/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Please enter your full name.";
  if (!v.email.trim()) e.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(v.email))
    e.email = "Enter a valid email, like name@example.com.";
  if (!v.subject.trim()) e.subject = "Please enter a subject.";
  if (v.message.trim().length < 10)
    e.message = "Please write at least 10 characters.";
  return e;
}

const fields = [
  { id: "name", label: "Full name", type: "text", autoComplete: "name" },
  { id: "email", label: "Email address", type: "email", autoComplete: "email" },
  { id: "subject", label: "Subject", type: "text", autoComplete: "off" },
  { id: "message", label: "Message", type: "textarea", autoComplete: "off" },
];

export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error | mailto

  const onChange = (e) =>
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      document.getElementById(Object.keys(found)[0])?.focus();
      return;
    }
    // Honeypot: bots fill the hidden field; silently drop those.
    if (e.target.elements._gotcha?.value) return;

    if (!contactEndpoint) {
      const body = `${values.message}\n\n${values.name} <${values.email}>`;
      window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(contactEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      setValues({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate data-reveal>
      <h3 className="contact-form-title">Send a message</h3>
      {fields.map((f) => {
        const err = errors[f.id];
        const shared = {
          id: f.id,
          name: f.id,
          value: values[f.id],
          onChange,
          autoComplete: f.autoComplete,
          "aria-invalid": err ? "true" : undefined,
          "aria-describedby": err ? `${f.id}-error` : undefined,
          required: true,
        };
        return (
          <div className="form-field" key={f.id}>
            <label htmlFor={f.id}>{f.label}</label>
            {f.type === "textarea" ? (
              <textarea rows="5" {...shared} />
            ) : (
              <input type={f.type} {...shared} />
            )}
            {err && (
              <p className="form-error" id={`${f.id}-error`}>
                {err}
              </p>
            )}
          </div>
        );
      })}
      <div className="form-hp" aria-hidden="true">
        <label>
          Leave this field empty
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <button
        className="btn btn-primary"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending"
          ? "Sending…"
          : contactEndpoint
            ? "Send message"
            : "Open in my email app"}
      </button>
      <div aria-live="polite">
        {status === "success" && (
          <p className="form-note form-success" role="status">
            Thanks! Your message was sent.
          </p>
        )}
        {status === "mailto" && (
          <p className="form-note" role="status">
            Your email app should have opened with the message ready to send.
            Nothing is sent until you press send there.
          </p>
        )}
        {status === "error" && (
          <p className="form-note form-failure" role="alert">
            Sorry, the message could not be sent. Please try again or email{" "}
            {contactEmail} directly.
          </p>
        )}
      </div>
    </form>
  );
}

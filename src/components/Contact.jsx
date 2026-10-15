import { contacts } from "../data/contacts";

export default function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <h2 id="contact-title" data-reveal>
        Contact
      </h2>
      <ul className="contact-list">
        {contacts.map((contact, i) => {
          const Icon = contact.icon;
          return (
            <li
              key={contact.label}
              data-reveal
              style={{ "--delay": `${(i + 1) * 0.08}s` }}
            >
              <a
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
              >
                <Icon aria-hidden="true" />
                <span>{contact.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

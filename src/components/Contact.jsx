import { useState } from "react";
import { CONTACT_LINKS, PROFILE } from "../data/portfolioData";
import Reveal from "./Reveal";
import Icon from "./Icons";
import styles from "./Contact.module.css";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${PROFILE.email}&su=${encodeURIComponent("Hello Saumya")}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
    } catch {
      const t = document.createElement("textarea");
      t.value = PROFILE.email;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      document.body.removeChild(t);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />
      <Reveal>
        <p className={styles.label}>05 · Let's connect</p>
        <h2 className={styles.title}>
          Let's build something <span className="gradient-text">reliable</span> together
        </h2>
        <p className={styles.desc}>
          I'm open to backend and full-stack roles — especially distributed systems, payments and
          platform engineering. The fastest way to reach me is email.
        </p>
      </Reveal>

      <Reveal delay={0.12}>
        <div className={styles.cta}>
          <a className="btn btn-primary" href={gmail} target="_blank" rel="noreferrer">
            <Icon name="mail" size={17} /> Email me
          </a>
          <button className="btn btn-outline" onClick={copy} type="button">
            {copied ? "Copied ✓" : PROFILE.email}
          </button>
          <a className="btn btn-outline" href={PROFILE.resume} target="_blank" rel="noreferrer">
            Download Resume <Icon name="download" size={16} />
          </a>
        </div>
        <p className={styles.meta}>
          <Icon name="pin" size={14} /> {PROFILE.location} &nbsp;·&nbsp; {PROFILE.phone}
        </p>

        <div className={styles.links}>
          {CONTACT_LINKS.map((c) => (
            <a key={c.label} href={c.href} className={styles.link} target="_blank" rel="noreferrer">
              <span className={styles.icon}>
                {c.icon === "codechef" ? <b>CC</b> : <Icon name={c.icon} size={17} />}
              </span>
              {c.label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

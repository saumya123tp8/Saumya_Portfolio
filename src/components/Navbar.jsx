import { useState } from "react";
import { NAV_LINKS, PROFILE } from "../data/portfolioData";
import { useScrolled, useScrollProgress, useActiveSection } from "../hooks/useAnimations";
import Icon from "./Icons";
import styles from "./Navbar.module.css";

const IDS = NAV_LINKS.map((l) => l.toLowerCase());

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();
  const progress = useScrollProgress();
  const active = useActiveSection(IDS);

  const go = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`} aria-label="Primary">
        <button className={styles.logo} onClick={() => go("home")} aria-label="Back to top">
          SK<span>.</span>
        </button>

        <ul className={styles.navLinks}>
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                className={`${styles.navLink} ${active === link.toLowerCase() ? styles.active : ""}`}
                onClick={() => go(link)}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <a className={styles.resume} href={PROFILE.resume} target="_blank" rel="noreferrer">
          Resume <Icon name="download" size={14} />
        </a>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>

        <div className={styles.progress} style={{ transform: `scaleX(${progress})` }} />
      </nav>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map((link) => (
            <button key={link} className={styles.mobileLink} onClick={() => go(link)}>
              {link}
            </button>
          ))}
          <a className={styles.mobileLink} href={PROFILE.resume} target="_blank" rel="noreferrer">
            Resume ↗
          </a>
        </div>
      )}
    </>
  );
}

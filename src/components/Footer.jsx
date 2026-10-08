import { SOCIALS } from "../data/portfolioData";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} Saumya Keservani</span>
      <span>Built with React · <a href={SOCIALS.github} target="_blank" rel="noreferrer">GitHub</a></span>
    </footer>
  );
}

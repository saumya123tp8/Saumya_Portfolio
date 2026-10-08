import { ABOUT, HERO_STATS, EDUCATION } from "../data/portfolioData";
import { useCountUp } from "../hooks/useAnimations";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import Icon from "./Icons";
import styles from "./About.module.css";

function Stat({ value, suffix, label }) {
  const [ref, n] = useCountUp(value);
  return (
    <div ref={ref} className={styles.stat}>
      <p className={styles.statValue}>
        {n.toLocaleString()}
        <span>{suffix}</span>
      </p>
      <p className={styles.statLabel}>{label}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <Reveal>
        <SectionHeader label="01 · About me" title="Engineering reliable systems" />
      </Reveal>

      <div className={styles.grid}>
        <Reveal>
          <div className={styles.bio}>
            {ABOUT.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className={styles.edu}>
            <div className={styles.eduIcon}><Icon name="cap" size={22} /></div>
            <p className={styles.eduLabel}>Education</p>
            <h3 className={styles.school}>{EDUCATION.school}</h3>
            <p className={styles.degree}>{EDUCATION.degree}</p>
            <div className={styles.eduMeta}>
              <span>{EDUCATION.period}</span>
              <span className={styles.cgpa}>{EDUCATION.score}</span>
            </div>
            
            <p className={styles.eduLoc}>{EDUCATION.location}</p>
          </div>
        </Reveal>
      </div>

      <div className={styles.stats}>
        {HERO_STATS.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}

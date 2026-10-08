import { EXPERIENCE } from "../data/portfolioData";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.wrap}>
        <Reveal>
          <SectionHeader label="02 · Where I've worked" title="Experience" />
        </Reveal>

        <div className={styles.timeline}>
          {EXPERIENCE.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 0.1}>
              <div className={styles.item}>
                <span className={`${styles.node} ${exp.current ? styles.nodeLive : ""}`} />
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div>
                      <h3 className={styles.company}>{exp.company}</h3>
                      <p className={styles.role}>
                        {exp.role} <span>·</span> {exp.type}
                      </p>
                    </div>
                    <span className={styles.period}>
                      {exp.current && <i className={styles.live} />}
                      {exp.period}
                    </span>
                  </div>

                  <ul className={styles.points}>
                    {exp.points.map((point, j) => (
                      <li key={j} className={styles.point}>
                        <span className={styles.bullet} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.tags}>
                    {exp.tags.map((t) => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

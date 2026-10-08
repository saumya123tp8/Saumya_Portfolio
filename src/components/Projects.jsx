import { PROJECTS } from "../data/portfolioData";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import Icon from "./Icons";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.wrap}>
        <Reveal>
          <SectionHeader label="03 · Things I've built" title="Projects" />
        </Reveal>

        <div className={styles.grid}>
          {PROJECTS.map((proj, i) => (
            <Reveal key={proj.name} delay={i * 0.1} className={proj.featured ? styles.span : ""}>
              <article className={`${styles.card} ${proj.featured ? styles.featured : ""}`}>
                {proj.featured && <span className={styles.ribbon}>Featured · Live in production</span>}
                <p className={styles.kicker}>{proj.kicker}</p>
                <h3 className={styles.name}>{proj.name}</h3>
                <p className={styles.desc}>{proj.desc}</p>

                <ul className={styles.points}>
                  {proj.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>

                <div className={styles.tags}>
                  {proj.tech.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>

                <div className={styles.links}>
                  {proj.link && (
                    <a href={proj.link} target="_blank" rel="noreferrer" className="btn btn-primary">
                      {proj.linkLabel} <Icon name="external" size={15} />
                    </a>
                  )}
                  <a href={proj.github} target="_blank" rel="noreferrer" className="btn btn-outline">
                    <Icon name="github" size={16} /> Source Code
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

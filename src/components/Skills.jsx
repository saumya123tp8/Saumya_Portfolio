import { SKILLS, CP_PROFILES, ACHIEVEMENTS } from "../data/portfolioData";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import Icon from "./Icons";
import styles from "./Skills.module.css";

const PLATFORM_ICON = { LeetCode: "leetcode", Codeforces: "codeforces", CodeChef: "codechef" };

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.wrap}>
        <Reveal>
          <SectionHeader label="04 · What I work with" title="Skills & Achievements" />
        </Reveal>

        <div className={styles.skillsGrid}>
          {Object.entries(SKILLS).map(([category, items], i) => (
            <Reveal key={category} delay={i * 0.08}>
              <div className={styles.skillCard}>
                <p className={styles.category}>{category}</p>
                <div className={styles.chips}>
                  {items.map((skill) => (
                    <span key={skill} className={styles.chip}>{skill}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className={styles.achieveHeader}>
            <p className={styles.achieveLabel}>Competitive Programming</p>
            <h3 className={styles.achieveTitle}>Problem-solving track record</h3>
          </div>
        </Reveal>

        <div className={styles.cpGrid}>
          {CP_PROFILES.map((c, i) => (
            <Reveal key={c.platform} delay={i * 0.08}>
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className={styles.cpCard}
                style={{ "--c": c.color }}
              >
                <div className={styles.cpTop}>
                  <span className={styles.cpIcon}>
                    {c.platform === "CodeChef" ? "CC" : <Icon name={PLATFORM_ICON[c.platform]} size={20} />}
                  </span>
                  <span className={styles.cpName}>{c.platform}</span>
                  <Icon name="external" size={15} className={styles.cpArrow} />
                </div>
                <p className={styles.cpValue}>{c.value}</p>
                <p className={styles.cpTitle}>{c.title}</p>
                <p className={styles.cpNote}>{c.note}</p>
              </a>
            </Reveal>
          ))}
        </div>

        <div className={styles.achieveGrid}>
          {ACHIEVEMENTS.map((a, i) => {
            const Tag = a.href ? "a" : "div";
            const props = a.href ? { href: a.href, target: "_blank", rel: "noreferrer" } : {};
            return (
              <Reveal key={a.label} delay={i * 0.07}>
                <Tag {...props} className={styles.achieveCard} style={{ "--c": a.color }}>
                  <p className={styles.achieveCardLabel}>
                    {a.label}
                    {a.href && <span>Certificate ↗</span>}
                  </p>
                  <p className={styles.achieveCardValue}>{a.value}</p>
                  <p className={styles.achieveCardNote}>{a.note}</p>
                </Tag>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

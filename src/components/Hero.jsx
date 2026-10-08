import { useTypewriter } from "../hooks/useAnimations";
import { PROFILE, SOCIALS, TYPED_ROLES } from "../data/portfolioData";
import GridCanvas from "./GridCanvas";
import Icon from "./Icons";
import styles from "./Hero.module.css";

export default function Hero() {
  const typed = useTypewriter(TYPED_ROLES);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className={styles.hero}>
      <GridCanvas />
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={`${styles.badge} anim-eyebrow`}>
            <span className={styles.dot} /> Open to new opportunities
          </p>
          <h1 className={`${styles.name} anim-name`}>
            Hi, I'm <span className="gradient-text">Saumya</span>
            <br />
            Keservani
          </h1>
          <div className={`${styles.typedRow} anim-typed`} aria-live="off">
            <span className={styles.prompt}>&gt;</span>
            <span>{typed}</span>
            <span className="cursor" />
          </div>
          <p className={`${styles.desc} anim-desc`}>
            Software Developer at TCS building high-value payment systems with Java, Spring Boot
            and Kafka. I turn complex banking and e-commerce workflows into reliable,
            concurrency-safe services — backed by 2000+ solved problems and a Knight rating on LeetCode.
          </p>

          <div className={`${styles.btns} anim-btns`}>
            <button className="btn btn-primary" onClick={() => scrollTo("projects")}>
              View Projects <Icon name="arrow" size={16} />
            </button>
            <a className="btn btn-outline" href={PROFILE.resume} target="_blank" rel="noreferrer">
              Download Resume <Icon name="download" size={16} />
            </a>
          </div>

          <div className={`${styles.social} anim-social`}>
            <a href={SOCIALS.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" size={20} /></a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={20} /></a>
            <a href="#contact" aria-label="Email me"><Icon name="mail" size={20} /></a>
            <span className={styles.loc}><Icon name="pin" size={15} />  {PROFILE.location} &nbsp;·&nbsp; {PROFILE.phone} </span>
          </div>
        </div>

        <div className={`${styles.card} anim-card`} aria-hidden="true">
          <div className={styles.cardBar}>
            <i /><i /><i />
            <span>SaumyaKeservani.java</span>
          </div>
          <pre className={styles.code}>
            <span className={styles.c}>{"// currently building at TCS"}</span>{"\n"}
            <span className={styles.k}>public class</span> <span className={styles.t}>Engineer</span> {"{"}{"\n"}
            {"  "}<span className={styles.k}>String</span> role{"    "}= <span className={styles.s}>"Software Developer"</span>;{"\n"}
            {"  "}<span className={styles.k}>String</span> stack{"   "}= <span className={styles.s}>"Java · Spring Boot"</span>;{"\n"}
            {"  "}<span className={styles.k}>String</span> infra{"   "}= <span className={styles.s}>"Kafka · Redis · AWS"</span>;{"\n"}
            {"  "}<span className={styles.k}>String</span> domain{"  "}= <span className={styles.s}>"Payments · ISO 20022"</span>;{"\n"}
            {"  "}<span className={styles.k}>int</span> leetcode{"   "}= <span className={styles.n}>1942</span>;{"\n"}
            {"  "}<span className={styles.k}>boolean</span> openToWork = <span className={styles.n}>true</span>;{"\n"}
            {"}"}
          </pre>
        </div>
      </div>

      <button className={styles.scroll} onClick={() => scrollTo("about")} aria-label="Scroll down">
        <span />
      </button>
    </section>
  );
}

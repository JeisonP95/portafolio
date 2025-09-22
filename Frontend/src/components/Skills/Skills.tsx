"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import styles from "./Skills.module.css"

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const skills = [
    {
      name: "React",
      category: "Frontend",
      level: "Avanzado",
      icon: "⚛️",
      color: "#61DAFB",
      description: "Desarrollo de interfaces interactivas y componentes reutilizables",
    },
    {
      name: "TypeScript",
      category: "Lenguaje",
      level: "Intermedio",
      icon: "🔷",
      color: "#3178C6",
      description: "Tipado estático para JavaScript, mejorando la robustez del código",
    },
    {
      name: "Node.js",
      category: "Backend",
      level: "Intermedio",
      icon: "🟢",
      color: "#339933",
      description: "Desarrollo de APIs y servicios del lado del servidor",
    },
    {
      name: "Express",
      category: "Framework",
      level: "Intermedio",
      icon: "🚀",
      color: "#000000",
      description: "Framework web minimalista para Node.js",
    },
    {
      name: "MongoDB",
      category: "Base de Datos",
      level: "Intermedio",
      icon: "🍃",
      color: "#47A248",
      description: "Base de datos NoSQL para aplicaciones modernas",
    },
    {
      name: "MySQL",
      category: "Base de Datos",
      level: "Intermedio",
      icon: "🐬",
      color: "#4479A1",
      description: "Sistema de gestión de bases de datos relacionales",
    },
    {
      name: "Git",
      category: "Herramientas",
      level: "Intermedio",
      icon: "📚",
      color: "#F05032",
      description: "Control de versiones y colaboración en equipo",
    },
    {
      name: "Vercel",
      category: "Deployment",
      level: "Intermedio",
      icon: "▲",
      color: "#000000",
      description: "Plataforma de despliegue para aplicaciones web modernas",
    },
  ]

  const categories = ["Frontend", "Backend", "Base de Datos", "Herramientas", "Deployment", "Lenguaje", "Framework"]

  return (
    <section id="habilidades" className={styles.skills} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Habilidades Técnicas</h2>
          <p className={styles.subtitle}>
            Tecnologías y herramientas que domino para crear soluciones web completas y eficientes.
          </p>
        </motion.div>

        <motion.ul
          className={styles.skillsGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skill) => (
            <motion.li key={skill.name} className={styles.skillCard} variants={skillVariants}>
              <div className={styles.skillHeader}>
                <div className={styles.skillIcon} style={{ backgroundColor: `${skill.color}20` }}>
                  <span style={{ color: skill.color }}>{skill.icon}</span>
                </div>
                <div className={styles.skillInfo}>
                  <h3 className={styles.skillName}>{skill.name}</h3>
                  <span className={styles.skillCategory}>{skill.category}</span>
                </div>
                <div className={styles.skillLevel}>
                  <span className={`${styles.levelBadge} ${styles[skill.level.toLowerCase()]}`}>{skill.level}</span>
                </div>
              </div>
              <p className={styles.skillDescription}>{skill.description}</p>
              <div className={styles.skillProgress}>
                <div
                  className={styles.progressBar}
                  style={{
                    backgroundColor: skill.color,
                    width: skill.level === "Avanzado" ? "90%" : skill.level === "Intermedio" ? "70%" : "50%",
                  }}
                />
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className={styles.skillsOverview}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className={styles.overviewTitle}>Áreas de Especialización</h3>
          <div className={styles.categoriesGrid}>
            {categories.map((category) => {
              const categorySkills = skills.filter((skill) => skill.category === category)
              return (
                <motion.div
                  key={category}
                  className={styles.categoryCard}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <h4 className={styles.categoryTitle}>{category}</h4>
                  <div className={styles.categorySkills}>
                    {categorySkills.map((skill) => (
                      <span key={skill.name} className={styles.categorySkill}>
                        {skill.name}
                      </span>
                    ))}
                  </div>
                  <div className={styles.categoryCount}>{categorySkills.length} tecnologías</div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          className={styles.learningSection}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className={styles.learningCard}>
            <h3 className={styles.learningTitle}>Siempre Aprendiendo</h3>
            <p className={styles.learningText}>
              Como desarrollador en formación, estoy constantemente explorando nuevas tecnologías y mejorando mis
              habilidades existentes. Actualmente enfocado en profundizar en arquitecturas de microservicios y
              tecnologías cloud.
            </p>
            <div className={styles.nextSkills}>
              <span className={styles.nextSkillsLabel}>Próximas tecnologías:</span>
              <div className={styles.nextSkillsList}>
                <span className={styles.nextSkill}>Docker</span>
                <span className={styles.nextSkill}>AWS</span>
                <span className={styles.nextSkill}>GraphQL</span>
                <span className={styles.nextSkill}>Next.js</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

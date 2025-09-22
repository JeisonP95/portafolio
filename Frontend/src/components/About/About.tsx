import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import foto from "../../assets/foto.jpg"
import styles from "./About.module.css"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <section id="sobre-mi" className={styles.about} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className={styles.title} variants={itemVariants}>
            Sobre mí
          </motion.h2>

          <div className={styles.aboutContent}>
            <motion.div className={styles.imageContainer} variants={imageVariants}>
              <div className={styles.avatarPlaceholder}>
                <img
                  src={foto}
                  alt="Yeison Pencue - Desarrollador Fullstack"
                  className={styles.avatar}
                />
                <div className={styles.avatarOverlay}>
                  <div className={styles.statusIndicator}>
                    <span className={styles.statusDot}></span>
                    <span className={styles.statusText}></span>
                  </div>
                </div>
              </div>
            </motion.div>

            <article className={styles.textContent}>
              <motion.div className={styles.introduction} variants={itemVariants}>
                <h3 className={styles.subtitle}>¡Hola! Soy Yeison</h3>
                <p className={styles.description}>
                  Soy estudiante de <strong>Ingeniería de Sistemas</strong>, apasionado por el desarrollo
                  web. Tengo experiencia con <strong>React</strong>, <strong>Node.js</strong>, <strong>Express</strong>{" "}
                  y <strong>MongoDB</strong>. He trabajado en proyectos de invitaciones digitales, sistemas de rutas
                  logísticas y bases de datos relacionales con <strong>MySQL</strong>.
                </p>
              </motion.div>

              <motion.div className={styles.highlights} variants={itemVariants}>
                <div className={styles.highlight}>
                  <div className={styles.highlightIcon}>🎓</div>
                  <div className={styles.highlightContent}>
                    <h4>Formación Académica</h4>
                    <p>Estudiante de Ingeniería de Sistemas - 6º Semestre</p>
                  </div>
                </div>

                <div className={styles.highlight}>
                  <div className={styles.highlightIcon}>💻</div>
                  <div className={styles.highlightContent}>
                    <h4>Enfoque Técnico</h4>
                    <p>Desarrollo Fullstack con tecnologías modernas</p>
                  </div>
                </div>

                <div className={styles.highlight}>
                  <div className={styles.highlightIcon}>🚀</div>
                  <div className={styles.highlightContent}>
                    <h4>Experiencia</h4>
                    <p>Proyectos reales con impacto en diferentes industrias</p>
                  </div>
                </div>
              </motion.div>

              <motion.div className={styles.journey} variants={itemVariants}>
                <h4 className={styles.journeyTitle}>Mi Trayectoria</h4>
                <div className={styles.journeyItems}>
                  <div className={styles.journeyItem}>
                    <div className={styles.journeyDot}></div>
                    <div className={styles.journeyContent}>
                      <h5>Invitaciones Digitales</h5>
                      <p>Desarrollo de plataforma web con React + Vite + TypeScript y backend con Express + MongoDB</p>
                    </div>
                  </div>

                  <div className={styles.journeyItem}>
                    <div className={styles.journeyDot}></div>
                    <div className={styles.journeyContent}>
                      <h5>Sistema Logístico</h5>
                      <p>Implementación de algoritmo A* para optimización de rutas con React</p>
                    </div>
                  </div>

                  <div className={styles.journeyItem}>
                    <div className={styles.journeyDot}></div>
                    <div className={styles.journeyContent}>
                      <h5>Base de Datos Relacionales</h5>
                      <p>Sistema de inventario académico utilizando MySQL y modelado de datos</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </article>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

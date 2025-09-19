import { motion } from "framer-motion"
import styles from "./Hero.module.css"

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("proyectos")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  }

  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.container}>
        <motion.div className={styles.content} variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1 className={styles.title} variants={itemVariants}>
            Hola, soy <span className={styles.highlight}>Yeison Pencue</span>
          </motion.h1>

          <motion.p className={styles.subtitle} variants={itemVariants}>
            Desarrollador Fullstack en formación
          </motion.p>

          <motion.p className={styles.description} variants={itemVariants}>
            Estudiante de Ingeniería de Sistemas apasionado por crear experiencias web innovadoras y soluciones
            tecnológicas eficientes.
          </motion.p>

          <motion.div className={styles.ctaContainer} variants={itemVariants}>
            <motion.button
              className={`btn btn-primary ${styles.ctaButton}`}
              onClick={scrollToProjects}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Ver proyectos
            </motion.button>

            <motion.button
              className={`btn btn-secondary ${styles.secondaryButton}`}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => {
                const element = document.getElementById("contacto")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Contactar
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.visualElement}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className={styles.floatingCard}>
            <div className={styles.cardContent}>
              <div className={styles.codeSnippet}>
                <div className={styles.codeLine}>
                  <span className={styles.keyword}>const</span> <span className={styles.variable}>developer</span> ={" "}
                  <span className={styles.string}>"Yeison Pencue"</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.keyword}>const</span> <span className={styles.variable}>skills</span> = [
                </div>
                <div className={styles.codeLine}>
                  &nbsp;&nbsp;<span className={styles.string}>"React"</span>,
                </div>
                <div className={styles.codeLine}>
                  &nbsp;&nbsp;<span className={styles.string}>"Node.js"</span>,
                </div>
                <div className={styles.codeLine}>
                  &nbsp;&nbsp;<span className={styles.string}>"MongoDB"</span>
                </div>
                <div className={styles.codeLine}>]</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className={styles.backgroundElements}>
        <motion.div
          className={styles.floatingElement}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`${styles.floatingElement} ${styles.element2}`}
          animate={{
            y: [20, -20, 20],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  )
}

export default Hero

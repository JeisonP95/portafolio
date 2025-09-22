import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Code, Database, Route } from "lucide-react"
import image1 from "../../assets/image.png"
import styles from "./Projects.module.css"

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const projects = [
    {
      id: 1,
      title: "Invitaciones Digitales",
      description:
        "Plataforma web completa para crear y gestionar invitaciones digitales personalizadas. Incluye sistema de RSVP, galería de plantillas y panel administrativo.",
      image: image1,
      technologies: ["React", "TypeScript", "Vite", "Express", "MongoDB", "CSS"],
      category: "Fullstack",
      icon: <Code className={styles.projectIcon} />,
      demoUrl: "https://boda-valentina-jeison.vercel.app",
      githubUrl: "https://github.com/JeisonP95/inv-boda-frontend",
      status: "Completado",
    },
    {
      id: 2,
      title: "Sistema de Rutas Logísticas",
      description:
        "Aplicación para optimización de rutas de entrega utilizando el algoritmo A*. Incluye visualización interactiva de mapas y cálculo de distancias óptimas.",
      image: "/logistics-route-optimization-map-interface-with-pa.jpg",
      technologies: ["React", "JavaScript", "A* Algorithm", "Leaflet", "CSS"],
      category: "Frontend",
      icon: <Route className={styles.projectIcon} />,
      demoUrl: "https://rutas-logisticas-demo.vercel.app",
      githubUrl: "https://github.com/JeisonP95/smartpath-control",
      status: "Completado",
    },
    {
      id: 3,
      title: "Sistema de Inventario",
      description:
        "Base de datos relacional para gestión de inventario académico. Incluye modelado de datos, consultas complejas y reportes automatizados con MySQL.",
      image: "/inventory-management-database-dashboard-with-chart.jpg",
      technologies: ["MySQL", "SQL", "Database Design", "ER Modeling"],
      category: "Database",
      icon: <Database className={styles.projectIcon} />,
      demoUrl: "#",
      githubUrl: "https://github.com/yeisonpencue/inventario-mysql",
      status: "Académico",
    },
  ]

  return (
    <section id="proyectos" className={styles.projects} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Mis Proyectos</h2>
          <p className={styles.subtitle}>
            Una selección de proyectos que demuestran mis habilidades en desarrollo fullstack y resolución de problemas
            técnicos.
          </p>
        </motion.div>

        <motion.div
          className={styles.projectsGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.article key={project.id} className={styles.projectCard} variants={cardVariants}>
              <div className={styles.cardHeader}>
                <div className={styles.imageContainer}>
                  <img src={project.image || "/placeholder.svg"} alt={project.title} className={styles.projectImage} />
                  <div className={styles.imageOverlay}>
                    <div className={styles.projectCategory}>
                      {project.icon}
                      <span>{project.category}</span>
                    </div>
                    <div className={styles.projectStatus}>{project.status}</div>
                  </div>
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>

                <div className={styles.technologies}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.projectLinks}>
                  {project.demoUrl !== "#" && (
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.projectLink} ${styles.demoLink}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      Demo
                    </motion.a>
                  )}
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.projectLink} ${styles.githubLink}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className={styles.moreProjects}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className={styles.moreText}>¿Interesado en ver más proyectos?</p>
          <motion.a
            href="https://github.com/JeisonP95"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-secondary ${styles.githubButton}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            Ver GitHub completo
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

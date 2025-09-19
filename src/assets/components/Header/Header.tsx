import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import styles from "./Header.module.css"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { id: "inicio", label: "Inicio" },
    { id: "sobre-mi", label: "Sobre mí" },
    { id: "proyectos", label: "Proyectos" },
    { id: "habilidades", label: "Habilidades" },
    { id: "contacto", label: "Contacto" },
  ]

  return (
    <motion.header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className={styles.nav}>
        <div className={styles.container}>
          <motion.div className={styles.logo} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button onClick={() => scrollToSection("inicio")}>Yeison Pencue</button>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className={styles.navList}>
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <button onClick={() => scrollToSection(item.id)} className={styles.navLink}>
                  {item.label}
                </button>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ""}`}
          initial={false}
          animate={{ height: isMobileMenuOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className={styles.mobileNavList}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button onClick={() => scrollToSection(item.id)} className={styles.mobileNavLink}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      </nav>
    </motion.header>
  )
}

export default Header

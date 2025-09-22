import type React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Send, CheckCircle, AlertCircle } from "lucide-react"
import styles from "./Contact.module.css"

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido"
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "El email no es válido"
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setFormStatus("loading")

    try {
      //API call - actual endpoint
      const response = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      //network delay
      if (!response.ok) throw new Error("Error en el servidor");
      await response.json();

      // For now, just log the data and show success
      setFormStatus("success")
      setFormData({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus("idle")
      }, 5000)
    } catch (error) {
      console.error("Error sending message:", error)
      setFormStatus("error")

      // Reset error message after 5 seconds
      setTimeout(() => {
        setFormStatus("idle")
      }, 5000)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yeison-pencue-talaga-8549ba18b",
      icon: <Linkedin size={20} />,
      color: "#0077B5",
    },
    {
      name: "GitHub",
      url: "https://github.com/JeisonP95",
      icon: <Github size={20} />,
      color: "#333333",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/573104994168",
      icon: <MessageCircle size={20} />,
      color: "#25D366",
    },
  ]

  return (
    <section id="contacto" className={styles.contact} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Contacto</h2>
          <p className={styles.subtitle}>
            ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él y ver cómo puedo ayudarte.
          </p>
        </motion.div>

        <motion.div
          className={styles.contactContent}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className={styles.contactInfo} variants={itemVariants}>
            <h3 className={styles.infoTitle}>Información de Contacto</h3>
            <p className={styles.infoDescription}>
              Estoy disponible para oportunidades de trabajo, colaboraciones y proyectos interesantes.
            </p>

            <div className={styles.contactDetails}>
              <div className={styles.contactDetail}>
                <div className={styles.detailIcon}>
                  <Mail size={20} />
                </div>
                <div className={styles.detailContent}>
                  <h4>Email</h4>
                  <a href="mailto:yeison.pencue@email.com">jeins951@gmail.com</a>
                </div>
              </div>

              <div className={styles.contactDetail}>
                <div className={styles.detailIcon}>
                  <Phone size={20} />
                </div>
                <div className={styles.detailContent}>
                  <h4>Teléfono</h4>
                  <a href="tel:+573001234567">+57 310 499 4168</a>
                </div>
              </div>

              <div className={styles.contactDetail}>
                <div className={styles.detailIcon}>
                  <MapPin size={20} />
                </div>
                <div className={styles.detailContent}>
                  <h4>Ubicación</h4>
                  <span>Colombia</span>
                </div>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <h4 className={styles.socialTitle}>Sígueme en:</h4>
              <div className={styles.socialGrid}>
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    style={{ borderColor: social.color }}
                    whileHover={{ scale: 1.05, borderColor: social.color }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span style={{ color: social.color }}>{social.icon}</span>
                    <span>{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div className={styles.formContainer} variants={itemVariants}>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <h3 className={styles.formTitle}>Envíame un mensaje</h3>

              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                  placeholder="Tu nombre completo"
                  disabled={formStatus === "loading"}
                />
                {errors.name && (
                  <span className={styles.errorMessage}>
                    <AlertCircle size={16} />
                    {errors.name}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                  placeholder="tu@email.com"
                  disabled={formStatus === "loading"}
                />
                {errors.email && (
                  <span className={styles.errorMessage}>
                    <AlertCircle size={16} />
                    {errors.email}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                  rows={5}
                  disabled={formStatus === "loading"}
                />
                {errors.message && (
                  <span className={styles.errorMessage}>
                    <AlertCircle size={16} />
                    {errors.message}
                  </span>
                )}
              </div>

              <motion.button
                type="submit"
                className={`${styles.submitButton} ${styles[formStatus]}`}
                disabled={formStatus === "loading"}
                whileHover={formStatus === "idle" ? { scale: 1.02 } : {}}
                whileTap={formStatus === "idle" ? { scale: 0.98 } : {}}
              >
                {formStatus === "loading" && (
                  <>
                    <div className={styles.spinner} />
                    Enviando...
                  </>
                )}
                {formStatus === "success" && (
                  <>
                    <CheckCircle size={20} />
                    ¡Mensaje enviado!
                  </>
                )}
                {formStatus === "error" && (
                  <>
                    <AlertCircle size={20} />
                    Error al enviar
                  </>
                )}
                {formStatus === "idle" && (
                  <>
                    <Send size={20} />
                    Enviar mensaje
                  </>
                )}
              </motion.button>

              {formStatus === "success" && (
                <motion.div
                  className={styles.successMessage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <CheckCircle size={20} />
                  <span>¡Gracias por tu mensaje! Te responderé pronto.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

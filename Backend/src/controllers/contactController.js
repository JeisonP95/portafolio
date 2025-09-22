import Contact from "../models/contact.js";

export const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: "Mensaje enviado con éxito", data: newContact });
  } catch (error) {
    console.error("❌ Error en createContact:", error.message);
    res.status(500).json({ error: "Error al enviar el mensaje" });
  }
};

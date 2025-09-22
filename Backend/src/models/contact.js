import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre es obligatorio"],
    },
    email: {
      type: String,
      required: [true, "El email es obligatorio"],
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email no válido"],
    },
    message: {
      type: String,
      required: [true, "El mensaje es obligatorio"],
      minlength: [10, "El mensaje debe tener al menos 10 caracteres"],
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;

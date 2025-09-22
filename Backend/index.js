import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import contactRoutes from "./src/routes/contactRoute.js";
import cors from "cors";

dotenv.config();
connectDB();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Rutas
app.use("/api/contact", contactRoutes);

export default app;
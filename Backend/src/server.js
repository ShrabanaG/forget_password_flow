import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routers/authRoutes.js";
import connectToDb from "./config/db.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

connectToDb();

app.use("/api/auth", authRoutes);

export default app;

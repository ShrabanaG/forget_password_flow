import express from "express";
import {
  forgotPassword,
  resetPassword,
  registerUser,
} from "../controllers/authControllers.js";

const router = express.Router();

router.post("/create-user", registerUser);
router.post("/forgot-password", forgotPassword);
router.post("/rest-password/:token", resetPassword);

export default router;

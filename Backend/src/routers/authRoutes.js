import express from "express";
import {
  forgetPassword,
  resetPassword,
} from "../controllers/authControllers.js";

const router = express.Router();

router.post("/forget-password", forgetPassword);
router.post("/rest-password/:token", resetPassword);

export default router;

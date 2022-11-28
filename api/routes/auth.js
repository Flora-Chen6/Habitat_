import express from "express";
import { register, login, logout, home } from "../controllers/auth.js";

const router = express.Router();

router.post("/", home);
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;